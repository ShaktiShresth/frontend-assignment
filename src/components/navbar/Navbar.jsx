import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const linkClasses = "navhover px-5 hover:text-white";

  return (
    <nav className="w-full flex justify-between items-center">
      <ul className="flex justify-around items-center ">
        {/* Navigation Links */}
        <Link to={"/"}>
          <li
            className={`${
              location.pathname === "/"
                ? `active ${linkClasses}`
                : `${linkClasses}`
            }  `}
          >
            Home
          </li>
        </Link>
        <Link to="/about">
          <li
            className={`${
              location.pathname === "/about"
                ? "active navhover px-5 hover:text-white"
                : "navhover px-5 hover:text-white"
            }  `}
          >
            About
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
