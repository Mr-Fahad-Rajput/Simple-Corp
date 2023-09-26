import React from "react";
import { NavLink } from "react-router-dom";


const Footer = () => {

  return (
    <div>
      <footer className="footer text-white">
        <div className="container">
          <footer className="py-2">
            <div className="row">
              <div className="col-3 m-auto">
                <h4>Developed By <br />Fahad Rajput </h4>
              </div>

              <div className="col-2 m-auto">
                <h5>Jump to</h5>
                <ul className="nav flex-column ">
                  <li className="nav-item mb-2">
                    <NavLink to="/login" className="nav-link p-0 text-white">
                    Login
                    </NavLink>
                  </li>
                  <li className="nav-item mb-2">
                    <NavLink to="/about" className="nav-link p-0 text-white">
                    About
                    </NavLink>
                  </li>
                 
                </ul>
              </div>

              <div className="col-2 m-auto">
                <h5>Get in Touch</h5>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2">
                    <NavLink to="/service" className="nav-link p-0 text-white">
                    Services
                    </NavLink>
                  </li>
                  <li className="nav-item mb-2">
                    <NavLink to="/contact" className="nav-link p-0 text-white">
                    Contact Us
                    </NavLink>
                  </li>
                  
                </ul>
              </div>

              <div className="col-4 offset-1">
                <form>
                  <h5>Subcribe To Newsletter</h5>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, eum.</p>
                  <div className="d-flex w-100 gap-2">
                    <label htmlFor="newsletter1" className="visually-hidden">
                      Email address
                    </label>
                    <input
                      id="newsletter1"
                      type="text"
                      className="form-control"
                      placeholder="Email address"
                    />
                    <button
                      className="btn btn-primary rounded-pill px-4"
                      type="button"
                    >
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <div className="d-flex justify-content-between pt-4 mt-4 border-top">
              <p>SimpleCorp : <br />Web Template </p>
              <ul className="list-unstyled d-flex">
                <li className="ms-3">
                  <NavLink className="link-light" to="#">
                    <i className="fa fa-facebook fa-2x"></i>
                  </NavLink>
                </li>
                <li className="ms-3">
                  <NavLink className="link-light" to="#">
                    <i className="fa fa-instagram fa-2x"></i>
                  </NavLink>
                </li>
                <li className="ms-3">
                  <NavLink className="link-light" to="#">
                    <i className="fa fa-twitter fa-2x"></i>
                  </NavLink>
                </li>
              </ul>
            </div>
          </footer>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
