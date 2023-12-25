import { Html, Head, Main, NextScript } from "next/document";
import Logo from "../components/logo";

export default function Document() {
  return (
    <Html lang="en" className="bg-[#111111]">
      <Head />
      <body className="pb-[120px] relative">
        <div className="fixed z-50 w-screen px-3 mt-6 ">
          <div className="max-w-[1140px] flex justify-between items-center h-[60px] px-6 rounded-full  mx-auto backdrop-blur-md bg-black/30 ">
            <Logo />
            <div className="flex space-x-6">
              <a href="/">Home</a>
              <a href="/blog">Blog</a>
              <a href="/about">About</a>
              <a href="/timeline">Timeline</a>
            </div>
          </div>
        </div>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
