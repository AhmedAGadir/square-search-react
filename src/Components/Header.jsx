import React, { useMemo, useState } from 'react';

import useSearch from '../utils/useSearch';
import classNames from 'classnames';
import { JOBS } from '../jobs';

import './Header.scss'

const Header = () => {

    const attributes = useMemo(() => ['jobTitle', 'location', 'term'], []);

    const [filteredJobs, search, setSearch] = useSearch(JOBS, attributes);
    
    const [searchFocused, setSearchFocused] = useState(false);

    const openJob = id => {
        alert(`open job page ${id}`);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        alert(`open search results page ${search}, ${JSON.stringify(filteredJobs)}`);
    }

    return (
        <header className={classNames("masthead", {
            searching: search && filteredJobs.length > 0
        })} id="header">
            <div className="container">
                {/* <!-- <div className="masthead-subheading">Welcome To Our Studio!</div> --> */}
                <div className="masthead-heading text-uppercase">Find a <span className="text-primary">role</span> and get
                    innovating</div>
                <div className="row">
                    <div className="search-container col" onFocus={() => setSearchFocused(true)} onBlur={() => setSearchFocused(false)}>
                        <form onSubmit={onSubmit}>
                            <input className="form-control form-control-lg" id="jobsearch" type="text"
                                placeholder="Job, Title or Keyword" value={search} onChange={setSearch} />
                            <button className="btn btn-primary btn-lg"
                                id="submitButton" type="submit"><i className="bi bi-search"></i></button>
                        </form>
                        { search && (
                            <div className="filtered-jobs list-group">
                                { filteredJobs.map((job) => (
                                    <div className="list-group-item" key={job._id.$oid} onClick={() => openJob(job._id.$oid)}>
                                        {job.jobTitle} <span className="text-secondary">- {job.location} - {job.term}</span>
                                    </div>)) }
                            </div>
                        )}
                    </div>
                </div>
            </div>

        </header >
    )
}

export default Header;
