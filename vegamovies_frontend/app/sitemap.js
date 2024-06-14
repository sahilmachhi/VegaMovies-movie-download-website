import { supabase } from "@/supabase/supabase";
export default async function sitemap() {
    const { data, error } = await supabase
        .from("movielist")
        .select()
        .order("created_at", { ascending: false });

    const movieEntries = data.map((movie) => ({
        url: `${process.env.NEXT_PUBLIC_URL}/${movie.url}`, // Use movie.url directly
    }));

    return [
        {
            url: `${process.env.NEXT_PUBLIC_URL}/bollywood`
        },
        ...movieEntries
    ]
}