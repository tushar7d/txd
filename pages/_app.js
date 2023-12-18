import "../style.css";

import localFont from "next/font/local";

const recoleta = localFont({
  src: [
    {
      path: "../public/fonts/Recoleta-Black.woff2",
      weight: "900",
      style: "normal",
    },
    {
      path: "../public/fonts/Recoleta-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/Recoleta-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/Recoleta-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Recoleta-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Recoleta-Light.woff2",
      weight: "300",
      style: "normal",
    },
  ],
  variable: "--font-recoleta",
  weight: ["300", "400", "500", "600", "700", "900"],
});

export default function App({ Component, pageProps }) {
  return (
    <main className={` ${recoleta.variable} relative`}>
      <div className=" fixed opacity-80 mix-blend-overlay left-10  w-[500px] h-[500px]  animate-[blob 7s infinite]  filter bg-red-500 -z-10   rounded-full blur-3xl " />
      <div className=" fixed opacity-80 mix-blend-overlay  left-[100px] w-[500px] h-[500px] animate-blob delay-700  filter bg-purple-500 -z-10  rounded-full blur-3xl" />
      <div className=" fixed opacity-80 mix-blend-overlay  left-[400px] w-[600px] h-[600px] animate-blob delay-700  filter bg-blue-500 -z-10  rounded-full blur-3xl" />

      <div className=" fixed opacity-80 mix-blend-overlay right-10  w-[500px] h-[500px]  animate-[blob 7s infinite]  filter bg-cyan-500 -z-10   rounded-full blur-3xl " />
      <div className=" fixed opacity-80 mix-blend-overlay  right-[400px] w-[500px] h-[500px] animate-blob delay-700  filter bg-blue-500 -z-10  rounded-full blur-3xl" />
      <div className=" fixed opacity-80 mix-blend-overlay  right-[100px] w-[600px] h-[600px] animate-blob delay-700  filter bg-green-600 -z-10  rounded-full blur-3xl" />
      <Component {...pageProps} />
    </main>
  );
}
