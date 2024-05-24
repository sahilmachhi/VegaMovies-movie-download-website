"use client";
import React, { useState } from "react";
import Link from "next/link";
const Sidebar = () => {
  const [hidden, setHidden] = useState("none");
  const sidebarClose = ({ onSidebarClose }) => {
    if (hidden === "none") {
      setHidden("block");
    } else {
      setHidden("none");
    }
    onSidebarClose();
  };
  return (
    <>
      <div
        className="absolute bg-black h-screen w-screen z-20"
        style={{ display: `${hidden}` }}
      >
        <div>
          <Link href={"/"}>home</Link>
        </div>
        <button onClick={sidebarClose}>cross</button>
      </div>
    </>
  );
};

export default Sidebar;
