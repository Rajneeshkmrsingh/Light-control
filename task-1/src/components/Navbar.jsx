import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="container">
        <nav className="navbar navbar-expand-lg ">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              Task
            </a>
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
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item px-3">
                  <NavLink
                    className={({isActive})=>(isActive?"nav-link active":"nav-link") }
                    aria-current="page"
                    to="/User-1"
                  >
                    User1
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className={({isActive})=>(isActive?"nav-link active":"nav-link") } aria-current="page" to="/User-2">
                    User2
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
