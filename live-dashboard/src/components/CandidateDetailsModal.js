import React from 'react';
import moment from 'moment';

const CandidateDetailsModal = ({ candidate, onClose }) => {
  const formatDateTime = (isoString) => {
    return moment(isoString).format('MMMM DD, YYYY hh:mm:ss A Z');
  };
  const formattedDate = formatDateTime(candidate.created_at);
  // Check if remark is empty or undefined, and default to 'NA'
  const remark = candidate.remark ? candidate.remark : 'NA';
  return (
    <>
      <div className="modal-overlay " onClick={onClose}></div>
<div className="modal-container fld">
  <span className="close-button" onClick={onClose}>Close <i class="bi bi-x-octagon"></i> </span>
  {/* <div className="modal-content border-black">
    <h3>Details</h3>
    <hr className='line' />
    <div className='row'>
      <div className='col-md-6 col-sm-12'>
        <h5 className='candi-label'>Current Status<br/><span className='candi-text'>{candidate.status}</span></h5>
      </div>
      <div className='col-md-6 col-sm-12'>
        <h5 className='candi-label'>Assigned To<br/><span className='candi-text'> {candidate.recEmail}</span></h5>
      </div>
      <div className='col-md-6 col-sm-12'>
        <h5 className='candi-label'>Stage<br/><span className='candi-text'>{candidate.remark}</span></h5>
      </div>
      <div className='col-md-6 col-sm-12'>
        <h5 className='candi-label'>Remark<br/><span className='candi-text'>{candidate.remark}</span></h5>
      </div>
    </div>
    <hr className='line'/>
    <h5 className='card-text'>Last Updated on : {candidate.updated_at} </h5>
  </div> */}
  <div className="modal-content border-black">
    <h3>{candidate.name}</h3>
    <hr className='line' />
    <h5 className="candi-label">Applied for : <span className='candi-text'>{candidate.job}</span></h5>
    <div className='row'>
      <div className='col-md-6 col-sm-12'>
        <h5 className='candi-label'>Current Status : <span className='candi-text'>{candidate.status}</span></h5>
      </div>
      <div className='col-md-6 col-sm-12'>
        <h5 className='candi-label'>Remark : <span className='candi-text'>{remark}</span></h5>
      </div>
    </div>
    <div className='row'>
      <div className='col-md-3 col-sm-6'>
        <h5 className='candi-label'>Location <br/><span className='candi-text'>{candidate.location}</span></h5>
      </div>
      <div className='col-md-3 col-sm-6'>
        <h5 className='candi-label'>Notice Period<br/><span className='candi-text'> {candidate.noticePeriod}</span></h5>
      </div>
      <div className='col-md-3 col-sm-6'>
        <h5 className='candi-label'>Current CTC<br/><span className='candi-text'>{candidate.currentCTC}</span></h5>
      </div>
      <div className='col-md-3 col-sm-6'>
        <h5 className='candi-label'>Expected CTC<br/><span className='candi-text'>{candidate.expectedCTC}</span></h5>
      </div>
      {/*
      <div className='col-md-3 col-sm-6'>
        <h5 className='candi-label'>Candidate Name<br/><span className='candi-text'>{candidate.name}</span></h5>
      </div>
      <div className='col-md-3 col-sm-6'>
        <h5 className='candi-label'>Role ID<br/><span className='candi-text'>{candidate.job}</span></h5>
      </div>
       <div className='col-md-3 col-sm-6'>
        <h5 className='candi-label'>Recruiter ID<br/><span className='candi-text'> {candidate.recEmail}</span></h5>
      </div>
      <div className='col-md-3 col-sm-6'>
        <h5 className='candi-label'>Candidate Email ID<br/><span className='candi-text'>{candidate.Email}</span></h5>
      </div>
      <div className='col-md-3 col-sm-6'>
        <h5 className='candi-label'>Candidate Phone No<br/><span className='candi-text'>{candidate.Mobile_Number}</span></h5>
      </div>
      <div className='col-md-3 col-sm-6'>
        <h5 className='candi-label'>Years Of Experience<br/><span className='candi-text'> {candidate.Experience}</span></h5>
      </div> */}
      
      
    </div>
    <hr className='line'/>
    <h5 className='card-text'>Submitted on : {formattedDate}</h5>
  </div>
</div>

      
    </>
  );
};

export default CandidateDetailsModal;
