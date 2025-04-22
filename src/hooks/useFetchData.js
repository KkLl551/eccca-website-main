import { useState, useEffect } from "react";
import { dbFireStore } from "../db/config.js";

const useFetchData = collection => {
  const [loading, setLoading] = useState(true);
  // const [id, setId] = useState([]);
  const [docs, setDocs] = useState([]);
  const [docss, setDocss] = useState([]);

  // const fetchData = async () => {
  //   try {
  //     const ref = dbFireStore.collection(collection);
  //     const snapshot = await ref.where('boxId','>=',0).get();
  //     if (snapshot.empty) {
  //       console.log('No such document!');
  //     } else {
  //       //setLoading(false);
  //       snapshot.forEach(doc => {
  //         // setId(list => [...list, doc.id]);
  //         console.log(doc.id, '=>', doc.data());
  //         // setDocs(arr => [...arr, doc.data()]);
  //         setDocs(arr => [...arr, doc.data(), doc.id]);
  //       });
  //       console.log(docs);
  //     }
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // }



  // useEffect(() => {
  //   fetchData();
  // }, [collection]);

  useEffect(() => {
    const unsub = dbFireStore
      .collection(collection)
      .orderBy("boxId", "asc")
      .onSnapshot(snap => {
        let documents = [];
        snap.forEach(doc => {
          documents.push({ ...doc.data(), id: doc.id });
        });
        setLoading(true);
        setDocs(documents);
        setDocss(documents);
      });

    return () => unsub();
  }, [collection, true]);

  return { docs, docss };
};

export default useFetchData;
