import { supabase } from "@/supabase/supabase";
import MovieCard from "./_components/MovieCard";
import PageRouter from "./_components/PageRouter";
import { redirect } from "next/navigation";
export const revalidate = 600;

const Home = async ({ searchParams }) => {
  const { count } = await supabase
    .from("movielist")
    .select("id", { count: "exact" });

  const numberOfPages = Math.ceil(count / 20);
  console.log(numberOfPages);

  if (searchParams.page === undefined) {
    searchParams.page = 1;
    console.log(searchParams);
  }

  let page = searchParams.page;
  const itemsPerPage = 20;
  function movielist(page) {
    const from = (page - 1) * itemsPerPage;
    const to = from + itemsPerPage - 1;
    return { from, to };
  }
  const { from, to } = movielist(page, itemsPerPage);

  const { data, error } = await supabase
    .from("movielist")
    .select("created_at,url,id,posterURL,title")
    .order("created_at", { ascending: false })
    .range(from, to);

  if (error) return <h1>error fetching data contact admin</h1>;
  return (
    <>
      <section>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 gap-y-10 mt-16 items-start">
          {data.length === 0
            ? redirect(`/?page=${numberOfPages}`)
            : data.map((d, index) => <MovieCard data={d} key={index} />)}
        </div>
        <div className="flex items-center justify-center gap-5">
          <PageRouter page={page} />
        </div>
      </section>
      <section className="flex flex-col text-center mt-10 gap-8 mx-10">
        <h1 className="text-2xl">
          <em>
            vegamovies3,vegamovies, luxmovies,mkvcinemas, yts official,
            123movies, moviesflixhd, filmyzila, mkvmovieshhub, hdmoviehub, movie
            free download website
          </em>
        </h1>
        <p className="text-lg">
          <strong className="text-red-600">Disclaimer:</strong> Our website does
          not host any files on its servers. All files available for download on
          Vegamovies are hosted by third-party servers and provided by external
          sources over which we have no control. We do not endorse or promote
          any specific content available for download.
        </p>
      </section>
    </>
  );
};

export default Home;
