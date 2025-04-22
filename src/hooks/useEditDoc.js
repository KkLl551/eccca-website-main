import { useState, useEffect } from "react";
import { dbFireStore, timestamp } from "../db/config.js";

const useEditDoc = (docId, boxId, contentEN, contentCN, updateStat) => {
    const [status, setStatus] = useState(false);
    const [error, setError] = useState("");
    /*everytime theres a file change, then do this function*/

    const data = {
        boxId: boxId,
        contentEN: contentEN,
        contentCN: contentCN,
        createdAt: timestamp()
    };

    const editDoc = async () => {
        try {
            const res = await dbFireStore.collection('about').doc(docId).set(data);
            setStatus(true);
        } catch (error){
            console.log(error.message);
            setError(error.message);
        }
    }

    useEffect(() => {
        editDoc();
    }, [docId, boxId, contentEN, contentCN, updateStat]);

    return { status, error };
};

export default useEditDoc;
