import React from 'react';
import  {cloudSeverSvg,
    codingSvg,
    emergingTechnologiesSvg,
    cyberSecuritySvg } from '../Icons';

const Services = () => {
    return (
        <section className="page-section" id="services">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">Services</h2>
            <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
          </div>
          <div className="row text-center">
            <div className="col-md-3">
              <span className="fa-stack fa-4x">
                <i className="fas fa-circle fa-stack-2x text-primary"></i>
                {/* <i className="fas fa-shopping-cart fa-stack-1x fa-inverse"></i> */}
                {/* <img src="assets/img/coding.svg  " alt="..." /> */}
                {codingSvg}
              </span>
              <h4 className="my-3">E-Commerce</h4>
              <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam
                architecto quo inventore harum ex magni, dicta impedit.</p>
            </div>
            <div className="col-md-3">
              <span className="fa-stack fa-4x">
                <i className="fas fa-circle fa-stack-2x text-primary"></i>
                {cyberSecuritySvg}
                {/* <i className="fas fa-laptop fa-stack-1x fa-inverse"></i> */}
              </span>
              <h4 className="my-3">Responsive Design</h4>
              <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam
                architecto quo inventore harum ex magni, dicta impedit.</p>
            </div>
            <div className="col-md-3">
              <span className="fa-stack fa-4x">
                <i className="fas fa-circle fa-stack-2x text-primary"></i>
                {/* <i className="fas fa-lock fa-stack-1x fa-inverse"></i> */}
                {cloudSeverSvg}
              </span>
              <h4 className="my-3">Web Security</h4>
              <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam
                architecto quo inventore harum ex magni, dicta impedit.</p>
            </div>
            <div className="col-md-3">
              <span className="fa-stack fa-4x">
                <i className="fas fa-circle fa-stack-2x text-primary"></i>
                {/* <i className="fas fa-lock fa-stack-1x fa-inverse"></i> */}
                {emergingTechnologiesSvg}
              </span>
              <h4 className="my-3">Web Security</h4>
              <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam
                architecto quo inventore harum ex magni, dicta impedit.</p>
            </div>
          </div>

        </div>
      </section >
    )
}

export default Services;
