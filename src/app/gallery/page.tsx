import React from "react";

// scss import
import styels from "./Gallery.module.scss";

// compoents import

const Gallery = () => {
  return (
    <div className={styels.gallery}>
      <div className={styels.container}>
        <h1>this page is gallery page</h1>
      </div>
    </div>
  );
};

export default Gallery;
