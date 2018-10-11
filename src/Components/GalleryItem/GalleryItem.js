import React from "react";

const GalleryItem = ({ src, alt }) => (
  <li>
    <img src={src} alt={alt} />
  </li>
);

export default GalleryItem;
