import React from "react";
import "./Projects.css";

const Projects = () => {
  return (
    <>
      <div className="container project" id="projects">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Top recent Projects
        </h2>
        <hr />
        <p className="pb-3 text-center">
          here are my top 3 recent projects with live links and source code
        </p>
        {/* card design */}
        <div className="row" id="ads">
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">React Project</span>
                <img src="./images/crypto-dashboard.png" alt="project1" />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">HTML</span>
                <span className="card-detail-badge">CSS</span>
                <span className="card-detail-badge">JavaScript</span>
                <span className="card-detail-badge">react</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">Crypto Dashboard</h5>
                </div>
                <a
                  className="ad-btn"
                  href="https://shriram-crypto-dashboard.netlify.app/"
                >
                  View
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">React Project</span>
                <img src="./images/expenso.jpg" alt="project2" />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">HTML</span>
                <span className="card-detail-badge">CSS</span>
                <span className="card-detail-badge">react</span>
                <span className="card-detail-badge">Redux</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">Expenso</h5>
                </div>
                <a className="ad-btn" href="https://expenso24.netlify.app/">
                  View
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">React Project</span>
                <img src="./images/weather.jpg" alt="project3" />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">HTML</span>
                <span className="card-detail-badge">CSS</span>
                <span className="card-detail-badge">JavaScript</span>
                <span className="card-detail-badge">react</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">React Weather App</h5>
                </div>
                <a
                  className="ad-btn"
                  href="https://recact-weather-app.netlify.app/"
                >
                  View
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
