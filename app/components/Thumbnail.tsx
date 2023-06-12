"use client";
import Image from "next/image";

import { useStore } from "../store";
import ModalImage from "./ModalImage";

const Thumbnail = () => {
  const imageNumber = useStore((store) => store.imageNumber);
  const imageSrc = require(`../../images/image-product-${imageNumber}.jpg`);
  const isModalOpen = useStore((store) => store.isModalOpen);
  const openModal = useStore((store) => store.openModal);

  return (
    <>
      <div
        className="w-[33rem] rounded-[1rem] overflow-hidden cursor-pointer"
        onClick={() => openModal()}
      >
        <Image src={imageSrc} alt="Thumbnail image" />
      </div>
      {isModalOpen && <ModalImage />}
    </>
  );
};

export default Thumbnail;
