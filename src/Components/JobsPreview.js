import React from 'react';
import JobCard from './JobCard';

const JobsPreview = () => {
    return (
        <div className="container my-4 jobs-preview">
                <div className="row d-flex justify-content-between card-group ">
                    <JobCard  
                        jobTitle="Azure DevOps Engineer"
                        jobDescription="Some quick example text to build on the card title and make up the bulk of the card's content."/>
                    <JobCard  
                        jobTitle="DevOps Engineer"
                        jobDescription="Some quick example text to build on the card title and make up the bulk of the card's content."/>
                    <JobCard 
                        jobTitle="Site Reliability Engineer|AWS|Networking"
                        jobDescription="Some quick example text to build on the card title and make up the bulk of the card's content."/>
                    <JobCard 
                        jobTitle="Technical Project Manager"
                        jobDescription="Some quick example text to build on the card title and make up the bulk of the card's content."/>
                </div>
                <div className="d-flex justify-content-center my-5">
                    <button type="button" className="btn btn-info"><strong>View more jobs</strong></button>
                </div>
        </div>
    )
}

export default JobsPreview;

