import React from "react";
import Thumbnail from "./Thumbnail";
import ThumbnailSelector from "./ThumbnailSelector";

const ImageSlider = () => {
  return (
    <div className="pl-[3rem]">
      <Thumbnail />
      <ThumbnailSelector />
    </div>
  );
};

export default ImageSlider;
