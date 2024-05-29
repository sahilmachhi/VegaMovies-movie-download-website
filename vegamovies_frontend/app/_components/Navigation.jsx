import Link from "next/link";

const Navigation = () => {
  const navArr = [
    {
      text: "anime",
      link: "/region/anime",
    },
    {
      text: "web series",
      link: "/type/web-series",
    },
    {
      text: "movie",
      link: "/type/movie",
    },
    {
      text: "480p",
      link: "/quality/480p",
    },
    {
      text: "720p",
      link: "/quality/720p",
    },
    {
      text: "1080p",
      link: "/quality/1080p",
    },
    {
      text: "2160 4K",
      link: "/quality/2160p",
    },
    {
      text: "netflix",
      link: "/ott/netflix",
    },
    {
      text: "amazon prime",
      link: "/ott/amazon-prime",
    },
    {
      text: "disney+ hotstar",
      link: "/ott/hotstar",
    },
    {
      text: "sonyLIV",
      link: "/ott/sonyLIV",
    },
    {
      text: "jioCinema",
      link: "/ott/jio cinema",
    },
    {
      text: "zee5",
      link: "/ott/zee5",
    },
    {
      text: "voot",
      link: "/ott/voot",
    },
    {
      text: "discovery",
      link: "/ott/discovery",
    },
    {
      text: "mxPlayer",
      link: "/ott/mxPlayer",
    },
  ];
  return (
    <>
      <div className="flex items-center justify-center  flex-wrap mt-[10px] ">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-[6px] gap-y-[5px]">
          <Link
            href={`/hollywood`}
            className="box-border shadow-[rgb(254,0,0)_0px_0px_32px_-10px] text-white cursor-pointer inline-block text-[14px] min-w-[170px] text-center duration-[0.4s] bg-[rgb(68,184,26)] font-medium uppercase tracking-[normal] leading-[25.2px] mx-px my-[5px] px-[6px] py-[8px] rounded-[15%]"
          >
            DUAL AUDIO CONTENT
          </Link>
          <Link
            href={`/bollywood`}
            class="box-border shadow-[rgb(254,0,0)_0px_0px_32px_-10px] text-white cursor-pointer inline-block text-[14px] min-w-[170px] text-center duration-[0.4s] bg-[rgb(255,0,0)] font-medium uppercase tracking-[normal] leading-[25.2px] mx-px my-[5px] px-[6px] py-[8px] rounded-[15%]"
          >
            HINDI MOVIES
          </Link>
          <div className="box-border shadow-[rgb(254,0,0)_0px_0px_32px_-10px] text-white cursor-pointer inline-block text-[14px] min-w-[170px] text-center duration-[0.4s] bg-[rgb(223,154,23)] uppercase font-normal tracking-[normal] leading-[25.2px] mx-px my-[5px] px-[6px] py-[8px] rounded-[15%]">
            SUBSCRIBE YOUTUBE
          </div>
          <div class="box-border shadow-[rgb(254,0,0)_0px_0px_32px_-10px] text-white cursor-pointer inline-block text-[14px] min-w-[170px] text-center duration-[0.4s] bg-[rgb(0,157,225)] uppercase font-normal tracking-[normal] leading-[25.2px] mx-px my-[5px] px-[6px] py-[8px] rounded-[15%]">
            HOW TO DOWNLOAD
          </div>
        </div>
        <div className="flex items-center justify-center gap-x-[5px]  flex-wrap mt-[10px]">
          {navArr.map((nav, index) => (
            <Link
              href={nav.link}
              key={index}
              className="text-[white] text-center no-underline inline-block text-[14px] duration-[0.4s] cursor-pointer p-[5px] py-[10px] mx-[2px] my-[4px] min-w-[70px] shadow-[rgb(254,0,0)_0px_0px_32px_-10px] bg-[rgb(223,19,60)] uppercase box-border rounded-[15%]"
              style={{ backgroundColor: `rgb(223, 19, 60)` }}
            >
              {nav.text}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navigation;
