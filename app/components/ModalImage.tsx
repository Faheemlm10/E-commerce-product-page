import React from "react";
import { useStore } from "../store";
import Image from "next/image";
import next from "../../images/icon-next.svg";
import ThumbnailSelector from "./ThumbnailSelector";
import close from "../../images/icon-close.svg";

// import before from '../../images/'

const ModalImage = () => {
  const imageNumber = useStore((store) => store.imageNumber);
  const imageSrc = require(`../../images/image-product-${imageNumber}.jpg`);
  const closeModal = useStore((store) => store.closeModal);
  const isModalOpen = useStore((store) => store.isModalOpen);
  const nextImage = useStore((store) => store.increaseImageNumber);
  const prevImage = useStore((store) => store.decreaseImageNumber);
  const setImageNumber = useStore((store) => store.setImageNumber);

  const prevImageFunction = (e: any) => {
    e.stopPropagation();

    if (imageNumber === 1) {
      setImageNumber(4);
    } else {
      prevImage();
    }
  };
  const nextImageFunction = (e: any) => {
    e.stopPropagation();

    if (imageNumber === 4) {
      setImageNumber(1);
    } else {
      nextImage();
    }
  };

  const handleModalClick = (e: any) => {
    // Prevent modal closing when clicking on the image
    e.stopPropagation();
  };

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-75 cursor-pointer z-10 ">
      <div className="flex  flex-col ">
        <div className="self-end mr-[1.5rem] mb-[0.5rem]" onClick={closeModal}>
          {" "}
          <Image src={close} height={25} alt="closeButton" />
        </div>

        <div className="flex items-center">
          <div
            className="rounded-full  bg-white p-[1rem] mr-[-1rem] z-50 flex items-center justify-center transform rotate-180"
            onClick={prevImageFunction}
          >
            <Image src={next} alt="before icon" />
          </div>
          <div
            className={`flex items-center justify-center w-[29rem]  z-30 rounded-[1rem] overflow-hidden cursor-auto `}
            onClick={handleModalClick}
          >
            <Image src={imageSrc} alt="Modal slider image" />
          </div>
          <div
            className="rounded-full bg-white p-[1rem] ml-[-1rem] z-50 flex items-center justify-center"
            onClick={nextImageFunction}
          >
            <Image src={next} alt="next icon" />
          </div>
        </div>
        <div onClick={handleModalClick}>
          <ThumbnailSelector />
        </div>
      </div>
    </div>
  );
};

export default ModalImage;
