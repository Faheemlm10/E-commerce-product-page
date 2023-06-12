"use client";
import React from "react";
import Image, { ImageLoader } from "next/image";
import { useStore } from "../store";

type StaticImageData = {
  src: string;
  height: number;
  width: number;
  blurDataURL?: string;
};

interface ThumbnailImageProps {
  source: StaticImageData;
  alt: string;
  number: number;
}

const ThumbnailImage: React.FC<ThumbnailImageProps> = ({
  source,
  alt,
  number,
}) => {
  const setImageNumber = useStore((store) => store.setImageNumber);
  const currentImageNumber = useStore((store) => store.imageNumber);
  const isModalOpen = useStore((store) => store.isModalOpen);

  const selectedStyles =
    number === currentImageNumber ? " border-orangeTitle border-[0.2rem]" : "";
  const selectedClassName = number === currentImageNumber ? " opacity-50" : "";
  return (
    <div
      className={`w-[6.6rem] rounded-[1rem] overflow-hidden cursor-pointer  ${selectedStyles} `}
      onClick={() => {
        setImageNumber(number);
      }}
    >
      <Image className={`${selectedClassName}`} src={source} alt={alt} />
    </div>
  );
};

export default ThumbnailImage;
