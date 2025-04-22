import React, { useState } from "react";
import useFirestore from "./hooks/useFirestore";
import "./EverGrid.css";
import Pagination from "@material-ui/lab/Pagination";
import SimpleDateTime from "react-simple-timestamp-to-date";

const EverGrid = () => {
    const { docs } = useFirestore("evergreen");

    let total = Math.ceil(docs.length / 5);

    const [page, setPage] = useState(1);

    const handlePageChange = (event, value) => {
        setPage(value);
    };

    return (
        <div className="ever-grid">
            {docs &&
                docs.slice((page - 1) * 5, page * 5).map(doc => (
                    <div className="ever-wrap" key={doc.id}>
                        <div className="ever-text">
                            <a href={doc.url} className="ever-text-title"  target="_blank">
                                {doc.title}
                            </a>
                            <img src={doc.url} alt="uploaded-pic" onError={(event) => event.target.style.display = 'none'}/>
                            <h3 className="ever-text-title">
                                Posted on{" "}
                                <SimpleDateTime
                                    dateSeparator="/"
                                    timeSeparator=":"
                                    format="YMD"
                                    showTime="0"
                                >
                                    {doc.createdAt.seconds}
                                </SimpleDateTime>
                            </h3>
                            <p className="ever-text-content">{doc.descrip}</p>
                        </div>
                    </div>
                ))
            }
            <div className="ever-pagi">
                <Pagination
                    count={total}
                    page={page}
                    onChange={handlePageChange}
                    hidePrevButton
                    hideNextButton
                />
            </div>
        </div>
    );
}

export default EverGrid;