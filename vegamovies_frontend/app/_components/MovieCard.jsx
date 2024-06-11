import React from "react";
import Link from "next/link";

const MovieCard = ({ data }) => {
  const localDate = new Date(data.created_at);

  const localYear = localDate.getFullYear();
  const localMonth = localDate.getMonth() + 1;
  const localDay = localDate.getDate();

  const date = `${String(localDay).padStart(2, "0")}-${String(
    localMonth
  ).padStart(2, "0")}-${localYear}`;

  return (
    <>
      <Link
        href={`/${data.url}`}
        className="w-full flex flex-col gap-8 justify-center text-center items-center hover:text-red-500 "
      >
        <div
          className=" relative p-1 flex items-center justify-center "
          style={{
            background: "linear-gradient(to right, #ca4747, #f4c922)",
          }}
        >
          <img
            src={data.posterURL}
            className="h-[250px] w-[168px] object-cover"
            alt="poster url"
          />
        </div>

        <div>
          <h1>{date}</h1>
          <h1>{data.title}</h1>
        </div>
      </Link>
    </>
  );
};

export default MovieCard;
