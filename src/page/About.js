import React from "react";
import "./About.css";
import Brief from "../Brief";
import Footer from "../Footer";
import { strings } from "../util/local";

function About() {
  return (
    <div>
      <div className="top-container">
        <div className="full-container">
          <div className="container_t">
            <div className="grid_a">
              <img className="header_sider" src="/sider.png" alt="sider" />
              <header>
                <h2>
                  <span>{strings.aboutTitle}</span>
                </h2>
              </header>
              <img className="header_sider2" src="/sider.png" alt="sider" />
            </div>
            <Brief />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
