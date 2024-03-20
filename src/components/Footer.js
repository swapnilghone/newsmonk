import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 mt-5 border-top bg-dark text-white">
            <div className="col-md-4 d-flex align-items-center ms-5">
              <a href="/" className="mb-3 me-2 mb-md-0 text-white text-decoration-none lh-1">
                <img src={process.env.PUBLIC_URL+"/logo.png"} width="50px" alt="Site logo in footer" /> NewsMonk
              </a>
              <span className="mb-3 mb-md-0 ">© 2024 Company, Inc</span>
            </div>
        </footer>
    )
  }
}