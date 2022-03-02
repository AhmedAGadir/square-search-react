import React from 'react';

const JobCard = (props) => {
    return (
        <div className="card mx-3">
            <div className="d-flex bg-info align-items-center justify-content-center text-center" style={{height: '10rem'}}>
                <h4>{props.jobTitle}</h4>
            </div>
            <div className="card-body">
                <h5 className="card-title">{props.jobTitle}</h5>
                <p className="card-text">{props.jobDescription}</p>
            </div>
            <div className="card-body">
                <a href="#" className="card-link">Another link</a>
            </div>
        </div>

        
    )
}

export default JobCard;

