import React, { useState } from "react";
import Footer from "../Footer";
import "./Contact.css";
import { IconButton } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";
import FacebookIcon from "@material-ui/icons/Facebook";
import LooksIcon from "@material-ui/icons/Looks";
import RoomIcon from "@material-ui/icons/Room";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import emailjs from "emailjs-com";
import { strings } from "../util/local";

function Contact() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_df5uhjb', 'template_s6qen6d', e.target, 'ZwaP2OGnBtDeKn4ca')
      .then(res => {
        console.log(res);
        e.target.reset(); // Reset the form after successful submission
      })
      .catch(err => {
        console.log(err);
      });
  }

  function showPopup() {
    alert("Message sent!");
  }

  return (
    <div>
      <div className="contact__container">
        <div className="contact__cards">
          <div className="contact__card">
            <h2>{strings.contactInfo}</h2>
            <div className="contact__info">
              <ul className="Info">
                <li>
                  <RoomIcon className="c__icon" style={{ fontSize: "50px" }} />
                </li>
                <li>{strings.contactAdd}</li>
                <li>
                  <EmailIcon className="c__icon" style={{ fontSize: "50px" }} />
                </li>
                <li>{strings.contactEmail}</li>
                <li>
                  <PhoneIcon className="c__icon" style={{ fontSize: "50px" }} />
                </li>
                <li>{strings.contactPhone}</li>
              </ul>
            </div>
            <div className="media__icon">
              <a href={"https://www.youtube.com/user/ecccanet"} target="_blank" rel="noopener noreferrer">
                <IconButton className="custom__button">
                  <YouTubeIcon className="youtubeicon" style={{ fontSize: "30px" }} />
                </IconButton>
              </a>
              <a href={"https://www.facebook.com/eccca.windsor"} target="_blank" rel="noopener noreferrer">
                <IconButton className="custom__button">
                  <FacebookIcon className="fbicon" style={{ fontSize: "30px" }} />
                </IconButton>
              </a>
              <a href={"http://www.chineseinwindsor.com/"} target="_blank" rel="noopener noreferrer">
                <IconButton className="custom__button">
                  <LooksIcon className="dragonicon" style={{ fontSize: "30px" }} />
                </IconButton>
              </a>
            </div>
          </div>
          <form className="contact__form" onSubmit={sendEmail}>
            <h1>{strings.contactUs}</h1>
            <input
              type="text"
              name="name"
              className="field"
              placeholder={strings.formName}
            />
            <input
              type="text"
              name="phone"
              className="field"
              placeholder={strings.formPhone}
            />
            <input
              type="email"
              name="email"
              className="field"
              placeholder={strings.formEmail}
            />
            <textarea
              name="message"
              rows="4"
              className="field"
              placeholder={strings.formMessage}
            />
            
            <button className="form__button" type="submit" onClick={showPopup}>
              {strings.formSend}
            </button>
          </form>


        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
