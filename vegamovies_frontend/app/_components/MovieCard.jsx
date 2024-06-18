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
     <article id={data.id}>
     <Link
        href={`/${data.url}`}
        className="w-full flex flex-col gap-8 justify-center text-center items-center hover:text-red-500 "
      >
        <div
          className="relative p-1 flex items-center justify-center article-image"
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
          <h3>{date}</h3>
          <h2 className="entry-title" itemProp="headline">{data.title}</h2>
        </div>
      </Link>
     </article>
    </>
  );
};

export default MovieCard;
