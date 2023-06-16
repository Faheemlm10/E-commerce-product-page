"use client";
import Image from "next/image";
import next from "../../images/icon-next.svg";
import { useStore } from "../store";
import ModalImage from "./ModalImage";

const Thumbnail = () => {
  const imageNumber = useStore((store) => store.imageNumber);
  const imageSrc = require(`../../images/image-product-${imageNumber}.jpg`);
  const isModalOpen = useStore((store) => store.isModalOpen);
  const openModal = useStore((store) => store.openModal);
  const prevImage = useStore((store) => store.decreaseImageNumber);
  const nextImage = useStore((store) => store.increaseImageNumber);

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

  return (
    <>
      <div
        className=" relative 2xl:w-[30rem] xl:-w-[25rem] lg:w-[24rem] min[960px]:w-[20rem] md:w-[17rem] sm:w-[14rem] w-[100%] sm:rounded-[1rem] z-45 overflow-hidden cursor-pointer"
        onClick={() => openModal()}
      >
        <Image src={imageSrc} alt="Thumbnail image" />
        <div
          className="rounded-full absolute  bg-white p-[1.3rem] mr-[-1rem] z-43 sm:hidden flex items-center justify-center  transform rotate-180 top-[45%] left-[1rem]"
          onClick={prevImageFunction}
        >
          <Image src={next} height={15} alt="before icon" />
        </div>
        <div
            className="rounded-full absolute bg-white p-[1.3rem] ml-[-1rem] z-43 sm:hidden flex items-center justify-center top-[45%] right-[1rem]"
            onClick={nextImageFunction}
          >
            <Image src={next} height={15} alt="next icon" />
          </div>

      </div>
      {isModalOpen && <ModalImage />}
    </>
  );
};

export default Thumbnail;
