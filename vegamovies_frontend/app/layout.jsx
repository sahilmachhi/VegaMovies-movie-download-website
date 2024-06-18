import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });
import { Provider } from "./provider";

export const metadata = {
  title: {
    default:
      "Vegamovies | Download Bollywood And South Indian Hindi Dubbed Movies For Free , 9xmovies, Katmoviehd,Filmyzilla",
    template: "%s - vegamovies",
  },
  description:
    "Download Latest Bollywood ,South India Hindi Dubbed and Hollywood Movies Free, 9xmovies, 300MB Movies | Filmycloud | Tamilrockers | 1TamilMv | DesireMovies | KatmovieHD | khatrimazaful",
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
