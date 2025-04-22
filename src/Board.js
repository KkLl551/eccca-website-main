import React from "react";
import "./Board.css";
import { strings } from "./util/local";

function Board() {
  return (
    <div className="cards_contain">
      <h1>{strings.aboutBoard}</h1>
      <div className="board_grid">
        <div className="board_wrap">
          <h5>President</h5>
          <p>Stephen Tsui</p>
        </div>
        <div className="board_wrap">
          <h5>VP External</h5>
          <p>Sungee John</p>
        </div>
        <div className="board_wrap">
          <h5>Treasurer</h5>
          <p>Maggie Yip</p>
        </div>
        <div className="board_wrap">
          <h5>English Secretary</h5>
          <p>Betty Lee-Daigle</p>
        </div>
        <div className="board_wrap">
          <h5>Chinese Secretary</h5>
          <p>Ralph Wong</p>
        </div>
        <div className="board_wrap">
          <h5>Director Art</h5>
          <p>Catherine Fung</p>
        </div>
        <div className="board_wrap">
          <h5>Director Evergreen</h5>
          <p>Ron Lam</p>
        </div>
        <div className="board_wrap">
          <h5>Director Youth Program</h5>
          <p>Charles Lau</p>
        </div>
        <div className="board_wrap">
          <h5>Director Public Affairs</h5>
          <p>Jian Guo Li</p>
        </div>
        <div className="board_wrap">
          <h5>Director Social Program</h5>
          <p>Peijing Xu</p>
        </div>
      </div>
    </div>
  );
}

export default Board;
