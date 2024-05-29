import React from "react";
import Header from "./_components/Header";
import Navigation from "./_components/Navigation";
export const Provider = ({ children }) => {
  return (
    <>
      <main className="bg-[#111] text-white">
        <div className="container mx-auto">
          <div
            style={{ boxShadow: "rgba(0, 0, 0, 0.3) 0px 0px 20px 0px" }}
            className=" bg-[#191919]"
          >
            <Header />
            <Navigation />
            <div>{children}</div>
          </div>
        </div>
      </main>
    </>
  );
};
