import { supabase } from "@/supabase/supabase";

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

const ott = [
    "netflix",
    "amazon-prime",
    "hotstar",
    "zee5",
    "sonyLIV",
    "jio cinema",
    "voot",
    "hoichoi",
    "discovery",
    "altbalaji",
    "mxPlayer",
    "appletv+",
    "theaterPrint",
    "others",
];

const quality = ["480p", "720p", "1080p", "2160p"];
export default async function sitemap() {
    const { data: movieList } = await supabase
        .from("movielist")
        .select()
        .order("created_at", { ascending: false });

    const movieEntries = movieList.map((movie) => ({
        url: `${process.env.NEXT_PUBLIC_URL}/${movie.url}`,
    }));

    const genreRoute = genres.map((genre) => ({
        url: `${process.env.NEXT_PUBLIC_URL}/genre/${genre}`,
    }))

    const qualityRoute = quality.map((quality) => ({
        url: `${process.env.NEXT_PUBLIC_URL}/quality/${quality}`,
    }))

    const ottRoute = ott.map((ott) => ({
        url: `${process.env.NEXT_PUBLIC_URL}/ott/${ott}`,
    }))

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
        {
            url: `${process.env.NEXT_PUBLIC_URL}/type/Movie`,
            lastModified: new Date(),
        },
        {
            url: `${process.env.NEXT_PUBLIC_URL}/type/web-series`,
            lastModified: new Date(),
        },
        ...movieEntries,
        ...genreRoute,
        ...ottRoute,
        ...qualityRoute
    ]
}