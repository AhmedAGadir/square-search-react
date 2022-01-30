import React from 'react';

const Header = () => {
    return (
        < header className="masthead" >
            <div className="container">
                {/* <!-- <div className="masthead-subheading">Welcome To Our Studio!</div> --> */}
                <div className="masthead-heading text-uppercase">Find a <span className="text-primary">role</span> and get
                    innovating</div>
                <div className="row">
                    <div className="col" style={{ position: 'relative' }}>
                        <input className="form-control form-control-lg" id="jobsearch" type="text"
                            placeholder="Job, Title or Keyword" />
                        <button className="btn btn-primary btn-lg"
                            style={{ position: 'absolute', top: 0, right: 12, height: '100%', width: 80, fontSize: '2rem' }}
                            id="submitButton" type="submit"><i className="bi bi-search"></i></button>
                    </div>
                </div>
            </div>
        </header >
    )
}

export default Header;
