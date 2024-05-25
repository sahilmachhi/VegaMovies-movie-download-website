"use client";

import Link from "next/link";
const Sidebar = ({ hidden, sidebarClose }) => {
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
