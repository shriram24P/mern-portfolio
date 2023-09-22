import React from "react";
import { useTheme } from "../../Context/ThemeContext";
import "./home.css";
import Fade from "react-reveal/Fade";

import Typewriter from "typewriter-effect";
import Resume from "../../assets/docs/Shriram-Patil-resume.pdf";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";

const Home = () => {
  const [theme, setTheme] = useTheme();
  //handle theme
  const handleTheme = () => {
    setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
  };
  return (
    <>
      <div className="container-fluid home-container" id="home">
        <Fade right>
          <div className="theme-btn" onClick={handleTheme}>
            {theme === "light" ? (
              <BsFillMoonStarsFill size={30} />
            ) : (
              <BsFillSunFill size={30} />
            )}
          </div>
        </Fade>
        <div className="container home-content">
          <Fade right>
            <h2>Hi 👋 I'm a</h2>

            <h1>
              <Typewriter
                options={{
                  strings: [
                    "Frontend Developer !",
                    "MERN Stack Developer !",
                    "ReactJS Developer !",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
          </Fade>
          <Fade bottom>
            <div className="home-buttons">
              <a
                className="btn btn-hire"
                href="https://api.whatsapp.com/send?phone=7038455432"
                rel="noreferrer"
                target="_blank"
              >
                Hire Me
              </a>

              <a
                className="btn btn-cv"
                href={Resume}
                download="Shriram-Patil-resume.pdf"
              >
                My Resume
              </a>
            </div>
          </Fade>
        </div>
      </div>
    </>
  );
};

export default Home;
