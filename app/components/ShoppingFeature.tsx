"use client";
import React from "react";
import plus from "../../images/icon-plus.svg";
import minus from "../../images/icon-minus.svg";
import Image from "next/image";
import Cart from "../../images/icon-cart.svg";
import { useStore } from "../store";

const ShoppingFeature = () => {
  const orderNumber = useStore((store) => store.orderNumber);
  const increaseOrderNumber = useStore((store) => store.increaseOrderNumber);
  const decreaseOrderNumber = useStore((store) => store.decreaseOrderNumber);
  const changeCart = useStore((store) => store.cartChange);
  const cartNumberDisplayFunction = useStore(
    (store) => store.cartNumberDisplayFunction
  );
  const addToCartFunction = () => {
    cartNumberDisplayFunction();
    changeCart()
  };

  return (
    <div className=" flex sm:flex-row flex-col  mt-[3rem] justify-between sm:pr-2    ">
      <div className="flex max-sm:w-[100%] mb-[2rem] lg:h-[4rem] sm:h-[3rem] h-[4rem]   ">
        <div
          className="flex justify-center items-center  bg-lightGrayishBlue rounded-l-[0.6rem] lg:px-[1.5rem] lg:py-[1rem] md:px-[1.2rem] md:py-[1rem] sm:px-[1rem] sm:py-[1rem] px-[1rem] py-[1.1rem] w-[100%]  cursor-pointer"
          onClick={() => orderNumber > 0 && decreaseOrderNumber()}
        >
          <Image src={minus} height={10} width={10} alt="plus symbol" />
        </div>
        <div className="flex justify-center items-center bg-lightGrayishBlue lg:px-[1.5rem] lg:py-[1rem] md:px-[1.2rem] md:py-[1rem] sm:px-[1rem] sm:py-[1rem] w-[100%] px-[1rem] py-[1.1rem]  font-bold">
          {orderNumber}
        </div>
        <div
          className="flex justify-center items-center bg-lightGrayishBlue  rounded-r-[0.6rem]  lg:px-[1.5rem] lg:py-[1rem] md:px-[1.2rem] md:py-[1rem] sm:px-[1rem] sm:py-[1rem] cursor-pointer px-[1rem] py-[1.1rem] w-[100%]"
          onClick={() => increaseOrderNumber()}
        >
          <Image src={plus} height={10} width={10} alt="plus symbol" />
        </div>
      </div>
      <div
        onClick={addToCartFunction}
        className="flex sm:gap-[1rem] gap-[1.5rem]  justify-center items-center bg-orangeTitle  text-white lg:w-[18rem] md:w-[14rem] sm:w-[10rem]  rounded-[0.6rem]  max-sm:px-[1rem] lg:h-[4rem] sm:h-[3rem] h-[4rem]  cursor-pointer"
      >
        <Image
          src={Cart}
          className=" h-[1rem] w-[1rem] svg-icon "
          alt="cart symbol"
        />
        <div className="text-[1rem] font-bold">Add to cart</div>
      </div>
    </div>
  );
};

export default ShoppingFeature;
