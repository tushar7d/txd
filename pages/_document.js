import { Html, Head, Main, NextScript } from "next/document";
import Navbar from "../components/Navbar";

export default function Document() {
  return (
    <Html lang="en" className="bg-[#111111]">
      <Head />
      <body className="pb-[120px] relative">
    
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
