import Link from "next/link";
function Footer() {
  return (
    <>
      <footer className="flex justify-center items-center flex-col gap-7 py-10">
        <div className="default-copyright">
          Copyright © 2024. Created by ❤️ Vegamovies ❤️
        </div>
        <div>
          <Link href="/dmca">DMCA</Link>
        </div>
      </footer>
    </>
  );
}

export default Footer;
