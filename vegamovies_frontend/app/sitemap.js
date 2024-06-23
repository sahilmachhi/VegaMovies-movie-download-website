import { supabase } from "@/supabase/supabase";
export default async function sitemap() {
    const { data, error } = await supabase
        .from("movielist")
        .select()
        .order("created_at", { ascending: false });

    const movieEntries = data.map((movie) => ({
        url: `${process.env.NEXT_PUBLIC_URL}/${movie.url}`,
    }));

    return [
        {
            url: `${process.env.NEXT_PUBLIC_URL}`,
            lastModified: new Date(),
        },
        {
            url: `${process.env.NEXT_PUBLIC_URL}/bollywood`,
            lastModified: new Date(),
        },
        {
            url: `${process.env.NEXT_PUBLIC_URL}/hollywood`,
            lastModified: new Date(),
        },
        {
            url: `${process.env.NEXT_PUBLIC_URL}/south-indian-movies`,
            lastModified: new Date(),
        },
        ...movieEntries
    ]
}