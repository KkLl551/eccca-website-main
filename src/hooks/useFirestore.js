import { useState, useEffect } from "react";
import { dbFireStore } from "../db/config.js";

const useFirestore = collection => {
  const [docs, setDocs] = useState([]);
  const [docss, setDocss] = useState([]);
  const [docsss, setDocsss] = useState([]);
  const [docssss, setDocssss] = useState([]);
  const [docsssss, setDocsssss] = useState([]);

  useEffect(() => {
    const unsub = dbFireStore
      .collection(collection)
      .orderBy("createdAt", "desc")
      .onSnapshot(snap => {
        let documents = [];
        snap.forEach(doc => {
          documents.push({ ...doc.data(), id: doc.id });
        });
        setDocs(documents);
        setDocss(documents);
        setDocsss(documents);
        setDocssss(documents);
        setDocsssss(documents);
      });

    return () => unsub();
  }, [collection]);

  return { docs, docss, docsss, docssss, docsssss };
};

export default useFirestore;
