import React from "react";
import { FC } from "react";
import productPic from "../../images/image-product-1.jpg";
import Image from "next/image";
import Bin from "../../images/icon-delete.svg";
import { useStore } from "../store";
interface CartOrderProps {
  orderNumber: number;
}

const CartOrder: FC<CartOrderProps> = ({ orderNumber }: CartOrderProps) => {
  const total = orderNumber * 125;
  const setToZero = useStore((store) => store.setOrderNumberZero);
  const cartDisplay = useStore((store) => store.cartNumberDisplayed);
  const binFunction = useStore((store) => store.cartNumberFalseFunction);
  const binTotalFunction = () => {
    cartDisplay;
    binFunction;
  };
  return (
    <>
      {orderNumber === 0 ? (
        <div className="absolute bg-white w-[18rem] mt-[3rem] shadow-custom top-[0.2rem] left-[-5rem] rounded-[1rem]">
          <div className="font-bold pt-[1rem] pl-[1rem] pb-[1.5rem] border-b-2 ">
            Cart
          </div>
          <div className=" flex text-center text-[0.8rem] font-bold h-[100%] my-[5rem] items-center justify-center text-darkGrayishBlue">
            <div>Your cart is empty</div>
          </div>
        </div>
      ) : (
        <div className="absolute bg-white  mt-[3rem] shadow-custom top-[0.2rem] left-[-5rem] px-[1.5rem] rounded-[1rem] ">
          <div className="font-bold  py-[1.5rem] border-b-2 ">Cart</div>
          <div className="flex flex-col items-center">
            <div className="flex mt-7 gap-[1rem] items-center mb-7  ">
              {" "}
              <div className="">
                <Image
                  src={productPic}
                  alt="product pic"
                  style={{
                    height: "2.5rem",
                    width: "3rem",
                    borderRadius: "0.5rem",
                  }}
                />
              </div>
              <div className="text-[0.8rem] w-[15rem] text-darkGrayishBlue  ">
                Fall Limited Edition Sneakers $125.00 x {orderNumber}
                <span className="font-bold text-[0.8rem]"> ${total}.00</span>
              </div>
              <div
                className="cursor-pointer"
                onClick={() => {
                  setToZero();
                  binFunction();
                }}
              >
                <Image src={Bin} alt="Bin" height={20} />
              </div>
            </div>
            <div className="w-[100%] text-center bg-orangeTitle text-[white] rounded-[0.5rem] py-[0.8rem] text-[0.9rem] mb-[1rem]">
              Checkout
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CartOrder;
