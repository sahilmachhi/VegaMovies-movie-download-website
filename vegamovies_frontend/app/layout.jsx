import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });
import { Provider } from "./provider";

export const metadata = {
  title: {
    default:
      "Vegamovies: Free Bollywood, South Indian, and Hindi Dubbed Movies | 9xmovies, KatmovieHD",
    template: "%s - vegamovies",
  },
  description:
    "Download the latest Bollywood, South Indian, Hindi Dubbed, and Hollywood movies for free. Explore 9xmovies, 300MB Movies, Filmycloud, Tamilrockers, 1TamilMv, DesireMovies, KatmovieHD, and khatrimazaful",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta
        name="google-site-verification"
        content="xnPrLi4zuGDTjhB0QcCLXKwi-Vx-_i8BdocUf89RRns"
      />

      <body className={inter.className}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
