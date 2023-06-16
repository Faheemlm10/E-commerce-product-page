import React from "react";
import ShoppingFeature from "./ShoppingFeature";

const ImageInfo = () => {
  return (
    <div className="flex flex-col sm:items-between lg:w-[32rem] md:w-[25rem] sm:w-[23rem]  max-[1090px]:ml-[2rem] sm:mx-[1.5rem] mt-[5rem] mb-[3rem] mx-[3rem]  ">
      <div className="2xl:mt-[-5rem] xl:mt-[-3rem] sm:mt-[-3rem] text-orangeTitle font-bold tracking-[.12rem] md:text-[.9rem] sm:text-[0.7rem]">
        SNEAKER COMPANY
      </div>
      <div className="lg:mt-[1.4rem] sm:mt-[0.1rem] font-bold 2xl:text-[3rem] xl:text-[2.4rem] lg:text-[2rem] md:text-[1.7rem] sm:text-[1.4rem] mt-[1.5rem] text-[2.2rem] sm:leading-[3.4rem] leading-[2.5rem] ">
        Fall Limited Edition Sneakers
      </div>
      <div className="text-darkGrayishBlue lg:mt-[2rem] sm:mt-[0.5rem] mt-[1.3rem] 2xl:text-[1rem] xl:text-[1rem] lg:text-[0.9rem]  text-[0.9rem] lg:leading-7 leading-5 ">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        weather can offer
      </div>
      <div className="lg:mt-[1rem] sm:mt-[1rem] flex sm:flex-col flex-row sm:items-start items-center justify-between gap-[0.3rem] mt-[2rem]">
        <div className="flex  gap-[1rem]  items-center">
          <div className="2xl:text-[2rem] xl:text-[1.7rem] lg:text-[1.5rem] sm:text-[1rem]  text-[2rem] font-bold">
            $125.00
          </div>
          <div className="text-orangeTitle font-bold sm:text-[0.8rem] text-[1.2rem] bg-paleOrange rounded-[0.5rem] px-[0.5rem] py-[0.1rem] ">
            50%
          </div>
        </div>
        <div className="text-grayishBlue md:text-[1rem]  sm:text-[0.8rem] font-bold line-through">
          $250.00
        </div>
      </div>
      <ShoppingFeature />
    </div>
  );
};

export default ImageInfo;
