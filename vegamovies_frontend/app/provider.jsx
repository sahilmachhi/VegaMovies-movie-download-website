import React from "react";
import Header from "./_components/Header";
export const Provider = ({ children }) => {
  return (
    <>
      <main>
        <div className="container mx-auto">
          <Header />
          <div>{children}</div>
        </div>
      </main>
    </>
  );
};
