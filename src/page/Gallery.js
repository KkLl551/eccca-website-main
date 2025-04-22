import React, { useState } from "react";
import Footer from "../Footer";
import ImageGrid from "../ImageGrid";
import Modal from "../Modal";
import "./Gallery.css";
import { strings } from "../util/local";

function Gallery() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div>
      <div className="gallery-container">
        <div className="gallery">
          <h1>{strings.galleryTitle}</h1>
          <ImageGrid setSelectedImg={setSelectedImg} />
          {selectedImg && (
            <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Gallery;
