import React, { useState } from "react";
import useFirestore from "./hooks/useFirestore";
import "./AnnoGrid.css";
import Pagination from "@material-ui/lab/Pagination";
import SimpleDateTime from "react-simple-timestamp-to-date";

const AnnoGrid = () => {
  const { docs } = useFirestore("announce");

  let total = Math.ceil(docs.length / 5);

  const [page, setPage] = useState(1);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  return (
    <div className="anno-grid">
      {docs &&
        docs.slice((page - 1) * 5, page * 5).map(doc => (
          <div className="anno-wrap" key={doc.id}>
            <div className="anno-timer"></div>
            <div className="anno-text">
              <a href={doc.url} className="anno-text-title">
                {doc.title}
              </a>
              <h3 className="anno-text-title">
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
              <p className="anno-text-content">{doc.descrip}</p>
              <a href={doc.link} className="anno-text-content">
                {doc.link}
              </a>
            </div>
            <div className="anno-side">
              <p className="side-text">{doc.cate}</p>
            </div>
          </div>
        ))}
      <div className="pagi">
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

export default AnnoGrid;
