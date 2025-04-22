import React from "react";
import "./Support.css";
import Footer from "../Footer";
import { strings } from "../util/local";

function Support() {
  return (
    <div>
      <div className="support-container">
        <div className="support">
          <h1>{strings.supportTitle}</h1>
          <h2>{strings.aboutMember}</h2>
          <div className="membership">
            <p>&nbsp;</p>
            <a href="/Membership form.pdf" id="pdfLink" target="_blank">→{strings.membershipform}← </a>
            <p>{strings.member1}</p>
          </div>
          <h2>{strings.aboutPayment}</h2>
          <div className="etrans">
            <p>&nbsp;</p>
            <p>{strings.etransfer1}</p>
            <p>{strings.etransfer2}</p>
            <p>&nbsp;</p>
            <p style={{fontStyle: "italic"}}>{strings.etransfer3}</p>
            <p>{strings.etransfer4}</p>
            <p>{strings.etransfer5}</p>
            <p>{strings.etransfer6}</p>
            <p>{strings.etransfer7}</p>
            <p>&nbsp;</p>
            <p style={{fontStyle: "italic"}}>{strings.etransfer8}</p>
            <p>{strings.etransfer9}</p>
            <p>{strings.etransfer10}</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Support;
