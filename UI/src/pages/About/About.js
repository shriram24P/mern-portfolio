import React from "react";
import "./About.css";
import Jump from "react-reveal/Jump";

const About = () => {
  return (
    <>
      <Jump>
        <div className="about" id="about">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
              <img src="./images/profile.jpg" alt="profile-pic" />
            </div>

            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1>About me</h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore
                ab officiis modi quia nesciunt deleniti voluptas iste eos aut
                placeat pariatur hic doloremque ullam accusamus sunt velit quas
                tempore minima, voluptatem ipsam dolor. Quia excepturi, minus
                provident quasi perspiciatis veritatis tempore. Incidunt dolores
                voluptates et ducimus quae sint neque, enim voluptatum sapiente
                quaerat ut iste porro, modi repudiandae dolorum doloremque
                dolore labore exercitationem, esse veritatis? Fugit inventore
                odit ut architecto voluptatum aliquid cumque necessitatibus
                placeat! Nulla rerum commodi ab quod dolorem, vitae natus
                doloremque. Placeat nam quae ratione omnis eligendi, error
                facere voluptate fuga incidunt,
              </p>
            </div>
          </div>
        </div>
      </Jump>
    </>
  );
};

export default About;
