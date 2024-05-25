import { supabase } from "@/supabase/supabase";
import MovieCard from "./_components/MovieCard";
export const revalidate = 0;
const Home = async () => {
  const { data, error } = await supabase.from("movielist").select();
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 gap-y-10 mt-16 items-start">
        {data.map((d, index) => (
          <MovieCard data={d} key={index} />
        ))}
      </div>
    </>
  );
};

export default Home;
