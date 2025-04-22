import React from "react";
import "./Activity.css";
import Footer from "../Footer";
import { strings } from "../util/local";

function Activity() {
  return (
    <div>
      <div className="activity-container">
        <div className="activity">
          <h1>{strings.activityTitle}</h1>
          <h2>{strings.timeTable}</h2>
          <div className="act">
            <a href="/ECCCA WEEKLY ACTIVITIES CALENDAR.pdf" id="pdfLink" target="_blank">→{strings.weeklyCalandar}← </a>
          </div>
          <h2>{strings.tableTennis}</h2>
          <div className="act">
            <p>{strings.tableTennisNote}</p>
            <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vT1uXtzBWcTZtZfyA924QbAPC_rOcUazrS5CrBTCZprIGfuqm9Gy2680Zu0WjdfK7Y0v-nhSnFEfZ8u/pubhtml?gid=0&amp;single=true&amp;widget=false&amp;headers=false&amp;chrome=false" width={685} height={270}></iframe>
          </div>
          <h2>{strings.tableTennisCamp}</h2>
          <div className="act">
            <img src="/Table Tennis Camp.jpeg" height={500} width={950}/>
          </div>
          <p>&nbsp;</p>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Activity;
