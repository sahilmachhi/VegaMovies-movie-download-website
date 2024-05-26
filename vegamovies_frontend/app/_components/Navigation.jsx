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
      <div className="flex items-center justify-center gap-2 flex-wrap mt-8 gap-y-4">
        {navArr.map((nav, index) => (
          <Link
            href={nav.link}
            key={index}
            className="text-[white] text-center no-underline inline-block text-[14px] duration-[0.4s] cursor-pointer min-w-[70px] shadow-[rgb(254,0,0)_0px_0px_32px_-10px] bg-[rgb(223,19,60)] uppercase box-border mx-[2px] my-[4px] p-[5px] rounded-[15%]"
            style={{ backgroundColor: `rgb(223, 19, 60)` }}
          >
            {nav.text}
          </Link>
        ))}
      </div>
    </>
  );
};

export default Navigation;
