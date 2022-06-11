import React from 'react';
import Dropzone from './StyledDropZone';

// const Modal = () => {
//     return (
        
//         <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//   <div className="modal-dialog">
//     <div className="modal-content">
//       <div className="modal-header">
//         <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
//         <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//       </div>
//       <div className="modal-body">
//         ...
//       </div>
//       <div className="modal-footer">
//         <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//         <button type="button" className="btn btn-primary">Save changes</button>
//       </div>
//     </div>
//   </div>
// </div>
//     )
// }

const UnderConstructionModal = () => (
  <div className="portfolio-modal modal fade" id="under-construction-modal" tabIndex={-1} role="dialog" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="modal-body">
                    <h2 className="text-uppercase">This Website is under construction</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
)

const SubmitCVModal = () => (
  <div className="portfolio-modal modal fade" id="portfolioModal2" tabIndex={-1} role="dialog" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content" style={{paddingBottom: '3rem'}}>
            <div className="close-modal" data-bs-dismiss="modal"><img src="assets/img/close-icon.svg"
              alt="Close modal" style={{transform: 'scale(0.5)'}} /></div>
            <div className="container">
                <h3 className="text-uppercase">Upload A CV</h3>
                  <div className="modal-body">
                  <Dropzone />
                  </div>
            </div>
          </div>
        </div>
      </div>
);

const ModalExample = () => (
  <div className="portfolio-modal modal fade" id="portfolioModal3" tabIndex={-1} role="dialog" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="close-modal" data-bs-dismiss="modal"><img src="assets/img/close-icon.svg"
        alt="Close modal" /></div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="modal-body">
              {/* <!-- Project details--> */}
              <h2 className="text-uppercase">Project Name</h2>
              <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
              <img className="img-fluid d-block mx-auto" src="assets/img/portfolio/3.jpg" alt="..." />
              <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt
                repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae,
                nostrum, reiciendis facere nemo!</p>
              <ul className="list-inline">
                <li>
                  <strong>Client:</strong>
                  Finish
                </li>
                <li>
                  <strong>Category:</strong>
                  Identity
                </li>
              </ul>
              <button className="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal"
                type="button">
                <i className="fas fa-times me-1"></i>
                Close Project
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
)

const Modal = () => {

    return (
      <>
        <UnderConstructionModal />
        <SubmitCVModal />
        <ModalExample />
      </>
    )
}

export default Modal;