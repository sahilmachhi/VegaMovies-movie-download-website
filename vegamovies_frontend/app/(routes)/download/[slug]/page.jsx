import React from "react";
import { supabase } from "@/supabase/supabase";
const page = async ({ params: { slug } }) => {
  const url = decodeURI(slug);
  console.log(url);
  const { data, error } = await supabase
    .from("movielist")
    .select()
    .eq("name", url);
  if (data) console.log(data);
  else {
    console.log(error);
  }
  return (
    <>
      <h1>{data[0].title}</h1>
    </>
  );
};

export default page;
