import React from 'react';
import profileimg from "./img/userimg.jpg";
import { useNavigate } from 'react-router-dom';


export default function Dashboard({ setActiveMenuItem }) {
  // Dummy data for new applicants
  const candidates = [
    {
      id: 1,
      name: 'John Doe',
      location: 'Bangalore',
      job: 'Software Engineer',
      remark: 'Screening',
      experience: '5 years',
      expectedsalary: '10-15 LPA',
      status: 'Onging',
      view: 's'
    },
    {
      id: 2,
      name: 'Jane Smith',
      location: 'Bangalore',
      job: 'Software Engineer',
      remark: 'Screening',
      experience: '3 years',
      expectedsalary: '10-15 LPA',
      status: 'Selected',
      view: 's'
    },
    {
      id: 3,
      name: 'John Doe',
      location: 'Bangalore',
      job: 'Software Engineer',
      remark: 'Screening',
      experience: '5 years',
      expectedsalary: '10-15 LPA',
      status: 'Onging',
      view: 's'
    },
    {
      id: 4,
      name: 'Jane Smith',
      location: 'Bangalore',
      job: 'Software Engineer',
      remark: 'Screening',
      experience: '3 years',
      expectedsalary: '10-15 LPA',
      status: 'Selected',
      view: 's'
    },
    {
      id: 5,
      name: 'John Doe',
      location: 'Bangalore',
      job: 'Software Engineer',
      remark: 'Screening',
      experience: '5 years',
      expectedsalary: '10-15 LPA',
      status: 'Onging',
      view: 's'
    },
    {
      id: 6,
      name: 'Jane Smith',
      location: 'Bangalore',
      job: 'Software Engineer',
      remark: 'Screening',
      experience: '3 years',
      expectedsalary: '10-15 LPA',
      status: 'Selected',
      view: 's'
    },
    {
      id: 7,
      name: 'John Doe',
      location: 'Bangalore',
      job: 'Software Engineer',
      remark: 'Screening',
      experience: '5 years',
      expectedsalary: '10-15 LPA',
      status: 'Onging',
      view: 's'
    },
    {
      id: 8,
      name: 'Jane Smith',
      location: 'Bangalore',
      job: 'Software Engineer',
      remark: 'Screening',
      experience: '3 years',
      expectedsalary: '10-15 LPA',
      status: 'Selected',
      view: 's'
    },
    {
      id: 9,
      name: 'John Doe',
      location: 'Bangalore',
      job: 'Software Engineer',
      remark: 'Screening',
      experience: '5 years',
      expectedsalary: '10-15 LPA',
      status: 'Onging',
      view: 's'
    },
    {
      id: 10,
      name: 'Jane Smith',
      location: 'Bangalore',
      job: 'Software Engineer',
      remark: 'Screening',
      experience: '3 years',
      expectedsalary: '10-15 LPA',
      status: 'Selected',
      view: 's'
    },
    // Add more candidate objects as needed
  ];

   // Extract the first 10 candidates
   const firstTenCandidates = candidates.slice(0, 8);

   const navigate = useNavigate();

   const handleSeeAllClick = () => {
    navigate('/admin/dashboard');
    setActiveMenuItem('Candidates');
  };

  return (
    <>
    <div className='container-main fld'>
      <h1>Dashboard</h1>
      <div className='dashboard-content'>
        <h1>You Need To Hire</h1>
        <div className="row">
          <div className="col p-4 item">
            <h1 className='num-dash p-2'>5 </h1>
            <h5 className="card-text text-job mrg-left p-2 ">UI/UX Designer <br/> <span className="text-label">(20 Candidate applied)</span> </h5>
          </div>
          <div className="col p-4 item">
            <h1 className='num-dash p-2'>10</h1>
            <h5 className="card-text text-job mrg-left p-2 ">Node.Js Developers <br/> <span className="text-label">(10 Candidate applied)</span> </h5>
          </div>
        </div>
        <div className="row">
          <div className="col p-4 item">
            <h1 className='num-dash p-2'>3 </h1>
            <h5 className="card-text text-job mrg-left p-2 ">FrontEnd Developer<br/> <span className="text-label">(30 Candidate applied)</span> </h5>
          </div>
          <div className="col p-4 item">
            <h1 className='num-dash p-2'>1 </h1>
            <h5 className="card-text text-job mrg-left p-2 ">Content Writer<br/> <span className="text-label">(20 Candidate applied)</span> </h5>
          </div>
        </div>

        <div className='col p-4 text-centerr '>
          <h4 className="card-text text-job  p-2 ">Recruitement Progress</h4>
            <button className='fsize'onClick={handleSeeAllClick}>See All</button>
            <hr className='line'/>
        </div>
        <table className="table fld">
        <thead>
          <tr>
            <th>Name</th>
            <th>Location</th>
            <th>Experience</th>
            <th>Expected Salary</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {candidates.map(candidate => (
            <tr key={candidate.id}>
              <td>{candidate.name}</td>
              <td>{candidate.location}</td>
              <td>{candidate.experience}</td>
              <td>{candidate.expectedsalary}</td>
              <td>{candidate.status}</td>
            </tr>
          ))}
        </tbody>
      </table>

      </div>
      <div className='dashdoard-notification'>
        <div className='col p-4 text-centerr'>
          <h4 className="card-text text-job mrg-left p-2 ">New Applicants</h4>
            <button className='fsize' onClick={handleSeeAllClick} >See All</button>
            <hr className='line'/>
        </div>
        <div className='row p-4'>
          {firstTenCandidates.map((applicant, index) => (
            <div className='col-lg-12 p-2 new-app' key={index}>
                <img src={profileimg} alt="Profile" className="profile-photo img-size" />
                <h5 className='text-job'>{applicant.name} <br/><span className='text-label'>Applied for  {applicant.job}</span></h5>
              </div>
            ))}
        </div>
          
      </div>
    </div>
    </>
  );
}
