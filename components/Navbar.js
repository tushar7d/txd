import Logo from "./logo";
import { useRouter } from "next/router";
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
            Blog
          </a>
          <a
            className={`${
              router.pathname == "/about" ? "font-semibold" : "text-white"
            }`}
            href="/about"
          >
            About
          </a>
        
        </div>
        <div className="flex md:hidden">Menu</div>
      </div>
    </div>
  );
};
export default Navbar;
