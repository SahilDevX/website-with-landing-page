import React, { useState, useEffect } from 'react';
import CandidateDetailsModal from './CandidateDetailsModal';
import { fetchMyCandidatesList } from './airtablejobsApi'; // Import the fetchMyCandidatesList function

const CandidateList = () => {
  const [candidates, setCandidates] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [selectedCandidate, setSelectedCandidate] = useState(null);

  // Function to fetch candidate list from Airtable
  useEffect(() => {
    fetchMyCandidatesList()
      .then(data => {
        setCandidates(data);
        console.log(data)
      })
      .catch(error => {
        console.error('Error fetching candidate list:', error);
      });
  }, []);

 // Function to filter candidates based on search term and filter status
 const filteredCandidates = candidates.filter(candidate => {
  // Skip candidates without a name property
  if (!candidate.name) {
    return false;
  }

  // Filter based on search term and status
  if (filterStatus !== 'all' && candidate.status !== filterStatus) {
    return false;
  }
  
  // Filter by name
  return candidate.name.toLowerCase().includes(searchTerm.toLowerCase());
});


  // Function to handle search term change
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Function to handle filter status change
  const handleFilterChange = (event) => {
    setFilterStatus(event.target.value);
  };

  // Function to display candidate details in modal
  const displayDetails = (candidate) => {
    setSelectedCandidate(candidate);
  };

  // Function to close candidate details modal
  const handleCloseModal = () => {
    setSelectedCandidate(null);
  };

  return (
    <div className='s'>
      <div className='row my-row pd-20 fld'>
      <div className='card searchbar'>
        <h3 className="search-heading">Search Candidates</h3>
        <form className="search-bar">
          <input className='search-input'
            type="text"
            placeholder="Search by name"
            value={searchTerm}
            onChange={handleSearchChange}
            />
        </form>
      </div>
      <select className='filter-candi-candi filter-job-candi' id="category-filter" value={filterStatus} onChange={handleFilterChange}>
          <option value="all">All</option>
          <option value="Hired">Hired</option>
          <option value="Rejected">Rejected</option>
        </select>
    </div>
        {/* <h1>Candidate List</h1>
        <input className='search-bar-candi ' type="text" placeholder="Search by name" value={searchTerm} onChange={handleSearchChange} />
        <select className='filter-candi' value={filterStatus} onChange={handleFilterChange}>
          <option value="all">All</option>
          <option value="Ongoing">Ongoing</option>
          <option value="Selected">Selected</option>
          <option value="Processing">Processing</option>
        </select> */}
        {filteredCandidates == 0 ?( <div className="no-jobs-card">
              <h2>No Candidate Found</h2>
            </div> ) : (
       <div class="table-wrapper">
    <table class="responsive-table fld">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Location</th>
            <th>Applied for</th>
            {/* <th>Experience</th>
            <th>Remarks</th>
            <th>Expected Salary</th> */}
            <th>Status</th>
            <th>  </th>
          </tr>
        </thead>
        
        <tbody>
        { filteredCandidates.map((candidate, index) => (

          <tr key={candidate.id}>
            <td>{candidate.id}</td> {/* Corrected property name */}
            <td>{candidate.name}</td>
            <td>{candidate.location}</td> {/* Corrected property name */}
            <td>{candidate.job}</td>
            {/* <td>{candidate.experience}</td>
            <td>{candidate.remark}</td>
            <td>{candidate.expectedCTC}</td> */}
            <td>{candidate.status}</td>
            <td>
              <button onClick={() => displayDetails(candidate)}>View Details</button>
            </td>
    </tr>
  ))}
        </tbody>
      </table>
      </div>)}
      {selectedCandidate && (
        <CandidateDetailsModal candidate={selectedCandidate} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default CandidateList;
