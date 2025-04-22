import React from "react";
import AnnoGrid from "../AnnoGrid";
import Footer from "../Footer";
import "./Announce.css";
import { strings } from "../util/local";

function Announce() {
  return (
    <div>
      <div className="announce-container">
        <div className="announce">
          <h1>{strings.annoTitle}</h1>
          <AnnoGrid />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Announce;
