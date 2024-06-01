"use client";
import { RxCross2 } from "react-icons/rx";
import Link from "next/link";
const Sidebar = ({ hidden, sidebarClose }) => {
  return (
    <>
      <div
        className="absolute bg-black h-full w-full z-20"
        style={{ display: `${hidden}` }}
      >
        <div className="flex flex-col  gap-20 relative h-full">
          <div className="items-center self-center mt-12 flex">
            <div className="border rounded-full p-2">
              <RxCross2 className="size-6" onClick={sidebarClose} />
            </div>
          </div>
          <div className="flex flex-col text-left items-start justify-center ml-20 gap-3">
            <Link
              onClick={sidebarClose}
              href={"/"}
              className="text-white text-[26px] font-bold text-center  line-clamp-7 uppercase "
            >
              home
            </Link>

            <Link
              onClick={sidebarClose}
              href={"/bollywood"}
              className="text-white text-[26px] font-bold text-center  line-clamp-7 uppercase "
            >
              bollywood movies
            </Link>

            <Link
              onClick={sidebarClose}
              href={"/south-indian-movies"}
              className="text-white text-[26px] font-bold text-center  line-clamp-7 uppercase "
            >
              south hindi dubbed
            </Link>

            <Link
              onClick={sidebarClose}
              href={"/hollywood"}
              className="text-white text-[26px] font-bold text-center  line-clamp-7 uppercase "
            >
              dual audio
            </Link>

            <div>
              {/* <div className="text-white text-[26px] font-bold text-center  line-clamp-7 uppercase ">
                Genre
              </div> */}
              {/* <Genre /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
