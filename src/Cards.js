import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";
import { strings } from "./util/local";

function Cards() {
  return (
    <div className="cards">
      <h1>{strings.aboutBoard}</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            {/* <CardItem
              src="img.jpg"
              text="Stephen Tsui"
              label="President"
              path="/About"
            />
            <CardItem
              src="img.jpg"
              text="Sungee John"
              label="VP External"
              path="/About"
            />
            <CardItem
              src="img.jpg"
              text="Maggie Yip"
              label="Treasurer"
              path="/About"
            />
            <CardItem
              src="img.jpg"
              text="Betty Lee-Daigle"
              label="English Secretary"
              path="/About"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="img.jpg"
              text="Ralph Wong"
              label="Chinese Secretary"
              path="/About"
            />
            <CardItem
              src="img.jpg"
              text="Catherine Fung"
              label="Director Art"
              path="/About"
            />
            <CardItem
              src="/img.jpg"
              text="Ron Lam"
              label="Director Evergreen"
              path="/About"
            />
            <CardItem
              src="/img.jpg"
              text="Charles Lau"
              label="Director Youth Program"
              path="/About"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="/img.jpg"
              text="Jian Guo Li"
              label="Director Public Affairs"
              path="/About"
            />
            <CardItem
              src="/img.jpg"
              text="Peijing Xu"
              label="Director Social Program"
              path="/About"
            /> */}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
