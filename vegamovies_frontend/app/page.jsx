import { supabase } from "@/supabase/supabase";
import MovieCard from "./_components/MovieCard";
import  PageRouter  from "./_components/PageRouter";
export const revalidate = 0;
const Home = async ({searchParams}) => {
  console.log(searchParams)
  if (searchParams.page === undefined) {
    searchParams.page = 1
    console.log(searchParams)
  }

  let page  = searchParams.page
  const itemsPerPage = 20;
function movielist(page) {
  const from = (page - 1) * itemsPerPage;
  const to = from + itemsPerPage - 1;
  return {from, to}
}

const { from, to } = movielist(page, itemsPerPage);

  const { data, error } = await supabase
    .from("movielist")
    .select()
    .order("created_at", { ascending: false })
    .range(from,to)

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 gap-y-10 mt-16 items-start">
        {data.map((d, index) => (
          <MovieCard data={d} key={index} />
        ))}
      </div>
      <div className="flex items-center justify-center gap-5">
        <PageRouter page={page}/>
      </div>
    </>
  );
};

export default Home;
