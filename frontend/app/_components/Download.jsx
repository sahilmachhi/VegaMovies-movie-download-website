"use client";
import { useState } from "react";
function Download({ link }) {
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    setClickCount(clickCount + 1);
    if (clickCount < 3) {
      window.open(
        "https://www.highrevenuenetwork.com/tx5zee9mgf?key=ac2a157ce1e13f65a1d585c901584463",
        "_blank"
      );
    } else {
      window.open(link.link, "_blank");
    }
  };
  return (
    <>
      <div className="flex flex-col item-center justify-center text-center gap-[20px]">
        <h3 className="text-[18px] font-semibold">{link.title}</h3>

        <button
          onClick={handleClick}
          className="text-white relative z-0 min-w-[160px] shadow-[rgb(255,255,255)_0px_5px_14px_-7px] text-[100%] leading-[24.3px] overflow-visible align-top inline-block cursor-pointer text-center transition-[color] duration-[0.3s] ease-[ease] delay-[0s,background-color,border-color,opacity,visibility] font-bold tracking-[0px] no-underline box-border m-[4px] px-[20px] py-[12px] rounded-none border-[none]"
          style={{
            background:
              "linear-gradient(135deg, rgba(103, 223, 3, 0.72), rgba(19, 86, 213, 0.72)) 0% 0% / auto repeat scroll padding-box border-box rgba(0, 0, 0, 0)",
          }}
        >
          Download Now
        </button>
      </div>
    </>
  );
}

export default Download;
