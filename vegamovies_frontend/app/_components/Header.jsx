"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";
import Sidebar from "./Sidebar";
import { useState } from "react";
import MobileSearch from "./MobileSearch";
import { useRouter } from "next/navigation";
import Genre from "./Genre";

const Header = () => {
  const route = useRouter();
  const [hidden, setHidden] = useState("none");
  const [search, setSearch] = useState("none");
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = (query) => {
    if (query) route.push(`/search/${query}`);
    else alert("please write something");
  };

  const handleKeyDown = (event, query) => {
    if (event.key === "Enter") {
      handleSearch(query);
    }
  };

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
      <header className="flex flex-col px-0 w-full mx-0">
        <Sidebar hidden={hidden} sidebarClose={sidebarClose} />
        <div
          className="lg:block hidden flex-wrap  box-border text-[rgb(196,196,196)] bg-[rgb(17,17,17)] "
          style={{
            color: "rgb(196, 196, 196)",
            backgroundColor: "rgb(17, 17, 17)",
          }}
        >
          <Link href={`${process.env.NEXT_PUBLIC_URL}`}>
            <div className="relative h-[64px] w-[350px] my-[19px] ml-[20px]">
              <Image
                src="/vegamovies logo.png"
                alt="logo"
                fill={true}
                className="max-h-[100px] max-w-full block h-auto text-transparent box-border "
              ></Image>
            </div>
          </Link>
        </div>
        <div
          className="flex justify-between item-center box-border text-[#ffffff] bg-[#191919] h-[50px] px-0 w-full mx-0"
          style={{
            color: "rgb(196, 196, 196)",
            backgroundColor: "rgb(43, 52, 51)",
          }}
        >
          <div
            className="lg:flex hidden items-center
           justify-center h-full
            "
          >
            <Link
              href={`${process.env.NEXT_PUBLIC_URL}`}
              className="text-white text-[14px] text-center flex  self-center px-[14px] line-clamp-7 uppercase h-full items-center"
            >
              home
            </Link>

            <Link
              href={`${process.env.NEXT_PUBLIC_URL}/bollywood`}
              className="text-white text-[14px] text-center flex items-center self-center  line-clamp-7 px-[14px] uppercase h-full"
            >
              bollywood movies
            </Link>

            <Link
              href={`${process.env.NEXT_PUBLIC_URL}/south-indian-movies`}
              className="text-white text-[14px] text-center flex items-center self-center  line-clamp-7 px-[14px] uppercase h-full"
            >
              south hindi dubbed
            </Link>

            <Link
              href={`${process.env.NEXT_PUBLIC_URL}/hollywood`}
              className="text-white text-[14px] text-center flex items-center h-full self-center line-clamp-7 px-[14px] uppercase"
            >
              dual audio
            </Link>

            <div className="flex item-center self-center relative genre-hover h-full">
              <div className="text-white text-[14px] text-center flex items-center self-center  line-clamp-7 px-[14px] uppercase relative cursor-pointer  h-full">
                Genre
              </div>
              <Genre />
            </div>
          </div>
          <div className="lg:flex hidden items-center justify-center">
            <input
              type="text"
              placeholder="search here"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              onKeyDown={(e) => handleKeyDown(e, searchInput)}
              className="pl-4 bg-[rgb(39,47,46)] text-white block relative max-w-none w-full h-full"
            />
            <FaSearch
              className="size-6 mx-3 cursor-pointer"
              onClick={() => handleSearch(searchInput)}
            />
          </div>

          <div className="lg:hidden relative flex items-center">
            <IoIosMenu className="size-8 mx-3" onClick={sidebarClose} />
          </div>
          <div className="lg:hidden relative h-auto w-full flex justify-center items-center ">
            <Link href={"/"}>
              <div className=" relative w-[247px] h-[33px]">
                <Image
                  src="/vegamovies logo mobile.png"
                  alt="logo"
                  fill={true}
                  className="object-contain"
                ></Image>
              </div>
            </Link>
          </div>

          <div className="lg:hidden relative flex items-center">
            <FaSearch
              className="size-6 mx-3"
              onClick={() => handleSearchbar(searchInput)}
            />
          </div>
        </div>
      </header>
      {search === "block" ? (
        <MobileSearch
          onClick={() => handleSearch(searchInput)}
          setSearchInput={setSearchInput}
          searchInput={searchInput}
        />
      ) : null}
      <div className="mt-[25px]">
        <input
          type="text"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          onKeyDown={(e) => handleKeyDown(e, searchInput)}
          className="text-[14px] leading-[25.2px] overflow-visible box-border appearance-none bg-[rgba(0,0,0,0)] text-[rgb(153,153,153)] block font-normal tracking-[normal] w-full mt-0 mb-[10px] mx-0 pt-[11px] pb-[10px] px-[20px] border-2 border-solid border-[rgba(255,255,255,0.1)]"
          placeholder="Search Movies or WEB-Series Here..."
        />
      </div>
    </>
  );
};

export default Header;
