import React, { useState } from "react";
import ProgressBar from "./ProgressBar";
import "./UploadForm.css";
import useFetchData from "./hooks/useFetchData";
import useFirestore from "./hooks/useFirestore";
import Pagination from "@material-ui/lab/Pagination";
import FileUpdater from "./FileUpdater";
import SimpleDateTime from "react-simple-timestamp-to-date";
import Removal from "./hooks/Removal";

const UploadForm = () => {
  const { docs } = useFetchData("about");
  const modifyDocs = useFirestore("announce");
  const { docss } = useFirestore("funding");
  const { docsss } = useFirestore("images");
  const { docssss } = useFirestore("carousel");
  const { docsssss } = useFirestore("everGallery");

  const [part, setPart] = useState(0);

  const [docId, setDocId] = useState("");
  const [boxId, setBoxId] = useState("");
  const [contentEN, setContentEN] = useState("");
  const [contentCN, setContentCN] = useState("");

  const [contentENOri, setContentENOri] = useState("");
  const [contentCNOri, setContentCNOri] = useState("");

  const [updateStat, setUpdateStat] = useState("");

  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const [category, setCategory] = useState("announce");

  const [title, setTitle] = useState("");
  const [descrip, setDescrip] = useState("");
  const [cate, setCate] = useState("");
  const [link, setLink] = useState("");

  const [save, setSave] = useState("");

  let total = Math.ceil(modifyDocs.docs.length / 5);
  let totals = Math.ceil(docss.length / 5);
  let totalss = Math.ceil(docsss.length / 5);
  let totalsss = Math.ceil(docssss.length / 5);
  let totalssss = Math.ceil(docsssss.length / 5);

  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);
  const [pagess, setPagess] = useState(1);
  const [pagesss, setPagesss] = useState(1);
  const [pagessss, setPagessss] = useState(1);

  const handlePageChange = (event, value) => {
    setPage(value);
  };
  const handlePagesChange = (event, value) => {
    setPages(value);
  };
  const handlePagessChange = (event, value) => {
    setPagess(value);
  };
  const handlePagesssChange = (event, value) => {
    setPagesss(value);
  };
  const handlePagessssChange = (event, value) => {
    setPagessss(value);
  };

  const types = ["image/png", "image/jpeg", "application/pdf"];

  const changeHandler = e => {
    let selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError("");
    } else {
      setFile(null);
      setError("Please select an Image file (.png or .jpg or .pdf)");
    }
  };

  const setCurrentTarget = (targetId, targetBoxId, oriEN, oriCN) => {
    setDocId(targetId);
    setBoxId(targetBoxId);
    setContentCNOri(oriCN);
    setContentENOri(oriEN);
    setContentEN(oriEN);
    setContentCN(oriCN);
  };

  const updateFile = e => {
    e.preventDefault();
    setUpdateStat(docId);
  };

  const saveFile = e => {
    e.preventDefault();
    setSave(title);
  };

  const setAnno = () => {
    setCategory("announce");
  };

  const setEver = () => {
    setCategory("evergreen");
  };

  const setGallery = () => {
    setCategory("images");
  };

  const setFunding = () => {
    setCategory("funding");
  };
  
  const setCarousel = () => {
    setCategory("carousel");
  };

  const setEverGallery = () => {
    setCategory("everGallery");
  }

  const removeAnno = (ref, url) => {
    Removal("announce", ref, url);
  };

  const removeFund = (ref, url) => {
    Removal("funding", ref, url);
  };

  const removeImage = (ref, url) => {
    Removal("images", ref, url);
  };

  const removeCarousel = (ref, url) => {
    Removal("carousel", ref, url);
  };
  
  const removeEverGallery = (ref, url) => {
    Removal("everGallery", ref, url);
  };

  return (
    <div className="uploadform-container">
      <div className="category-container">
        <ul>
          <li><button onClick={() => setPart(0)}>about</button></li>
          <li><button onClick={() => setPart(1)}>upload</button></li>
          <li><button onClick={() => setPart(2)}>modifier_anno</button></li>
          <li><button onClick={() => setPart(3)}>modifier_funding</button></li>
          <li><button onClick={() => setPart(4)}>modifier_images</button></li>
          <li><button onClick={() => setPart(5)}>modifier_carousel</button></li>
          <li><button onClick={() => setPart(6)}>modifier_everGallery</button></li>
        </ul>
      </div>
      <div className="upload_container">
        {part == 0 ?
          <div>
            {docs && docs.map(doc => (
              <div>
                <p>{doc.contentEN}</p>
                <p>{doc.contentCN}</p>
                <button onClick={() => setCurrentTarget(doc.id, doc.boxId, doc.contentEN, doc.contentCN)}>Edit Above</button>
              </div>
            ))}
            <form>
              <div>
                <textarea
                  name="boxEN"
                  rows="4"
                  className="field"
                  placeholder="English Version"
                  value={contentENOri}
                  onChange={e => { setContentEN(e.target.value); setContentENOri(e.target.value) }}
                />
              </div>
              <div>
                <textarea
                  name="boxCN"
                  rows="4"
                  className="field"
                  placeholder="Chinese Version"
                  value={contentCNOri}
                  onChange={e => { setContentCN(e.target.value); setContentCNOri(e.target.value) }}
                />
              </div>
              <button onClick={updateFile}>update {docId} {boxId}</button>
              <div>
                {updateStat && (
                  <FileUpdater
                    docId={docId}
                    setDocId={setDocId}
                    boxId={boxId}
                    setBoxId={setBoxId}
                    contentEN={contentEN}
                    setContentEN={setContentEN}
                    contentCN={contentCN}
                    setContentCN={setContentCN}
                    setContentENOri={setContentENOri}
                    setContentCNOri={setContentCNOri}
                    updateStat={updateStat}
                    setUpdateStat={setUpdateStat}
                  />
                )}
              </div>
            </form>
          </div> : null
        }
        {part == 1 ?
          <div>
            <button onClick={setAnno}>announcement</button>
            <button onClick={setEver}>evergreen</button>
            <button onClick={setGallery}>gallery</button>
            <button onClick={setFunding}>funding</button>
            <button onClick={setCarousel}>carousel</button>
            <button onClick={setEverGallery}>everGallery</button>
            <form>
              <label className="upload_label">
                <input type="file" onChange={changeHandler} />
                <span>+</span>
              </label>
              <input
                value={title}
                onChange={e => setTitle(e.target.value)}
                type="text"
                placeholder="title"
              />
              <input
                value={cate}
                onChange={e => setCate(e.target.value)}
                type="text"
                placeholder="category"
              />
              <input
                value={descrip}
                onChange={e => setDescrip(e.target.value)}
                type="text"
                rows="3"
                placeholder="description"
              />
              <input
                value={link}
                onChange={e => setLink(e.target.value)}
                type="text"
                placeholder="link"
              />
              <button onClick={saveFile}>save file</button>
              <div className="output">
                {error && <div className="error">{error}</div>}
                {file && <div>{file.name}</div>}
                {category && <div>set to {category}</div>}
                {save && (
                  <ProgressBar
                    file={file}
                    setFile={setFile}
                    category={category}
                    title={title}
                    descrip={descrip}
                    cate={cate}
                    link={link}
                    setSave={setSave}
                    setTitle={setTitle}
                    setDescrip={setDescrip}
                    setCate={setCate}
                    setLink={setLink}
                    save={save}
                  />
                )}
              </div>
            </form>
          </div> : null
        }
        {part == 2 ?
          <div>
            {modifyDocs.docs &&
              modifyDocs.docs.slice((page - 1) * 5, page * 5).map(modifyDoc => (
                <div key={modifyDoc.id}>
                  <div>
                    <a href={modifyDoc.url} className="anno-text-title">
                      {modifyDoc.title}
                    </a>
                    <h3>
                      Posted on{" "}
                      <SimpleDateTime
                        dateSeparator="/"
                        timeSeparator=":"
                        format="YMD"
                        showTime="0"
                      >
                        {modifyDoc.createdAt.seconds}
                      </SimpleDateTime>
                    </h3>
                    <p>{modifyDoc.descrip}</p>
                    <p>{modifyDoc.id}</p>
                  </div>
                  <div>
                    <button onClick={() => removeAnno(modifyDoc.id, modifyDoc.url)}>remove</button>
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
          </div> : null
        }
        {part == 3 ?
          <div>
            {docss &&
              docss.slice((pages - 1) * 5, pages * 5).map(modifyDoc => (
                <div key={modifyDoc.id}>
                  <div>
                    <img src={modifyDoc.url} alt="uploaded-pic" />
                    <h3>
                      Posted on{" "}
                      <SimpleDateTime
                        dateSeparator="/"
                        timeSeparator=":"
                        format="YMD"
                        showTime="0"
                      >
                        {modifyDoc.createdAt.seconds}
                      </SimpleDateTime>
                    </h3>
                  </div>
                  <div>
                    <button onClick={() => removeFund(modifyDoc.id, modifyDoc.url)}>remove</button>
                  </div>
                </div>
              ))}
            <div className="pagi">
              <Pagination
                count={totals}
                page={pages}
                onChange={handlePagesChange}
                hidePrevButton
                hideNextButton
              />
            </div>
          </div> : null
        }
        {part == 4 ?
          <div>
            {docsss &&
              docsss.slice((pagess - 1) * 5, pagess * 5).map(modifyDoc => (
                <div key={modifyDoc.id}>
                  <div>
                    <img src={modifyDoc.url} alt="uploaded-pic" />
                    <h3>
                      Posted on{" "}
                      <SimpleDateTime
                        dateSeparator="/"
                        timeSeparator=":"
                        format="YMD"
                        showTime="0"
                      >
                        {modifyDoc.createdAt.seconds}
                      </SimpleDateTime>
                    </h3>
                  </div>
                  <div>
                    <button onClick={() => removeImage(modifyDoc.id, modifyDoc.url)}>remove</button>
                  </div>
                </div>
              ))}
            <div className="pagi">
              <Pagination
                count={totalss}
                page={pagess}
                onChange={handlePagessChange}
                hidePrevButton
                hideNextButton
              />
            </div>
          </div> : null
        }
        {part == 5 ?
          <div>
            {docssss &&
              docssss.slice((pagesss - 1) * 5, pagesss * 5).map(modifyDoc => (
                <div key={modifyDoc.id}>
                  <div>
                    <img src={modifyDoc.url} alt="uploaded-pic" />
                    <h3>
                      Posted on{" "}
                      <SimpleDateTime
                        dateSeparator="/"
                        timeSeparator=":"
                        format="YMD"
                        showTime="0"
                      >
                        {modifyDoc.createdAt.seconds}
                      </SimpleDateTime>
                    </h3>
                  </div>
                  <div>
                    <button onClick={() => removeCarousel(modifyDoc.id, modifyDoc.url)}>remove</button>
                  </div>
                </div>
              ))}
            <div className="pagi">
              <Pagination
                count={totalsss}
                page={pagesss}
                onChange={handlePagessssChange}
                hidePrevButton
                hideNextButton
              />
            </div>
          </div> : null
        }
        {part == 6 ?
          <div>
            {docsssss &&
              docsssss.slice((pagessss - 1) * 5, pagessss * 5).map(modifyDoc => (
                <div key={modifyDoc.id}>
                  <div>
                    <img src={modifyDoc.url} alt="uploaded-pic" />
                    <h3>
                      Posted on{" "}
                      <SimpleDateTime
                        dateSeparator="/"
                        timeSeparator=":"
                        format="YMD"
                        showTime="0"
                      >
                        {modifyDoc.createdAt.seconds}
                      </SimpleDateTime>
                    </h3>
                  </div>
                  <div>
                    <button onClick={() => removeEverGallery(modifyDoc.id, modifyDoc.url)}>remove</button>
                  </div>
                </div>
              ))}
            <div className="pagi">
              <Pagination
                count={totalssss}
                page={pagessss}
                onChange={handlePagesssChange}
                hidePrevButton
                hideNextButton
              />
            </div>
          </div> : null
        }
      </div>
    </div>
  );
};

export default UploadForm;
