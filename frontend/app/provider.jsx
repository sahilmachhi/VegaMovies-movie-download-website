import React from "react";
import Header from "./_components/Header";
import Navigation from "./_components/Navigation";
import Footer from "./_components/Footer";
import Script from "next/script";
export const Provider = ({ children }) => {
  return (
    <>
      <main className="bg-[#111] text-white">
        <div className="container mx-auto">
          <div
            style={{ boxShadow: "rgba(0, 0, 0, 0.3) 0px 0px 20px 0px" }}
            className=" bg-[#191919]"
          >
            <section>
              <Header />
            </section>
            <Script
              async="async"
              data-cfasync="false"
              src="//pl23680765.highrevenuenetwork.com/6f915dd292b11b2a5319217d38b48bea/invoke.js"
            ></Script>
            <div id="container-6f915dd292b11b2a5319217d38b48bea"></div>
            <section>
              <Navigation />
            </section>
            <script
              async="async"
              data-cfasync="false"
              src="//pl23680765.highrevenuenetwork.com/6f915dd292b11b2a5319217d38b48bea/invoke.js"
            ></script>
            <div id="container-6f915dd292b11b2a5319217d38b48bea"></div>
            {children}
            <Footer />
          </div>
        </div>
      </main>
    </>
  );
};
