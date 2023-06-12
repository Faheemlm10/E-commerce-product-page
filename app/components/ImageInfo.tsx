import React from "react";
import ShoppingFeature from "./ShoppingFeature";

const ImageInfo = () => {
  return (
    <div className="flex flex-col items-between  ">
      <div className="mt-[4rem] text-orangeTitle font-bold tracking-[.12rem] text-[.9rem]">
        SNEAKER COMPANY
      </div>
      <div className="mt-[2rem] font-bold text-[3rem] leading-[3.4rem]">
        Fall Limited Edition Sneakers
      </div>
      <div className="text-darkGrayishBlue mt-[2.5rem] leading-7">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        weather can offer
      </div>
      <div className="mt-[2rem] flex flex-col gap-[0.3rem]">
        <div className="flex gap-[1rem] items-center">
          <div className="text-[2rem] font-bold">$125.00</div>
          <div className="text-orangeTitle font-bold bg-paleOrange rounded-[0.5rem] px-[0.5rem] py-[0.1rem] ">50%</div>
        </div>
        <div className="text-grayishBlue text-[1rem] font-bold line-through">$250.00</div>
      </div>
      <ShoppingFeature />
    </div>
  );
};

export default ImageInfo;
