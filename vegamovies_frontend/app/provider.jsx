import React from "react";
import Header from "./_components/Header";
import Navigation from "./_components/Navigation";
export const Provider = ({ children }) => {
  return (
    <>
      <main className="bg-black text-white">
        <div className="container mx-auto">
          <Header />
          <Navigation />
          <div>{children}</div>
        </div>
      </main>
    </>
  );
};
