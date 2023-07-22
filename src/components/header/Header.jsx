import { Link } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import SearchBar from "../searchbar/SearchBar";

const Header = () => {
  const [nav, setNav] = useState(false);

  // click handle
  const handleClick = () => setNav(!nav);

  return (
    <header className="fixed px-12 py-6 w-full h-[80px] flex justify-between items-center bg-[#0a192f] text-gray-400 z-10">
      <div>
        {/* Website Logo or Name */}
        <Link to={"/"}>
          <span className="py-3 text-bold text-white text-xl hover:scale-105 transition-300">
            OnlineStore
          </span>
        </Link>
      </div>

      <div className="hidden md:flex gap-4 justify-between items-center">
        {/* Nav component */}
        <Navbar />

        {/* Search bar */}
        <SearchBar />
      </div>

      {/* Hamburger */}
      <div className="z-10 md:hidden cursor-pointer" onClick={handleClick}>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen flex gap-4 flex-col justify-center items-center bg-[#0a192f] text-2xl"
        }
      >
        <li>
          <Link to={"/"} onClick={handleClick}>
            Home
          </Link>
        </li>
        <li>
          {" "}
          <Link to={"/about"} onClick={handleClick}>
            About
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
