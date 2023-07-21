import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const linkClasses = "navhover px-5 hover:text-white";

  return (
    <nav className="w-full flex justify-between items-center">
      <ul className="flex justify-around items-center ">
        {/* Navigation Links */}
        <li
          className={`${
            location.pathname === "/"
              ? `active ${linkClasses}`
              : `${linkClasses}`
          }  `}
        >
          <Link to={"/"}>Home</Link>
        </li>
        <li
          className={`${
            location.pathname === "/about"
              ? "active navhover px-5 hover:text-white"
              : "navhover px-5 hover:text-white"
          }  `}
        >
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
