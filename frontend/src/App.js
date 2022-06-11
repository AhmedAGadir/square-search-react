import './App.css';
import React, { useEffect, useRef } from 'react';
import NavBar from './Components/NavBar';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Portfolio from './Components/Portfolio';
import About from './Components/About';
import Team from './Components/Team';
import Clients from './Components/Clients';
import Contact from './Components/Contact';
import JobsPreview from './Components/JobsPreview';
import Modal from './Components/Modal';
import HomeIntro from './Components/HomeIntro';
import Services from './Components/Services';
import Regions from './Components/Regions';

function App() {
  const underConstructionRef = useRef(null);

  React.useEffect(() => {
    fetch('/api')
      .then((response) => {
        console.log('response', response);
        return response;
      })
      .then((response) => response.json())
      .then((result) => console.log('result', result))
      .catch((err) => {
        console.log(err);
      });

    // underConstructionRef.current.click();
  }, []);

  return (
    <div>
      <button
        ref={underConstructionRef}
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#under-construction-modal"
        style={{ display: 'none' }}
      >
        Under Construction Button
      </button>
      <NavBar />
      <Header />
      <Services />
      <HomeIntro />
      <JobsPreview />
      <Regions />

      {/* <Portfolio /> */}
      {/* <About />
      <Team />
      <Clients /> */}
      <Contact />
      <Footer />
      <Modal />
    </div>
  );
}

export default App;
