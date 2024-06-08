import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });
import { Provider } from "./provider";

export const metadata = {
  title: "Vegamovies - Download Bollywood, Hollywood,Movies and Web Series 4K",
  description:
    "Vegamovies Is Offering An Extensive Array Of Movies And Web Series To Download Free, You Will Get The Latest Netflix,Hollywood, Bollywood, South Indian Dubbed, Web-series And Many More Movies and Series In High Quality",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
