import Logo from "./logo";
import { useRouter } from 'next/router'
let Navbar = () => {
  const router = useRouter()
  return (
    <div  className="fixed flex justify-between items-center max-w-[1200px]  inset-x-0 mx-auto  z-50 px-4 py-12">
    

  <Logo />
  <div className="text-xl flex space-x-3 font-serif font-semibold">
    <a  className={`${router.pathname == "/"? "text-red-500":"text-white"}`} href="/">Home</a>
    <a  className={`${router.pathname == "/about"? "text-red-500":"text-white"}`} href="/about">About</a>
    <a  className={`${router.pathname == "/blog"? "text-red-500":"text-white"}`} href="/blog">Blog</a>
    <a  className={`${router.pathname == "/timeline"? "text-red-500":"text-white"}`} href="/timeline">Timeline</a>
    
    
  </div>
  </div>
  );
};
export default Navbar;
