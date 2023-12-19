import Logo from "./logo";
let Navbar = () => {
  return (
    <div className="flex min-w-[360px] justify-between  nextra-nav-container-blur fixed top-0  mt-12  left-0 right-0 z-50   max-w-[1160px] p-4 mx-auto bg-black  items-center rounded-3xl">
      <div className="mx-4">
        <Logo />
      </div>
      <div className="flex justify-between space-x-6 mx-4">
        <div>Home</div>
        <div>Blog</div>
        <div>About</div>
      </div>
    </div>
  );
};
export default Navbar;
