import React from 'react';
import { JOBS } from '../jobs';
import JobCard from './JobCard';

const JobsPreview = () => {
    return (
        <section className="page-section" id="jobs">
            <div className="container my-4 jobs-preview">
                <div className="row d-flex justify-content-between card-group ">
                    {JOBS.slice(0,4).map(({jobTitle, location, term, _id}) => (
                        <JobCard  
                            key={_id.$oid}
                            title={jobTitle}
                            location={location}
                            term={term}
                            description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti aliquam quae sint eos at officiis odit officia modi rerum quaerat minima ex, fugiat atque eum tempore repudiandae iste nulla accusantium."} />
                    ))}
                </div>
                <div className="d-flex justify-content-center my-5">
                    <button type="button" className="btn btn-primary"><strong>View more jobs</strong></button>
                </div>
            </div>
        </section>
    )
}

export default JobsPreview;

