import React, { useState } from "react";
import "./Evergreen.css";
import EverGrid from "../EverGrid";
import EverImage from "../EverImage";
import Modal from "../Modal";
import Footer from "../Footer";
import { strings } from "../util/local";

function Evergreen() {
    const [selectedImg, setSelectedImg] = useState(null);

    return (
        <div>
            <div className="evergreen-container">
                <div className="evergreen">
                    <div className="evergreen-title">
                        <div className="evergreen-pic"></div>
                    </div>
                    <h1>{strings.aboutEvergreen}</h1>
                    {<div className="evergreen-act">
                        <a href="/2025 Family and Seniors CNY Banquet flyer.pdf" id="pdfLink" target="_blank">2025 Family and Seniors CNY Banquet</a>
                        <h2>2025 Annual Seniors' & Members' Chinese New Year Banquet on Wednesday, Feburary 12, 2025 at 6pm at Mandarin Restaurant. There will be New Year celebration at the Mall slide Show, Door Prizes & 50/50 Draw, and Lai-see for Seniors!</h2>
                    </div>
                    }
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Evergreen;