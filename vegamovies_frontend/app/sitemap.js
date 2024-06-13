import { supabase } from "@/supabase/supabase";
export default async function sitemap() {
    const { data, error } = await supabase
        .from("movielist")
        .select()
        .order("created_at", { ascending: false });

    const movieURL = data.map((url) => url.url)
    const movieEntries = movieURL.map((movieLink) => {
        url: `${process.env.NEXT_PUBLIC_URL}/${movieLink}`
        console.log(url)

    })

    return [
        {
            url: `${process.env.NEXT_PUBLIC_URL}/bollywood`
        },
        ...movieEntries
    ]
}