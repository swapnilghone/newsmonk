import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <>
        <header className="p-3 bg-dark text-white mb-5">
          <div className="container">
            <div className="d-flex flex-wrap align-items-center justify-content-between justify-content-lg-between">
              <a href="/" className="d-flex align-items-center mb-2 me-5 mb-lg-0 text-white text-decoration-none">
                <img src={process.env.PUBLIC_URL + "/logo.png"} width="50px" alt="site logo" />
                <h3 className="mb-0">NewsMonk</h3>
              </a>
              <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav" >
                    <li className='nav-item'><NavLink to="/" className="nav-link">Home</NavLink></li>
                    <li className='nav-item'><NavLink to="/entertainment" className="nav-link">Entertainment</NavLink></li>
                    <li className='nav-item'><NavLink to="/sports" className="nav-link">Sports</NavLink></li>
                    <li className='nav-item'><NavLink to="/science" className="nav-link">Science</NavLink></li>
                    <li className='nav-item'><NavLink to="/business" className="nav-link">Business</NavLink></li>
                    <li className='nav-item'><NavLink to="/technology" className="nav-link">Technology</NavLink></li>
                    <li className='nav-item'><NavLink to="/health" className="nav-link">Health</NavLink></li>
                  </ul>
                </div>
              </nav>
              <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
                <input type="search" className="form-control form-control-dark" placeholder="Search..." aria-label="Search" />
              </form>
            </div>
          </div>
        </header>
      </>
    )
  }
}
