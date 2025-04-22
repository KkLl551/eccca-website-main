import { useState, useEffect } from "react";
import { dbStorage, dbFireStore, timestamp } from "../db/config.js";

const useStorage = (file, category, title, descrip, cate, link, save) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);
  const [videoCheck, setVideoCheck] = useState(0);

  /*everytime theres a file change, then do this function*/
  useEffect(() => {
    //references
    if (file != null) {
      const storageRef = dbStorage.ref(category + "/" + file.name);

      const collectionRef = dbFireStore.collection(category);

      storageRef.put(file).on(
        "state_changed",
        snap => {
          let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
          setProgress(percentage);
        },
        err => {
          setError(err);
        },
        async () => {
          const url = await storageRef.getDownloadURL();
          const createdAt = timestamp();
          collectionRef.add({ url, createdAt, title, descrip, cate, link });
          setUrl(url);
        }
      );
    } else {

      const collectionRef = dbFireStore.collection(category);
      const createdAt = timestamp();
      collectionRef.add({ url, createdAt, title, descrip, cate, link });
      setVideoCheck(1);
    }
  }, [file, category, title, descrip, cate, link, save]);

  return { progress, url, error, videoCheck };
};

export default useStorage;
