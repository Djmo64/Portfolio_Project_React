import React from "react";
import Darron from "../../assets/photos/Darron.png";
import "../Overview/overview.css";

export default function overview(props) {
  return (
    <div className="overview-container load">
      <div className="bio">
        <h1>Darron Moore - Freelance Web Developer</h1>
        <p>
        I am an adaptable software developer currently working as a fulltime freelance developer
         Aiming to leverage proven critical thinking, problem solving, and communication skills;
          As well as software development experience to successfully fill the software engineering 
          role at your company. Frequently praised as hard working by my peers, supportive teamwork,
           as well as dependable initiative, I can be relied upon to help your company achieve it's goals.      
        </p>
        <div className="stats">
          <div style={{ width: "45%" }}>
            <h1>Interests: </h1>
            <p>
              <b>Reading</b> - I read mostly from the fantasy or horror genres.
              I also write as a hobby.
            </p>
            <p>
              <b>Exercising</b> - I enjoy weight lifting and running. I believe exercise is an important daily habit.
            </p>
            <p>
              <b>Gaming</b> - I mainly play RPG's and MMO's, My favorite is Final Fantasy.
            </p>
            <p>
              <b>Volunteering</b> - I like to volunteer at local outreach programs and shelters on the weekends.
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
              <b>Quick Learner</b> - I have the competency to learn efficiently and
              quickly, no matter the challenge.{" "}
            </p>
          </div>
        </div>
    
      </div>
      <img src={Darron} />
    </div>
  );
}
