import React from "react";

const Services = () => {
  return (
    <div>
      <section id="service">
        <div className="container my-5 py-5">
          <div className="row">
            <div className="col-12">
              <h1 className="display-6 text-center mb-4">
                 <b>Services</b> 
              </h1>
              <hr className="w-25 mx-auto" />
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-4">
              <div className="card p-3 ">
                <div className="card-body text-center">
                    <i className="fa fa-cogs fa-4x mb-4 text-primary"></i>
                  <h5 className="card-title mb-3 fs-4 fw-bold">Market Analysis</h5>
                  <p className="card-text lead">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, a!
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card p-3 ">
                <div className="card-body text-center">
                    <i className="fa fa-mobile fa-4x mb-4 text-primary"></i>
                  <h5 className="card-title mb-3 fs-4 fw-bold">Consulting</h5>
                  <p className="card-text lead">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, quis.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card p-3 ">
                <div className="card-body text-center">
                    <i className="fa fa-users fa-4x mb-4 text-primary"></i>
                  <h5 className="card-title mb-3 fs-4 fw-bold">Human Resource</h5>
                  <p className="card-text lead">
                   Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt, molestias.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-4">
              <div className="card p-3 ">
                <div className="card-body text-center">
                    <i className="fa fa-laptop fa-4x mb-4 text-primary"></i>
                  <h5 className="card-title mb-3 fs-4 fw-bold">Legal Advice</h5>
                  <p className="card-text lead">
                   Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit, mollitia.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card p-3 ">
                <div className="card-body text-center">
                    <i className="fa fa-file-code-o fa-4x mb-4 text-primary"></i>
                  <h5 className="card-title mb-3 fs-4 fw-bold">Business Optimization</h5>
                  <p className="card-text lead">
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, neque?
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card p-3 ">
                <div className="card-body text-center">
                    <i className="fa fa-star-half-o fa-4x mb-4 text-primary"></i>
                  <h5 className="card-title mb-3 fs-4 fw-bold">Audits</h5>
                  <p className="card-text lead">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae, porro!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
