"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";
import Sidebar from "./Sidebar";
import { useState } from "react";
import MobileSearch from "./MobileSearch";

const Header = () => {
  const [hidden, setHidden] = useState("none");
  const [search, setSearch] = useState("none");
  const sidebarClose = () => {
    if (hidden === "none") {
      setHidden("block");
    } else {
      setHidden("none");
    }
  };

  const handleSearchbar = () => {
    if (search === "none") {
      setSearch("block");
    } else {
      setSearch("none");
    }
  };
  return (
    <>
      <div className="flex flex-col">
        <Sidebar hidden={hidden} sidebarClose={sidebarClose} />
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
              placeholder="search here"
              className="pl-4 bg-[rgb(39,47,46)] text-white block relative max-w-none w-full h-full"
            />
            <FaSearch className="size-8 mx-3" />
          </div>

          <div className="lg:hidden relative flex items-center">
            <IoIosMenu className="size-8 mx-3" onClick={sidebarClose} />
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
            <FaSearch className="size-8 mx-3" onClick={handleSearchbar} />
          </div>
        </div>
      </div>
      {search === "block" ? <MobileSearch /> : null}
    </>
  );
};

export default Header;
