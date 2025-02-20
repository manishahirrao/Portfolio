import React from "react";
import ma from "../assets/ma.jpg";

const Footer = () => {
  return (
    <>
      <div className="flex items-center justify-between mt-20 ">
        <div>
          <img className="h-[80px] w-[120px]" src={ma} />
        </div>
        <div>
          <p>Home</p>
          <p>About</p>
          <p>Contact</p>
          <p>Projects</p>
        </div>
        <div>
          <p>Contact</p>
          <p>+12-1314</p>
          <p>nmnjkc@gmai.com</p>
        </div>
      </div>
      <hr className="text-white h-[5px] w-full my-2" />
      <div className="flex items-center justify-center pb-2 ">
        <p>Copyright 2025 &copy; MA.All rights reserved</p>
      </div>
    </>
  );
};

export default Footer;
