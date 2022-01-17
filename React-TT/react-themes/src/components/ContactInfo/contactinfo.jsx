import React, { useEffect, useState } from "react";
import "../ContactInfo/contactinfo.css";
import house from "../../assets/icons/house-door-fill.svg";
import phone from "../../assets/icons/telephone-fill.svg";
import mail from "../../assets/icons/envelope-fill.svg";
import github from "../../assets/icons/github.svg";
import linkedin from "../../assets/icons/linkedin.svg";
import rArrow from "../../assets/icons/caret-right-fill.svg";
import lArrow from "../../assets/icons/caret-left-fill.svg";

export default function ContactI(props) {
  const [Choice, setChoice] = useState(0);
  const [BigInfo, setBigInfo] = useState('');
  const [Contacts, setContacts] = useState([
    {
      contact: "Phone",
      contactInfo: "478-538-5452",
      contactIcon: phone,
    },
    {
      contact: "Mailing Address",
      contactInfo: "--- ------- ------- --",
      contactIcon: house,
    },
    {
      contact: "Email",
      contactInfo: "darron.moore0@gmail.com",
      contactIcon: mail,
    },
    {
      contact: "Linkedin",
      contactInfo: "https://www.linkedin.com/in/darron-moore-a47759187/",
      contactIcon: linkedin,
    },
    {
      contact: "Github",
      contactInfo: "https://github.com/Djmo64",
      contactIcon: github,
    },
  ]);

  useEffect(()=>{
    setBigInfo(Contacts[2].contactInfo)
  }, [Contacts]
  )

  const choiceClass = (state) => {
    switch (state) {
      case 0:
        return "unactive4";
      case 1:
        return "unactive1";
      case 2:
        return "active2";
      case 3:
        return "unactive2";
      case 4:
        return "unactive3";
      default:
        return null;
    }
  };
  function ar(arr, reverse) {
    if (reverse) {
      arr.push(arr.shift());
    } else {
      arr.unshift(arr.pop());
    }
    const arr2 = arr.map((c) => {
      return c;
    });
    return arr2;
  }
  function clockwise() {
    const contInfo4 = document.querySelector(".unactive4");
    const contInfo3 = document.querySelector(".unactive1");
    const contInfo2 = document.querySelector(".active2");
    const contInfo1 = document.querySelector(".unactive2");
    const contInfo0 = document.querySelector(".unactive3");
    const event1 = document.querySelector(".arrowright");
    const event2 = document.querySelector(".arrowleft");

    event1.classList.add("null-button");
    event2.classList.add("null-button");
    contInfo0.classList.add("rotate-left3");
    contInfo1.classList.add("rotate-left0");
    contInfo2.classList.add("rotate-left2");
    contInfo3.classList.add("rotate-left1");
    contInfo4.classList.add("rotate-left4");

    contInfo4.addEventListener("animationend", () => {
      contInfo0.classList.remove("rotate-left3");
      contInfo1.classList.remove("rotate-left0");
      contInfo2.classList.remove("rotate-left2");
      contInfo3.classList.remove("rotate-left1");
      contInfo4.classList.remove("rotate-left4");
      setContacts(ar(Contacts));
      event1.classList.remove("null-button");
      event2.classList.remove("null-button");
    });
  }
  function counterclockwise() {
    const contInfo4 = document.querySelector(".unactive4");
    const contInfo3 = document.querySelector(".unactive1");
    const contInfo2 = document.querySelector(".active2");
    const contInfo1 = document.querySelector(".unactive2");
    const contInfo0 = document.querySelector(".unactive3");
    const event1 = document.querySelector(".arrowright");
    const event2 = document.querySelector(".arrowleft");

    event1.classList.add("null-button");
    event2.classList.add("null-button");
    contInfo0.classList.add("rotate-right3");
    contInfo1.classList.add("rotate-right0");
    contInfo2.classList.add("rotate-right2");
    contInfo3.classList.add("rotate-right1");
    contInfo4.classList.add("rotate-right4");

    contInfo4.addEventListener("animationend", () => {
      contInfo0.classList.remove("rotate-right3");
      contInfo1.classList.remove("rotate-right0");
      contInfo2.classList.remove("rotate-right2");
      contInfo3.classList.remove("rotate-right1");
      contInfo4.classList.remove("rotate-right4");
      setContacts(ar(Contacts, true));
      event1.classList.remove("null-button");
      event2.classList.remove("null-button");
    });
  }

  const cont = Contacts.map((c, index) => {
    return (
      <div className={"info-container" + " " + choiceClass(index)}>
        <h2>{c.contact}</h2>
        <div className="contact-text">
          <p>
            <b>{c.contactInfo}</b>
          </p>
        </div>
        <div className="contact-banner">
          <img src={c.contactIcon} />
        </div>
      </div>
    );
  });
  const nextSlide = () => {
    clockwise();
  };
  const prevSlide = () => {
    counterclockwise();
  };
  return (
    <div className="load">
      <h1 style={{ background: "black" }} onClick={() => setChoice(null)}>
        Contact Information
      </h1>
      <div className={Choice ? "contact-container shift" : "contact-container"}>
        <div
          onClick={() => setChoice(0)}
          className={
            Choice === 1 ? "phone-container active1" : "phone-container"
          }
        >
          <h3>Phone </h3>
        </div>
        <div
          onClick={() => setChoice(1)}
          className={
            Choice === 2 ? "address-container active1" : "address-container"
          }
        >
          <h3>Address </h3>
        </div>
        <div
          onClick={() => setChoice(2)}
          className={
            Choice === 3 ? "email-container active1" : "email-container"
          }
        >
          <h3>Email </h3>
        </div>
        <div
          onClick={() => setChoice(3)}
          className={Choice === 4 ? "link-container active1" : "link-container"}
        >
          <h3>Linkdin </h3>
        </div>
        <div
          onClick={() => setChoice(4)}
          className={Choice === 4 ? "link-container active1" : "link-container"}
        >
          <h3>Github </h3>
        </div>
      </div>
      <div className="information-outer-container">
        <img
          src={rArrow}
          className="next arrowright"
          onClick={() => nextSlide()}
        ></img>
        <img
          src={lArrow}
          className="next arrowleft"
          onClick={() => prevSlide()}
        ></img>
        <div className="information float">{cont}</div>
        <div className="blk-circle"></div>
        
      </div>
    </div>
  );
}
