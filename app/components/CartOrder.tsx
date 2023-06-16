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
  const cartOpen = useStore((store) => store.cartOpen);
  const binTotalFunction = () => {
    cartDisplay;
    binFunction;
  };
  return (
    <>
      {cartOpen && orderNumber == 0 ? (
        <div
          className="absolute bg-white sm:w-[18rem] mt-[3rem] shadow-custom   
        sm:top-[0.2rem] sm:left-[-rem]  sm:right-[30%] rounded-[1rem] 
        max-[640px]:top-[10%] max-[640px]:left-[-1300%] max-[640px]:w-[20rem]  z-50
         max-[500px]:left-[-1200%] max-[500px]:w-[20rem]   max-[450px]:left-[-900%] max-[450px]:w-[21rem] "
        >
          <div className="font-bold pt-[1rem] pl-[1rem] pb-[1.5rem] border-b-2 ">
            Cart
          </div>
          <div className=" flex text-center text-[0.8rem] font-bold h-[100%] my-[5rem] items-center justify-center text-darkGrayishBlue">
            <div>Your cart is empty</div>
          </div>
        </div>
      ) : (
        ""
      )}
      {cartOpen && orderNumber > 0  ? (
        <div
          className="absolute bg-white sm:right-[30%]  sm:w-[19rem] mt-[3rem] shadow-custom sm:top-[0.2rem] left-[-rem] px-[1.5rem] rounded-[1rem] z-50
      max-[640px]:top-[10%] max-[640px]:left-[-1300%] max-[640px]:w-[20rem] max-[500px]:left-[-1200%] max-[500px]:w-[20rem]   max-[450px]:left-[-1200%] max-[450px]:w-[21rem] max-[420px]:left-[-1100%] max-[420px]:w-[2rem]"
        >
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
      ) : (
        ""
      )}
    </>
  );
};

export default CartOrder;
