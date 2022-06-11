import React, { useState, useMemo, useRef } from "react";
import useSearch from "../utils/useSearch";
import { JOBS } from "../jobs";
import SelectSearch, { useSelect } from "react-select-search";

import "./SearchBar.scss";
import classNames from "classnames";
import getFilteredItems from "../utils/getFilteredItems";

const SearchBar = () => {
  // const [selectedValue, setSelectedValue] = useState(null);
  // const [value, setValue] = useState('');
  // const [searching, setSearching] = useState(false);
  // const inputRef = useRef();

  // const options = JOBS.map(job => ({
  //     ...job,
  //     value: job._id.$oid,
  //     name: `${job.jobTitle} - ${job.location} - ${job.term}`.slice(0,10)
  // }))

  // const onChange = (e) => {
  //     console.log('change', e, inputRef.current.value.text);
  //     // setValue(e.target.value);
  // }

  // const handleFilter = (items) => {
  //     return (searchValue) => {
  //         // setValue(searchValue);
  //         if (searchValue.length === 0) {
  //             setSearching(false);
  //             return [];
  //         }
  //         let filteredItems = getFilteredItems(searchValue, items, ['jobTitle', 'location', 'term']);
  //         setSearching(filteredItems.length !== 0);
  //         return filteredItems;
  //     }
  // }

  // return (
  //     <div className={classNames('searchbar container', {
  //         searching,
  //     })}>
  //         <SelectSearch
  //             options={options}
  //             search
  //             // value={value}
  //             // ref={inputRef}
  //             onChange={onChange}
  //             filterOptions={handleFilter}
  //             placeholder="Job, Title or Keyword"

  //             />
  //     </div>
  // );

  const attributes = useMemo(() => ["jobTitle", "location", "term"], []);

  const [filteredJobs, search, setSearch] = useSearch(JOBS, attributes);
  const [searchFocused, setSearchFocused] = useState(false);

  const filteredJobsRef = useRef();

  const [cursor, setCursor] = useState(0);

  const isVisible = function (ele, container) {
    const eleTop = ele.offsetTop;
    const eleBottom = eleTop + ele.clientHeight;

    const containerTop = container.scrollTop;
    const containerBottom = containerTop + container.clientHeight;

    // The element is fully visible in the container
    return (
        (eleTop >= containerTop && eleBottom <= containerBottom) ||
        // Some part of the element is visible in the container
        (eleTop < containerTop && containerTop < eleBottom) ||
        (eleTop < containerBottom && containerBottom < eleBottom)
    );
};

  const handleKeyDown = (e) => {
      let nextCursor = cursor;
      // arrow up/down button should select next/previous list element
      if (e.keyCode === 38 && cursor > 0) { 
          nextCursor = cursor - 1;
        } else if (e.keyCode === 40 && cursor < filteredJobs.length - 1) {
            nextCursor = cursor + 1;
        }    
    if (filteredJobsRef.current) {
        let nextFilterItemDiv = filteredJobsRef.current.querySelector(`[tabIndex="${nextCursor}"]`);

        if (!isVisible(nextFilterItemDiv, filteredJobsRef.current)) {
            nextFilterItemDiv.scrollIntoView(false);
        }

    }
    setCursor(nextCursor);
  }

  const openJob = (id) => {
    alert(`open job page ${id}`);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    alert(
      `open search results page ${search}, ${JSON.stringify(filteredJobs)}`
    );
  };

  return (
    <div
      className={classNames("search-container col", {
        searching: search && filteredJobs.length > 0,
      })}
    //   onFocus={() => setSearchFocused(true)}
    //   onBlur={() => setSearchFocused(false)}
    >
      <form onSubmit={onSubmit}>
        <input
          className="form-control form-control-lg"
          id="jobsearch"
          type="text"
          placeholder="Job, Title or Keyword"
          value={search}
          onChange={setSearch}
          onKeyDown={handleKeyDown}
        />
        <button
          className="btn btn-primary btn-lg"
          id="submitButton"
          type="submit"
        >
          <i className="bi bi-search"></i>
        </button>
      </form>
      {search && (
        <div className="filtered-jobs list-group" ref={filteredJobsRef}>
          {filteredJobs.map((job, i) => (
            <div
              className={classNames("list-group-item", {
                active: cursor === i
              })}
              key={job._id.$oid}
              onClick={() => openJob(job._id.$oid)}
              tabIndex={i.toString()}
            >
              {job.jobTitle}{" "}
              <span className="text-secondary">
                - {job.location} - {job.term}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
