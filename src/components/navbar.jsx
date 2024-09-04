


import Logo from "../assets/logo1.png";
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  const navBarItem = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Contact",
      path: "/contact",
    },
    {
      name: "Register Poll",
      path: "/create",
    },
  ];

  return (
    <>
      <nav className="w-screen lg:px-16 md:px-8 px-4 flex flex-wrap items-center justify-between">
        <Link to="/" className="w-20 flex-none">
          <img src={Logo} alt="Brand Logo" className="w-full" />
        </Link>

        <div className="flex flex-col lg:flex-row w-full lg:w-auto justify-center gap-4 lg:gap-8 mt-4 lg:mt-0">
          {navBarItem.map((item, index) => (
            <Link
              to={item.path}
              key={index}
              className="w-full lg:w-auto text-center lg:text-left lg:text-[16px] md:text-[14px] text-[12px] rounded-full border border-gray-100 px-4 py-2 hover:bg-black hover:text-white"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <button className="bg-gray-900 text-gray-50 py-2 px-4 rounded-full mt-4 lg:mt-0 text-[14px] lg:text-[16px] md:text-[14px]">
          Connect Wallet
        </button>
      </nav>

      <Outlet />
    </>
  );
};

export default Navbar;
