import Link from "next/link";
import React from "react";

const Genre = () => {
  const genres = [
    "action",
    "adventure",
    "animation",
    "biography",
    "comedy",
    "crime",
    "documentary",
    "drama",
    "family",
    "fantasy",
    "history",
    "horror",
    "mystery",
    "music",
    "romance",
    "sci-fi",
    "sport",
    "suspense",
    "thriller",
    "war",
    "short",
  ];

  return (
    <>
      <div className="bg-[#2b3433]  top-10 flex flex-col z-10 text-left  absolute">
        {genres.map((g, i) => (
          <Link
            key={i}
            href={`${process.env.NEXT_PUBLIC_URL}/genre/${g}`}
            className="p-[15px] left-0 genre hover:text-red-600 cursor-pointer"
          >
            {g}
          </Link>
        ))}
      </div>
    </>
  );
};

export default Genre;
