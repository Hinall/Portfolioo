import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import StarsCanvas from "@/components/main/StarsBackground";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://ibiimemon.com/"),
  title: "Hinal Panchal - Full Stack Developer Portfolio",
  description:
    "Full Stack Developer with 1.6 years of experience in React.js, Next.js, Node.js, and Express.js. Skilled in building scalable, production-ready applications and cloud deployments.",
  keywords: [
    "Full Stack Developer",
    "Portfolio",
    "React.js",
    "Next.js",
    "Node.js",
    "Express.js",
    "JavaScript",
    "TypeScript",
    "AWS",
    "MongoDB",
  ],
  openGraph: {
    title: "Hinal Panchal - Full Stack Developer",
    description:
      "Full Stack Developer experienced in scalable web apps, RESTful APIs, and cloud deployment using AWS.",
    images: "/OpenGraph.jpg",
  },
  alternates: {
    canonical: "https://ibiimemon.com/",
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/Me.png" />
        <link rel="apple-touch-icon" href="/Me.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "http://schema.org",
              "@type": "Person",
              name: "Hinal Panchal",
              jobTitle: "Full Stack Developer",
              url: "https://ibiimemon.com",
              sameAs: [
                "https://www.linkedin.com/in/hinal-p-2138a3220/",
 "https://github.com/Hinall",
              ],
            }),
          }}
        />
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-${process.env.NEXT_PRIVATE_GTID}`}
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-${process.env.NEXT_PRIVATE_GTID}');
            `,
          }}
        />
      </head>
      <body
        className={`${inter.className} bg-[#111] overflow-y-scroll overflow-x-hidden`}
      >
        <SpeedInsights />
        <Analytics />
        <StarsCanvas />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
