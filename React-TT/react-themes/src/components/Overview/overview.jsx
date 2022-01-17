import React from "react";
import Darron from "../../assets/photos/Darron.png";
import "../Overview/overview.css";

export default function overview(props) {
  return (
    <div className="overview-container load">
      <div className="bio">
        <h1>Darron Moore - Software Engineer</h1>
        <p>
        I am an adaptable software developer currently working as a fulltime freelance developer
         Aiming to leverage proven critical thinking, problem solving, and communication skills.
          As well as software development experience to successfully fill the software engineering 
          role at your company. Frequently praised as hard working by my peers, supportive teamwork,
           as well as dependable initiative, I can be relied upon to help your company achieve its goals.      
        </p>
        <div className="stats">
          <div style={{ width: "45%" }}>
            <h1>Interests: </h1>
            <p>
              <b>Reading</b> - I read mostly from the fantasy or horror genre.
              I would like to one day write mt own.
            </p>
            <p>
              <b>Exercising</b> - I enjoy weight lifting and running. I think Exercise should be a daily habit.
            </p>
            <p>
              <b>Gaming</b> - I mainly play RPG's and MMO's, the Final Fantasy
              series is tops.
            </p>
            <p>
              <b>Programming</b> - My favorite is web development and I love
              using React!{" "}
            </p>
          </div>
          <div style={{ width: "45%" }}>
            <h1>Top Traits: </h1>
            <p>
              <b>Communication</b> - As one of my best traits, I can convey
              what's needed when it is needed.{" "}
            </p>
            <p>
              <b>Team Oriented</b> - I believe teamwork is something that helps
              individuals grow, and ensures a teams achievement.{" "}
            </p>
            <p>
              <b>Critical Thinking</b> - I have the skills to solve problems
              quickly and think outside the box.{" "}
            </p>
            <p>
              <b>Quick Learner</b> - I have the competency learn efficiently and
              quickly no matter the challenge.{" "}
            </p>
          </div>
        </div>
        {/* <h1>Education - Kennesaw State University </h1>
        <small className='smallDate'>January 2018 – July 2021</small>
        <p>
          B.S. Software Engineering Candidate. Currently attending the college
          of computing and software engineering. Taken courses in advanced
          programming principles, computer architecture, Advanced networks, Java
          programming, and UI Development.{" "}
        </p> */}
      </div>
      <img src={Darron} />
    </div>
  );
}
