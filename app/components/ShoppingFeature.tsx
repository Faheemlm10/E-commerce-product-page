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
  const cartNumberDisplayFunction = useStore(
    (store) => store.cartNumberDisplayFunction
  );

  return (
    <div className="flex  mt-[3rem] justify-between  ">
      <div className="flex     ">
        <div
          className="flex justify-center items-center bg-lightGrayishBlue py-[0.8rem] px-[1.3rem] rounded-l-[0.6rem] cursor-pointer"
          onClick={() => orderNumber > 0 && decreaseOrderNumber()}
        >
          <Image src={minus} height={10} width={10} alt="plus symbol" />
        </div>
        <div className="flex justify-center items-center bg-lightGrayishBlue py-[1rem] px-[1rem] font-bold">
          {orderNumber}
        </div>
        <div
          className="flex justify-center items-center bg-lightGrayishBlue py-[0.8rem] px-[1.3rem] rounded-r-[0.6rem] cursor-pointer"
          onClick={() => increaseOrderNumber()}
        >
          <Image src={plus} height={10} width={10} alt="plus symbol" />
        </div>
      </div>
      <div
        onClick={cartNumberDisplayFunction}
        className="flex gap-[1rem]  justify-center items-center bg-orangeTitle  text-white w-[18rem]  rounded-[0.6rem] cursor-pointer"
      >
        <Image
          src={Cart}
          className=" height={15} width={15} svg-icon "
          alt="cart symbol"
        />
        <div className="text-[0.9rem] font-bold">Add to cart</div>
      </div>
    </div>
  );
};

export default ShoppingFeature;
