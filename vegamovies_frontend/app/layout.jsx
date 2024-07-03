import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });
import { Provider } from "./provider";
import Script from "next/script";

export const metadata = {
  title: {
    default:
      "Vegamovies - Bollywood,Hollywood & South movies & web-series free download & watch online",
    template: "%s",
  },
  description:
    "Download the latest Bollywood, South Indian, Hindi Dubbed, and Hollywood movies for free on vegamovies.",
  icons: {
    icon: "/icon.png",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_URL}`,
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* google site verification */}
      <meta
        name="google-site-verification"
        content="xnPrLi4zuGDTjhB0QcCLXKwi-Vx-_i8BdocUf89RRns"
      />

      {/* hotjar */}
      <Script id="hotjar">
        {`(function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:5037466,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`}
      </Script>

      <Script type="text/javascript">
        {`atOptions = {
		'key' : '3e22d157a10edec38ff937408d27dc96',
		'format' : 'iframe',
		'height' : 600,
		'width' : 160,
		'params' : {}
	};`}
      </Script>
      <Script
        type="text/javascript"
        src="//www.topcreativeformat.com/3e22d157a10edec38ff937408d27dc96/invoke.js"
      ></Script>

      <Script type="text/javascript">
        {`atOptions = {
		'key' : 'c3dbe1aae4ba08f0ffcef4118b09f3a0',
		'format' : 'iframe',
		'height' : 300,
		'width' : 160,
		'params' : {}
	};`}
      </Script>
      <Script
        type="text/javascript"
        src="//www.topcreativeformat.com/c3dbe1aae4ba08f0ffcef4118b09f3a0/invoke.js"
      ></Script>

      <Script
        type="text/javascript"
        src="//pl23633247.highrevenuenetwork.com/b4/b1/5a/b4b15a6a6fa484c1e89d7954962533c4.js"
      ></Script>
      <Script type="text/javascript">
        {`atOptions = {
		      'key' : '81857868d38de304a049fcf802dfe6bc',
		      'format' : 'iframe',
		      'height' : 60,
		      'width' : 468,
		      'params' : {}
	      };`}
      </Script>
      <Script
        type="text/javascript"
        src="//www.topcreativeformat.com/81857868d38de304a049fcf802dfe6bc/invoke.js"
      ></Script>

      <script type="text/javascript">
        {`atOptions = {
		'key' : 'dc9fb57e04464ec61a28680a05a82b66',
		'format' : 'iframe',
		'height' : 90,
		'width' : 728,
		'params' : {}
	};`}
      </script>
      <Script
        type="text/javascript"
        src="//www.topcreativeformat.com/dc9fb57e04464ec61a28680a05a82b66/invoke.js"
      ></Script>

      <Script type="text/javascript">
        {`atOptions = {
		'key' : 'f69e85cb4ac6895360a8c735dd89ab86',
		'format' : 'iframe',
		'height' : 250,
		'width' : 300,
		'params' : {}
	};`}
      </Script>
      <Script
        type="text/javascript"
        src="//www.topcreativeformat.com/f69e85cb4ac6895360a8c735dd89ab86/invoke.js"
      ></Script>

      <Script type="text/javascript">
        {`atOptions = {
		'key' : 'f8d47ebd2bf21816bbd717179e3c604d',
		'format' : 'iframe',
		'height' : 50,
		'width' : 320,
		'params' : {}
	};`}
      </Script>
      <Script
        type="text/javascript"
        src="//www.topcreativeformat.com/f8d47ebd2bf21816bbd717179e3c604d/invoke.js"
      ></Script>

      {/* social bar  */}
      <Script
        type="text/javascript"
        src="//pl23680716.highrevenuenetwork.com/87/1c/ad/871cadea3ff5ec74343cdf301357178b.js"
      ></Script>

      <body className={inter.className}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
