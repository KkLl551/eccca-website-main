import React, { useState } from "react";
import useFirestore from "./hooks/useFirestore";
import Pagination from "@material-ui/lab/Pagination";
import "./EverImage.css";

const EverImage = ({ setSelectedImg }) => {
    const { docs } = useFirestore("everGallery");

    let total = Math.ceil(docs.length / 5);

    const [page, setPage] = useState(1);

    const handlePageChange = (event, value) => {
        setPage(value);
    };

    return (
        <div className="ever-img-grid">
            {docs &&
                docs.slice((page - 1) * 5, page * 5).map(doc => (
                    <div
                        className="ever-img-wrap"
                        key={doc.id}
                        onClick={() => setSelectedImg(doc.url)}
                    >
                        <img src={doc.url} alt="uploaded-pic" />
                        <p>{doc.title}</p>
                    </div>
                ))}
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
};

export default EverImage;
