"use client";
import React from "react";
import Image from "next/image";
import logo from "../../images/logo.svg";
import cart from "../../images/icon-cart.svg";
import profile from "../../images/image-avatar.png";
import { useStore } from "../store";
import CartOrder from "./CartOrder";

const Nav = () => {
  const orderNumber = useStore((store) => store.orderNumber);
  const isCartOpen = useStore((store) => store.cartOpen);
  const cartChange = useStore((store) => store.cartChange);
  const cartDisplay = useStore((store) => store.cartNumberDisplayed);
  return (
    <nav className=" flex justify-between items-center py-[2rem]  mx-[13rem] border-b-2  ">
      <div className="flex gap-[5rem]  ">
        <div>
          <Image src={logo} alt="Logo" />
        </div>

        <ul className="flex gap-[2rem] text-[hsl(223, 64%, 98%)] cursor-pointer text-darkGrayishBlue">
          <li>Collections</li>
          <li>Men</li>
          <li>Women</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="flex  gap-[4rem] items-center cursor-pointer    ">
        <div className="relative">
          <Image src={cart} alt="Cart" onClick={cartChange} />
          {cartDisplay && (
            <div className="absolute bg-orangeTitle px-[.5rem] py-[.07rem] rounded-[50%] text-[.5rem] text-white right-[-0.5rem] top-[-0.5rem]">
              {orderNumber}
            </div>
          )}

          {isCartOpen ? <CartOrder orderNumber={orderNumber} /> : ""}
        </div>
        <div className="w-[3rem]">
          <Image src={profile} alt="profile-pic" />
        </div>  
      </div>
    </nav>
  );
};

export default Nav;
