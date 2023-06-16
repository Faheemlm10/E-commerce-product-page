"use client";
import React from "react";
import { useState } from "react";
import Image from "next/image";
import logo from "../../images/logo.svg";
import cart from "../../images/icon-cart.svg";
import profile from "../../images/image-avatar.png";
import { useStore } from "../store";
import CartOrder from "./CartOrder";
import menu from "../../images/icon-menu.svg";
import close from "../../images/icon-close.svg";

const Nav = () => {
  const orderNumber = useStore((store) => store.orderNumber);
  const isCartOpen = useStore((store) => store.cartOpen);
  const cartChange = useStore((store) => store.cartChange);
  const cartDisplay = useStore((store) => store.cartNumberDisplayed);
  const [openNav, setIsOpenNav] = useState(false);
  return (
    <nav className=" flex justify-between items-center py-[2rem]  2xl:mx-[13rem] sm:mx-[2rem] border-b-2 max-[640px]:w-[100%] max-[640px]:px-[2rem]  ">
      <div className="flex md:gap-[2rem] gap-[1rem]  ">
        <div className="flex items-center justify-center gap-[1rem]">
          <div
            className="block sm:hidden cursor-pointer"
            onClick={() => setIsOpenNav(true)}
          >
            <Image src={menu} alt="menu" height={20} />
          </div>
          {openNav && (
            <div className=" fixed sm:hidden w-[100%] h-[100%] top-0 left-0 right-0  bg-black bg-opacity-75 z-[49]">
              {" "}
              <div className=" pt-[1rem] pl-[1.5rem] w-[50%] h-[100%] top-0 left-0 bg-white z-50">
                <div onClick={() => setIsOpenNav(false)} className="cursor-pointer">
                  <Image src={close} alt="close" />
                </div>
                <ul className="flex flex-col gap-5 font-bold mt-[2rem]">
                  <li>Collections</li>
                  <li>Men</li>
                  <li>Women</li>
                  <li>About</li>
                  <li>Contact</li>
                </ul>
              </div>
            </div>
          )}

          <div
            className={`${
              // Add a conditional class based on breakpoint
              "sm:flex-shrink-0 w-[8rem] justify-start"
            }`}
          >
            <Image src={logo} alt="Logo" height={20} />
          </div>
        </div>

        <ul className="sm:flex hidden 2xl:gap-[2rem] xl:gap-[1.5rem] lg:gap-[1rem] gap-[1rem] text-[hsl(223, 64%, 98%)] lg:text-[1rem] sm:text-[0.81rem] cursor-pointer text-darkGrayishBlue items-center">
          <li>Collections</li>
          <li>Men</li>
          <li>Women</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="flex  md:gap-[1rem] gap-[1rem] items-center cursor-pointer    ">
        <div className="relative md:w-[3rem] sm:w-[2.5rem] ml-[1rem] ">
          <Image src={cart} alt="Cart" onClick={cartChange} />
          {cartDisplay && (
            <div className="absolute bg-orangeTitle px-[.5rem] py-[.07rem] rounded-[50%] text-[.5rem] text-white sm:right-[0.6rem]  right-[-0.5rem] top-[-0.5rem]">
              {orderNumber}
            </div>
          )}

          {isCartOpen ? <CartOrder orderNumber={orderNumber} /> : ""}
        </div>
        <div className="md:w-[3rem] sm:w-[2.5rem] w-[3rem] ">
          <Image src={profile} alt="profile-pic" />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
