import React from "react";
import { supabase } from "@/supabase/supabase";
import MovieCard from "@/app/_components/MovieCard";

const page = async ({ params: { slug } }) => {
  const { data, error } = await supabase
    .from("movielist")
    .select()
    .eq("ott", slug);
  if (data) console.log(data);
  else {
    console.log(error);
  }
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 gap-y-10 mt-16 items-start">
        {data.length < 1 ? (
          <h1>error {slug} is not found please request admin to add</h1>
        ) : (
          data.map((d, index) => <MovieCard data={d} key={index} />)
        )}
      </div>
    </>
  );
};

export default page;
