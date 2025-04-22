import React from "react";
import "../App.css";
import "./Body.css";
import Carousel from "react-material-ui-carousel";
import { strings } from "../util/local";
import useFirestore from "../hooks/useFirestore";

function Body() {
  const { docs } = useFirestore("funding");
  const { docss } = useFirestore("announce");
  const { docsss } = useFirestore("carousel");

  return (
    <div className="body-container">
      <div className="inside-container">
        <Carousel autoPlay="true" interval={4000} timeout={500}>
          <div className="inside-roll-container">
            <h1>{strings.homeTitle}</h1>
          </div>
          <div className="inside-roll-container">
            <h1>{strings.newAct}</h1>
            {docss &&
              docss.slice(0, 1).map(doc => (
                <div className="latest-act">
                  <a href={doc.url}>{doc.title}</a>
                  <h1>{doc.descrip}</h1>
                </div>
              ))}
          </div>
          <div className="inside-roll-container">
            <h1>{strings.newAct}</h1>
            {docss &&
              docss.slice(1, 2).map(doc => (
                <div className="latest-act">
                  <a href={doc.url}>{doc.title}</a>
                  <h1>{doc.descrip}</h1>
                </div>
              ))}
          </div>
        </Carousel>
      </div>
      <div className="image-container">
        <Carousel autoPlay="true" interval={4000} timeout={500}>
          <div className="inside-roll-image-container">
            {docsss &&
              docsss.slice(0, 1).map(doc => (
                <div>
                  <img src={doc.url} alt="uploaded-pic" />
                </div>
              ))}
          </div>
          <div className="inside-roll-image-container">
            {docsss &&
              docsss.slice(1, 2).map(doc => (
                <div>
                  <img src={doc.url} alt="uploaded-pic" />
                </div>
              ))}
          </div>
          <div className="inside-roll-image-container">
            {docsss &&
              docsss.slice(2, 3).map(doc => (
                <div>
                  <img src={doc.url} alt="uploaded-pic" />
                </div>
              ))}
          </div>
          <div className="inside-roll-image-container">
            {docsss &&
              docsss.slice(3, 4).map(doc => (
                <div>
                  <img src={doc.url} alt="uploaded-pic" />
                </div>
              ))}
          </div>
          <div className="inside-roll-image-container">
            {docsss &&
              docsss.slice(4, 5).map(doc => (
                <div>
                  <img src={doc.url} alt="uploaded-pic" />
                </div>
              ))}
          </div>
          <div className="inside-roll-image-container">
            {docsss &&
              docsss.slice(5, 6).map(doc => (
                <div>
                  <img src={doc.url} alt="uploaded-pic" />
                </div>
              ))}
          </div>
          <div className="inside-roll-image-container">
            {docsss &&
              docsss.slice(6, 7).map(doc => (
                <div>
                  <img src={doc.url} alt="uploaded-pic" />
                </div>
              ))}
          </div>
          <div className="inside-roll-image-container">
            {docsss &&
              docsss.slice(7, 8).map(doc => (
                <div>
                  <img src={doc.url} alt="uploaded-pic" />
                </div>
              ))}
          </div>
        </Carousel>
      </div>
      <div className="fund-container">
        <div className="fund-container-title">
          <h1>{strings.homeFund}</h1>
        </div>

        <div className="fund-img">
          {docs &&
            docs.map(doc => (
              <div className="fund-img-wrap" key={doc.id}>
                <img src={doc.url} alt="uploaded-pic" />
              </div>
            ))}
        </div>
      </div>

      {/* <div className="full-width-container block">
        <div className="container-text">
          <div className="row">
            <div className="grid_1">
              <header>
                <h2>
                  <span>{strings.homeSecondTitle}</span>
                </h2>
              </header>
              <h4>{strings.homeSecondSubTitle}</h4>
              <p>{strings.homeSecondText}</p>
              <p className="second-p">{strings.homeSecondSecText}</p>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Body;
