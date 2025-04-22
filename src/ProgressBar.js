import React, { useEffect } from "react";
import useStorage from "./hooks/useStorage";

const ProgressBar = ({
  file,
  setFile,
  category,
  title,
  descrip,
  cate,
  link,
  save,
  setTitle,
  setDescrip,
  setCate,
  setLink,
  setSave
}) => {
  const { url, progress, videoCheck } = useStorage(
    file,
    category,
    title,
    descrip,
    cate,
    link,
    save
  );
  // useStorage will return url, progress after this call
  useEffect(() => {
    if (url || videoCheck==1) {
      setFile(null);
      setTitle("");
      setDescrip("");
      setCate("");
      setLink("");
      setSave("");
    }
  }, [url, videoCheck, setFile, setTitle, setDescrip, setCate, setLink, setSave]);

  return <div className="progress_bar" style={{ width: progress + "%" }}></div>;
};

export default ProgressBar;
