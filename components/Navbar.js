import Logo from "./logo";
import { useRouter } from "next/router";
import Iconset from './Iconset'
let Navbar = () => {
  const router = useRouter();
  return (
    <div className="fixed z-50 w-screen px-3 backdrop-blur-md bg-[#111111]/30 shadow-sm">
      <div className="max-w-[1180px] flex justify-between items-center h-[60px] px-6   mx-auto  ">
        <a href="/">
          <Logo />
        </a>
        <div className="hidden space-x-6 md:flex">
          <a
            className={`${
              router.pathname == "/" ? "font-semibold" : "text-white"
            }`}
            href="/"
          >
            Home
          </a>

          <a
            className={`${
              router.pathname == "/blog" ? "font-semibold" : "text-white"
            }`}
            href="/blog"
          >
            Writing
          </a>
          <a
            className={`${
              router.pathname == "/about" ? "font-semibold" : "text-white"
            }`}
            href="/about"
          >
            About
          </a>
          <Iconset />
        </div>
        <div className="flex md:hidden">
          <div className="dropdown dropdown-bottom dropdown-end">
            <div tabIndex={0} role="button" className="">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
</svg>

            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a
                  className={`${
                    router.pathname == "/" ? "font-semibold" : "text-white"
                  }`}
                  href="/"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className={`${
                    router.pathname == "/blog" ? "font-semibold" : "text-white"
                  }`}
                  href="/blog"
                >
                  Writing
                </a>
              </li>
              <li>
                <a
                  className={`${
                    router.pathname == "/about" ? "font-semibold" : "text-white"
                  }`}
                  href="/about"
                >
                  About
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
