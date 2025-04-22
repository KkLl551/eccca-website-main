import { useState, useEffect } from "react";
import { dbFireStore, dbStorage } from "../db/config.js";

const Removal = (collection, reff, url) => {
    // const [status, setStatus] = useState(false);
    // const [error, setError] = useState("");

        dbFireStore.collection(collection).doc(reff).delete();
        var httpsRef = dbStorage.refFromURL(url);
        // let fileName = httpsRef.name;
        // const fileRef = dbStorage.child(collection + "/" + fileName);
        httpsRef.delete().then(() => {
            // File deleted successfully
          }).catch((error) => {
            // Uh-oh, an error occurred!
          });
            // .then(() => {
            //     setStatus(true);
            // }).catcch(() => {
            //     setError("error");
            // });

    return ;
};

export default Removal;