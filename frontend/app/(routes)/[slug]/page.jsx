import React from "react";
import { supabase } from "@/supabase/supabase";
import { MdDateRange } from "react-icons/md";
import Download from "@/app/_components/Download";
import Image from "next/image";
import Script from "next/script";
export async function generateStaticParams() {
  const { data, error } = await supabase.from("movielist").select();

  return data?.map((data) => {
    slug: data.url;
  });
}
export async function generateMetadata({ params: { slug } }) {
  const url = decodeURI(slug);
  const { data, error } = await supabase
    .from("movielist")
    .select()
    .eq("url", url);
  console.log("data is here", data);
  return {
    title: `Watch ${data[0].name} free from Vegamovies`,
    description: `download ${data[0].name} for free in 480p,720p,1080p and 4K and hindi dubbed in vegamovies | filmyzila | hdmovies`,
    creator: "vegamovies",
    publisher: "vegamovies",
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_URL}/${data[0].url}`,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
      },
    },
  };
}

const page = async ({ params: { slug } }) => {
  const url = decodeURI(slug);
  const { data, error } = await supabase
    .from("movielist")
    .select()
    .eq("url", url);
  if (error) return <h1>database error</h1>;

  if (data.length < 1) {
    return (
      <>
        <h1>error: invalid url or movie/series not found</h1>
      </>
    );
  } else {
    const localDate = new Date(data[0].created_at);
    const localYear = localDate.getFullYear();
    const localMonth = localDate.getMonth() + 1;
    const localDay = localDate.getDate();
    const date = `${String(localDay).padStart(2, "0")}-${String(
      localMonth
    ).padStart(2, "0")}-${localYear}`;
    return (
      <>
        <div className="flex flex-col lg:mx-20 mx-10">
          <div className="border-b-2 pb-[36px]">
            <h1 className="font-bold text-[30px] leading-[1.35] tracking-[0px] no-underline box-border mx-0 my-[0.67em]">
              {data[0].title}
            </h1>
            <div className="flex items-center text-[rgb(196,196,196)] gap-2">
              <MdDateRange />
              <p>{date}</p>
            </div>
          </div>
          <Script
            async="async"
            data-cfasync="false"
            src="//pl23680765.highrevenuenetwork.com/6f915dd292b11b2a5319217d38b48bea/invoke.js"
          ></Script>
          <div id="container-6f915dd292b11b2a5319217d38b48bea"></div>
          <div className="flex flex-col mt-[40px] mb-[8px]">
            <p className="text-[rgb(196,196,196)] pb-5">
              {data[0].description}
            </p>
            <h2 className="text-center text-[#eef425] text-[32px] font-bold leading-[1.35]">
              {data[0].title}
            </h2>
            <h3 className="mt-5 mb-10">
              Vegamovies is the best online platform for downloading 1080p and
              4K Bollywood, Hollywood Movies in hindi dubbed [DVDRip] [BRRip],
              720p Bollywood, Hollywood Movies [DVDRip] [BRRip], Bollywood,
              Hollywood Movies [300MB], Crime, Drama, Mystery. We provide direct
              G-Drive download link for fast and secure downloading. Click on
              the download button below and follow the steps to start download.
            </h3>
            <Script
              async="async"
              data-cfasync="false"
              src="//pl23680765.highrevenuenetwork.com/6f915dd292b11b2a5319217d38b48bea/invoke.js"
            ></Script>
            <div id="container-6f915dd292b11b2a5319217d38b48bea"></div>
            <h3 className="text-[#eef425] text-[26px] font-semibold mb-[8px]">
              Movie Info:
            </h3>
            <div className="flex flex-col">
              <strong>Movie/Series Name: {data[0].name}</strong>
              <strong>Ott: {data[0].ott}</strong>
              <strong>type: {data[0].type}</strong>
              <strong>Release Year: {data[0].year}</strong>
              <strong>Region: {data[0].region}</strong>
              <strong>Genre: {data[0].genre.map((g) => `${g}, `)}</strong>
              <strong>Quality: {data[0].quality.map((q) => `${q}, `)}</strong>
            </div>
            <Script
              async="async"
              data-cfasync="false"
              src="//pl23680765.highrevenuenetwork.com/6f915dd292b11b2a5319217d38b48bea/invoke.js"
            ></Script>
            <div id="container-6f915dd292b11b2a5319217d38b48bea"></div>
            <div className="flex flex-col mt-14 gap-6">
              <h3 className="text-center text-[#eef425] text-[26px]">
                Movie-SYNOPSIS/PLOT:
              </h3>
              <div className="flex flex-col gap-10">
                {Array.isArray(data[0].plot) ? (
                  data[0]?.plot.map((plot, index) => (
                    <>
                      <p key={index}>{plot}</p>
                    </>
                  ))
                ) : (
                  <p>plot is not found</p>
                )}
              </div>
            </div>
            <Script
              async="async"
              data-cfasync="false"
              src="//pl23680765.highrevenuenetwork.com/6f915dd292b11b2a5319217d38b48bea/invoke.js"
            ></Script>
            <div id="container-6f915dd292b11b2a5319217d38b48bea"></div>
            <div className="flex flex-col mt-14 gap-6 mb-8">
              <h3 className="text-center text-[#eef425] text-[26px]">
                ScreenShots:
              </h3>
              <div className="flex flex-col items-center justify-center gap-4">
                {data[0]?.screenshots.lenght < 1
                  ? "no screenshots"
                  : data[0].screenshots.map((s, index) => (
                      <div key={index} className="relative w-full h-auto">
                        <Image
                          src={s}
                          alt="screenshots"
                          width={558}
                          height={313}
                          // className="w-[558px] h-[313px]"
                          // className="w-full h-full top-0 left-0 object-cover rounded-2xl"
                          style={{
                            objectFit: "contain",
                            width: "100%",
                            position: "relative",
                            height: "unset",
                          }}
                        />
                      </div>
                    ))}
              </div>
            </div>
            <Script
              async="async"
              data-cfasync="false"
              src="//pl23680765.highrevenuenetwork.com/6f915dd292b11b2a5319217d38b48bea/invoke.js"
            ></Script>
            <div id="container-6f915dd292b11b2a5319217d38b48bea"></div>
            <div className="flex flex-col border-b-2 border-t-2 border-white py-16">
              <h3 className="text-center text-[#eef425] text-[26px] ">
                download links:
              </h3>
              <p className="text-[24px] text-center text-red-500">
                note: <br></br>
                <span className="text-white mb-2">
                  Always try to use Filepress Link
                </span>
              </p>
              <div className="flex flex-col items-center justify-center gap-[36px] pt-4">
                {data[0].links.map((link, index) => (
                  <Download key={index} link={link} />
                ))}
                <p className="text-[24px] text-center text-red-500">
                  note: <br></br>
                  <span className="text-white mb-2">
                    click on download button 3-4 times to get download link
                    thank you
                  </span>
                </p>
              </div>
            </div>
            <Script
              async="async"
              data-cfasync="false"
              src="//pl23680765.highrevenuenetwork.com/6f915dd292b11b2a5319217d38b48bea/invoke.js"
            ></Script>
            <div id="container-6f915dd292b11b2a5319217d38b48bea"></div>
            <div className="flex flex-col py-16 gap-10">
              <h3 className="text-center text-[#eef425] text-[26px]">
                Winding Up ❤️
              </h3>
              <p className="text-[16px]">
                Thank You For Visiting Vegamovies The Prefect Spot For HD
                Bollywood, and HD Dual Audio (Hindi-English) Movies & TV Series
                Download. So Please Keep Downloading & Keep Sharing. Enjoy!
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default page;
