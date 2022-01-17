import React, { useEffect, useState } from "react";
import sprite from "../../assets/photos/Pixel-Darron.png";
import "../Overview/overview.css";
import "../Skills/skills.css";
import reactIcon from "../../logo.svg";
import BBanner from "../../assets/photos/black-banner.png";
import stars from "../../assets/photos/stars.png";

export default function Skills(props) {
  const passives = ["Java", "Redux", "MongoDB", "SQL", "Express.js", "Google Cloud"];
  const [Flipped, setFlipped] = useState(false);

  const p = passives.map((pass, index) => {
    return (
      <li style={{ animationDelay: `1.${index}s` }} title={pass}>
        {pass}
      </li>
    );
  });

  const Progress = ({ full }) => {
    const [style, setStyle] = useState({});

    setTimeout((e) => {
      const newStyle = {
        opacity: 1,
        width: `${full}%`,
      };
      setStyle(newStyle);
    }, 1000);
    return (
      <div className="progress">
        <div className="progress-full" style={style}>
          <p>
            <b>Rank: {full / 10}</b>
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="skills-container load">
      <h1>Skill List: </h1>

      <div className="rate-card-skills">
        <div className="Active-skill-container">
          <h2>Active Skills:</h2>
          <div className="skill-meter">
            <h3>Javascript(React)</h3>
            <Progress full="80" />
          </div>
          <div className="skill-meter">
            <h3>Javascript(Vanilla)</h3>
            <Progress full="75" />
          </div>
          <div className="skill-meter">
            <h3>CSS</h3>
            <Progress full="85" />
          </div>
          <div className="skill-meter">
            <h3>Node.js</h3>
            <Progress full="60" />
          </div>
        </div>
        <div className="card-rating-container">
          <div
            onClick={() => {
              setFlipped(!Flipped);
            }}
            className={Flipped === true ? "backside flip2" : "backside unflip2"}
          >
            <div className="backside-container">
              <img src={reactIcon} />
              <h1>Pocket-Dev</h1>
              <div className="backside-style">
                <p>Pocket-Dev™ 2020</p>
              </div>
              
            </div>
          </div>
          <div
            onClick={() => {
              setFlipped(!Flipped);
            }}
            className={
              Flipped === true
                ? "card-rating float flip"
                : "card-rating float unflip"
            }
          >
            <div className="top-label">
              <img src={reactIcon} />
              <h3>Darron Moore</h3>
            </div>
            <div className="card-banner">
              <div className="sprite-container">
                <img style={{ width: "55%" }} src={sprite} />
              </div>
              <div className="sprite-info">
                <div className="text-padding">
                  <p>
                    <b>Mid-Level Web Developer:</b>
                  </p>
                  <small>
                    <b>Skilled in React -</b> familiar with concepts such as
                    pure components, functional components, use of hooks,
                    context Api, and life cycles.
                  </small>
                  <br></br>
                  <small>
                    <b>Proficient in CSS -</b> Able to style and animate
                    components using vanilla CSS and SASS.
                  </small>
                </div>
                <div className="bottom-banner">
                  <div className="corner-1"></div>
                  <div className="center">Full-Stack</div>
                  <div className="corner-2"></div>
                </div>

                <div className="star-rank-container float2">
                  <img className="black-banner" src={BBanner} />
                  <img
                    style={{ animationDelay: "1.5s" }}
                    className="star star-enter"
                    src={stars}
                  />
                  <img
                    style={{ top: "-165px", animationDelay: "1.8s" }}
                    className="star star-enter"
                    src={stars}
                  />
                  <img
                    style={{ top: "-170px", animationDelay: "2s" }}
                    className="star star-enter"
                    src={stars}
                  />
                  <img
                    style={{ top: "-175px", animationDelay: "2.2s" }}
                    className="star star-enter"
                    src={stars}
                  />
                  <img
                    style={{ top: "-170px", animationDelay: "2.4s" }}
                    className="star star-enter"
                    src={stars}
                  />
                  <img
                    style={{ top: "-165px", animationDelay: "2.6s" }}
                    className="star star-enter"
                    src={stars}
                  />
                  <img
                    style={{ animationDelay: "2.8s" }}
                    className="star star-enter"
                    src={stars}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h2 style={{ paddingLeft: "7%" }}>Passive Skills:</h2>
      <div className="passive-container">{p}</div>
    </div>
  );
}
