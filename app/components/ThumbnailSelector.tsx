import React from "react";
import ThumbnailImage from "./ThumbnailImage";
import imageOne from "../../images/image-product-1-thumbnail.jpg";
import imageTwo from "../../images/image-product-2-thumbnail.jpg";
import imageThree from "../../images/image-product-3-thumbnail.jpg";
import imageFour from "../../images/image-product-4-thumbnail.jpg";

const ThumbnailSelector: React.FC = () => {
  return (
    <div className="mt-[3rem] mb-[2rem] sm:flex hidden   justify-between 2xl:w-[30rem] xl:-w-[25rem] lg:w-[24rem] min[960px]:w-[20rem] md:w-[17rem] sm:w-[14rem] w-[23rem]">
      <ThumbnailImage source={imageOne} alt="Thumbnail image one" number={1} />
      <ThumbnailImage source={imageTwo} alt="Thumbnail image two" number={2} />
      <ThumbnailImage
        source={imageThree}
        alt="Thumbnail image three"
        number={3}
      />
      <ThumbnailImage
        source={imageFour}
        alt="Thumbnail image four"
        number={4}
      />
    </div>
  );
};

export default ThumbnailSelector;
