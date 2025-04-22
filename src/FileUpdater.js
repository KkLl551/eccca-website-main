import React, { useEffect } from "react";
import useEditDoc from "./hooks/useEditDoc";

const FileUpdater = ({
  docId,
  setDocId,
  boxId,
  setBoxId,
  contentEN,
  setContentEN,
  contentCN,
  setContentCN,
  setContentENOri,
  setContentCNOri,
  updateStat,
  setUpdateStat
}) => {
  const { status } = useEditDoc(
    docId,
    boxId,
    contentEN,
    contentCN,
    updateStat
  );
  // useStorage will return url, progress after this call

  useEffect(() => {
    if (status) {
        setDocId("");
        setBoxId("");
        setContentEN("");
        setContentCN("");
        setContentENOri("");
        setContentCNOri("");
        setUpdateStat("");
    }
  }, [status, setDocId, setBoxId, setContentEN, setContentCN, setContentENOri, setContentCNOri, setUpdateStat]);

  return <div className="file_updater"><p>{status}</p></div>;
};

export default FileUpdater;
