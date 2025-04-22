import React from "react";
import "./Directory.css";
import Footer from "../Footer";
import { strings } from "../util/local";

function Directory() {
  return (
    <div>
      <div className="directory-container">
        <div className="directory">
          <h1>{strings.directoryTitle}</h1>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Directory;
