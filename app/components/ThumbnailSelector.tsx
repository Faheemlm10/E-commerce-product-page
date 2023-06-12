import React from "react";
import ThumbnailImage from "./ThumbnailImage";
import imageOne from "../../images/image-product-1-thumbnail.jpg";
import imageTwo from "../../images/image-product-2-thumbnail.jpg";
import imageThree from "../../images/image-product-3-thumbnail.jpg";
import imageFour from "../../images/image-product-4-thumbnail.jpg";

const ThumbnailSelector: React.FC = () => {

  return (
    <div className="mt-[3rem] mb-[2rem] flex justify-between w-[33rem]">
      <ThumbnailImage source={imageOne} alt="Thumbnail image one"  number={1}/>
      <ThumbnailImage source={imageTwo} alt="Thumbnail image two" number={2} />
      <ThumbnailImage source={imageThree} alt="Thumbnail image three" number={3} />
      <ThumbnailImage source={imageFour} alt="Thumbnail image four" number={4}/>
    </div>
  );
};

export default ThumbnailSelector;
