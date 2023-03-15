import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import {Link} from "react-router-dom"

export class Navbar extends Component {

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              NewsHive
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    About
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <span
                    className="nav-link dropdown-toggle"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    What You want to see?
                  </span>
                  <ul className="dropdown-menu">
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/general"
                      >
                        General
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/entertainment">
                        Entertainment
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/business">
                        Business
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/sports">
                        Sports
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/science">
                        Science
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/health">
                        Health
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/technology">
                        Technology
                      </Link>
                    </li>
                    {/* <li>
                      <hr className="dropdown-divider" />
                    </li> */}
                    {/* <li>
                      <Link className="dropdown-item" to="/">
                        More National/International News Here
                      </Link>
                    </li> */}
                  </ul>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Contact
                  </Link>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button
                  className="btn btn-outline-success"
                  type="submit"
                  style={{ fontWeight: "900" }}
                >
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
// Politics : https://newsapi.org/v2/top-headlines?country=in&category=politics&apiKey=3f73dcbee85145c3aae56c88551aa238
// Sports : https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=3f73dcbee85145c3aae56c88551aa238
// Business : https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=3f73dcbee85145c3aae56c88551aa238
// Entertainment : https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=3f73dcbee85145c3aae56c88551aa238

export default Navbar
