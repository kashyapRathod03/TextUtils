import React from 'react'
import PropTypes from 'prop-types';
import {Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid" style={{fontSize:"2.5vh",margin:"0% 5% 0% 5% ",padding:"0% 5% 0% 5%"}}>
          
          <a className="navbar-brand" href="/" style={{fontSize:"3.5vh",fontWeight:"bolder"}}>Text-Utils</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link" aria-current="page">Home</Link>
                {/* <a className="nav-link active" aria-current="page" href="/">Home</a> */}
              </li>
              <li className="nav-item">
              <Link to="/speechrecognization" className="nav-link">Another</Link>
                {/* <a className="nav-link" href="/">About</a> */}
              </li>

            </ul>
            <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
              <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault"/>
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Default switch checkbox input</label>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string,
}
