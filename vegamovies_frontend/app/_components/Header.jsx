"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";
import Sidebar from "./Sidebar";

const Header = () => {
  const handleSidebarClose = () => {
    console.log("Sidebar closed!");
    // Perform any additional actions in the parent component as needed
  };
  return (
    <>
      <div className="flex flex-col">
        <Sidebar onSidebarClose={handleSidebarClose} />

        <div
          className="lg:block hidden flex-wrap  box-border text-[rgb(196,196,196)] bg-[rgb(17,17,17)]"
          style={{
            color: "rgb(196, 196, 196)",
            backgroundColor: "rgb(17, 17, 17)",
          }}
        >
          <Image
            src="/vegamovies logo.png"
            alt="logo"
            width={500}
            height={200}
            className="max-h-[100px] max-w-full block h-auto text-transparent box-border "
          ></Image>
        </div>
        <div
          className="flex justify-between item-center box-border text-[rgb(196,196,196)] bg-[rgb(43,52,51)] h-[50px]"
          style={{
            color: "rgb(196, 196, 196)",
            backgroundColor: "rgb(43, 52, 51)",
          }}
        >
          <div className="lg:flex hidden  h-[50px]">
            <Link
              href={"/"}
              className="text-white text-[14px] text-center flex item-center self-center px-[14px] line-clamp-7 uppercase"
            >
              home
            </Link>

            <Link
              href={"/"}
              className="text-white text-[14px] text-center flex item-center self-center  line-clamp-7 px-[14px] uppercase"
            >
              bollywood movies
            </Link>

            <Link
              href={"/"}
              className="text-white text-[14px] text-center flex item-center self-center  line-clamp-7 px-[14px] uppercase"
            >
              south hindi dubbed
            </Link>

            <Link
              href={"/"}
              className="text-white text-[14px] text-center flex item-center self-center line-clamp-7 px-[14px] uppercase"
            >
              dual audio
            </Link>

            <Link
              href={"/"}
              className="text-white text-[14px] text-center flex item-center self-center  line-clamp-7 px-[14px] uppercase"
            >
              Genre
            </Link>
          </div>
          <div className="lg:flex hidden items-center justify-center">
            <input
              type="text"
              className=" bg-[rgb(39,47,46)] text-white block relative max-w-none w-full h-full"
            />
            <FaSearch className="size-8 mx-3" />
          </div>

          <div className="lg:hidden relative flex items-center">
            <IoIosMenu className="size-8 mx-3" onClick={handleSidebarClose} />
          </div>
          <div className="lg:hidden relative h-auto w-full flex justify-center items-center ">
            <Image
              src="/vegamovies logo.png"
              alt="logo"
              fill={true}
              className="object-contain"
            ></Image>
          </div>

          <div className="lg:hidden relative flex items-center">
            <FaSearch className="size-8 mx-3" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
