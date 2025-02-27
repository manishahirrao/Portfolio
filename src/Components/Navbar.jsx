import React from "react";
import ma from "../assets/ma.jpg";
import { NavLink, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";

const Navbar = () => {
  const item = [
    {
      id: 1,
      text: "Home",
      to: "/",
      page: <Home />,
    },
    {
      id: 2,
      text: "About",
      to: "/About",
      page: <About />,
    },
    {
      id: 3,
      text: "Skills",
      to: "/Skills",
    },
    {
      id: 4,
      text: "Projects",
      to: "/Projects",
    },
    {
      id: 5,
      text: "Experience",
      to: "/Experience",
    },
    {
      id: 6,
      text: "Contact",
      to: "/Contact",
    },
  ];
  return (
    <div id="Navbar" className="flex item-center justify-between mt-6">
      <div>
        <img className="h-[80px] w-[150px]" src={ma} alt="Logo" />
      </div>
      <ul className="flex items-center gap-6 text-2xl font-medium">
        {item.map((items) => (
          <Link
            onClick={() => item.page}
            to={items.to}
            className="cursor-pointer hover:scale-105 "
            key={items.id}
          >
            <p>{items.text}</p>
            <hr className="h-[4px] bg-blue-600 border-none shadow-md shadow-blue-500 hidden" />
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
