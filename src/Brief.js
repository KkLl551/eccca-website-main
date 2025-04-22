import React, { useState } from "react";
import "./Brief.css";
import useFetchData from "./hooks/useFetchData";
import { strings } from "./util/local";

const Brief = () => {
    //const [texts, setTexts] = useState([]);
    const { docs } = useFetchData("about");

    const lang = strings.getLanguage();

    let temp = [];

    if (docs.length != 0 && lang == 'en') {
        temp = [docs[0].contentEN, docs[1].contentEN, docs[2].contentEN, docs[3].contentEN, docs[4].contentEN, docs[5].contentEN, docs[6].contentEN, docs[7].contentEN, docs[8].contentEN, docs[9].contentEN, docs[10].contentEN, docs[11].contentEN, docs[12].contentEN];
    } else if (docs.length != 0 && lang == 'ch') {
        temp = [docs[0].contentCN, docs[1].contentCN, docs[2].contentCN, docs[3].contentCN, docs[4].contentCN, docs[5].contentCN, docs[6].contentCN, docs[7].contentCN, docs[8].contentCN, docs[9].contentCN, docs[10].contentCN, docs[11].contentCN, docs[12].contentCN];
    }

    return (
        <div>
            <div className="text1">
                <p className="first-p">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{temp[0]}</p>
                <p className="second-p">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{temp[1]}</p>
            </div>
            <div className="row1">
                <div className="img_container">
                    <img src="/board_view.jpg" alt="img" />
                </div>
                <div className="img_container">
                    <img src="/board_kitchen.jpg" alt="img" />
                </div>
            </div>
            <div className="row1">
                <div className="img_container">
                    <img src="/board_library.jpg" alt="img" />
                </div>
                <div className="img_container">
                    <img src="/board_hall.jpg" alt="img" />
                </div>
            </div>
            <div className="cards_contain">
                <h1>{strings.aboutBoard}</h1>
                <div className="row1">
                    <div className="img_container_member">
                        <img src="/2025 Board of Directors.jpg" alt="img" />
                    </div>
                </div>
                <div className="board_grid">
                    <div className="board_wrap">
                        <h5>{strings.front}</h5>
                        <h5>{strings.left}</h5>
                    </div>
                    <div><br></br></div>
                    <div><br></br></div>
                    <div><br></br></div>
                    <div className="board_wrap">
                        <h5>{strings.vicePresident}</h5>
                        <p>{temp[3]}</p>
                    </div>
                    <div className="board_wrap">
                        <h5>{strings.treasurer}</h5>
                        <p>{temp[4]}</p>
                    </div>
                    <div className="board_wrap">
                        <h5>{strings.president}</h5>
                        <p>{temp[2]}</p>
                    </div>
                    <div className="board_wrap">
                        <h5>{strings.directorACE}</h5>
                        <p>{temp[6]}</p>
                    </div>
                    <div className="board_wrap">
                        <h5>{strings.directorIt}</h5>
                        <p>{temp[8]}</p>
                    </div>
                    <div><br></br></div>
                    <div><br></br></div>
                    <div><br></br></div>
                    <div className="board_wrap">
                        <h5>{strings.back}</h5>
                        <h5>{strings.left}</h5>
                    </div>
                    <div><br></br></div>
                    <div><br></br></div>
                    <div><br></br></div>
                    <div className="board_wrap">
                        <h5>{strings.directorSE}</h5>
                        <p>{temp[12]}</p>
                    </div>
                    <div className="board_wrap">
                        <h5>{strings.directorFRF}</h5>
                        <p>{temp[7]}</p>
                    </div>
                    <div className="board_wrap">
                        <h5>{strings.directorTF}</h5>
                        <p>{temp[10]}</p>
                    </div>
                    <div className="board_wrap">
                        <h5>{strings.directorRF}</h5>
                        <p>{temp[11]}</p>
                    </div>
                    <div className="board_wrap">
                        <h5>{strings.directorPIT}</h5>
                        <p>{temp[9]}</p>
                    </div>
                    <div className="board_wrap">
                        <h5>{strings.enSecretary}</h5>
                        <p>{temp[5]}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Brief;