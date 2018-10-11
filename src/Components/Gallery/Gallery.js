import React from "react";
import NotFound from "../NoResults/NoResults";
import GalleryItem from "../GalleryItem/GalleryItem";
import Loader from "../Loader/Loader";
import { Consumer } from "../Context/Context";

const Gallery = () => {
  return (
    <Consumer>
      {({ photos, loading, currentTag }) => {
        return (
          <>
            {loading ? (
              <Loader />
            ) : (
              <div className="photo-container">
                {photos && <h2>{currentTag}</h2>}
                <ul>
                  {photos ? (
                    <>
                      {photos.map((photo, index) => (
                        <GalleryItem
                          src={photo.src}
                          alt={photo.alt}
                          key={index}
                        />
                      ))}
                    </>
                  ) : (
                    <NotFound />
                  )}
                </ul>
              </div>
            )}
          </>
        );
      }}
    </Consumer>
  );
};

export default Gallery;
