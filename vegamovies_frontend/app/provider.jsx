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
            <section>
            <Header />
            </section>
            <section>
            <Navigation />
            </section>
            <section>{children}</section>
            <section className="flex flex-col text-center mt-10 gap-8 mx-10">
            <h1 className="text-2xl"><em>Vegamovies4u.cc, vegamovies.mex.com, vegamovies.vg, Vegamovies nl, Vegamovies Netflix, Vegamovies in, Vegamovies.com, Vegamovies Hdhub4u, Vegamovies 2.0, Vegamovies.</em></h1>
            <p className="text-lg"><strong className="text-red-600">Disclaimer:</strong> Our website does not host any files on its servers. All files available for download on Vegamovies are hosted by third-party servers and provided by external sources over which we have no control. We do not endorse or promote any specific content available for download.</p>
            </section>
          </div>
        </div>
      </main>
    </>
  );
};
