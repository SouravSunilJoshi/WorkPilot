import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/">
          <a className="navbar-brand" href="#">
            WorkPilot
          </a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link to="/">
                <a className="nav-link" href="#">
                  Home
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/send" className="remove-link">
                <a className="nav-link">
                  Add
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/send">
                <Link to='/search'>
                <a className="nav-link" href="#">
                  Search
                </a>
                </Link>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
