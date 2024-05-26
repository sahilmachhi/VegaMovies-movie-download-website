import React from "react";
import { supabase } from "@/supabase/supabase";
import { MdDateRange } from "react-icons/md";

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
        <div className="flex flex-col lg:mx-20">
          <div className="border-b-2 pb-[36px]">
            <h1 className="font-bold text-[30px] leading-[1.35] tracking-[0px] no-underline box-border mx-0 my-[0.67em]">
              {data[0].title}
            </h1>
            <div className="flex items-center text-[rgb(196,196,196)] gap-2">
              <MdDateRange />
              <p>{date}</p>
            </div>
          </div>
          <div className="flex flex-col mt-[40px] mb-[8px]">
            <p className="text-[rgb(196,196,196)] pb-5">
              {data[0].description}
            </p>
            <h3 className="text-center text-[#eef425] text-[16px] font-bold leading-[1.35]">
              {data[0].title}
            </h3>
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
            <div className="flex flex-col mt-14 gap-6">
              <h3 className="text-center text-[#eef425] text-[26px]">
                Movie-SYNOPSIS/PLOT:
              </h3>
              <p>{data[0].plot}</p>
            </div>
            <div className="flex flex-col mt-14 gap-6 mb-8">
              <h3 className="text-center text-[#eef425] text-[26px]">
                ScreenShots:
              </h3>
              <div className="flex flex-col items-center justify-center gap-4">
                {data[0]?.screenshots.lenght < 1
                  ? "no screenshots"
                  : data[0].screenshots.map((s, index) => (
                      <div key={index}>
                        <img src={s} alt="screenshots" />
                      </div>
                    ))}
              </div>
            </div>
            <div className="flex flex-col border-b-2 border-t-2 border-white py-16">
              <h3 className="text-center text-[#eef425] text-[26px] ">
                download links:
              </h3>
              <div className="flex flex-col items-center justify-center gap-[36px] pt-4">
                {data[0].links.map((link, index) => (
                  <div
                    key={index}
                    className="flex flex-col item-center justify-center text-center gap-[20px]"
                  >
                    <h3
                      className="text-[18px] font-semibold
                    "
                    >
                      {link.title}
                    </h3>
                    <a href={link.link} target="_blank">
                      <button
                        className="text-white relative z-0 min-w-[160px] shadow-[rgb(255,255,255)_0px_5px_14px_-7px] text-[100%] leading-[24.3px] overflow-visible align-top inline-block cursor-pointer text-center transition-[color] duration-[0.3s] ease-[ease] delay-[0s,background-color,border-color,opacity,visibility] font-bold tracking-[0px] no-underline box-border m-[4px] px-[20px] py-[12px] rounded-none border-[none]"
                        style={{
                          background:
                            "linear-gradient(135deg, rgba(103, 223, 3, 0.72), rgba(19, 86, 213, 0.72)) 0% 0% / auto repeat scroll padding-box border-box rgba(0, 0, 0, 0)",
                        }}
                      >
                        Download Now
                      </button>
                    </a>
                  </div>
                ))}
              </div>
            </div>
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
