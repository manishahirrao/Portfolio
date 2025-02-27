import React from "react";
import images from "../assets/images.jpeg";
import { Button } from "@mui/material";

const About = () => {
  return (
    <>
      {/* top */}
      <div className="flex items-center justify-center mt-2 gap-2">
        <p>img</p>
        <p className="text-2xl font-bold">About Me</p>
      </div>

      {/* bottom */}

      {/* left */}
      <div className="mt-12 flex items-center justify-between w-full px-24 ">
        <img className="h-[500px] w-[450px] " src={images} />

        {/* right */}

        <div className="w-1/2">
          <p className="text-5xl font-bold pb-1">I'm Manish</p>
          <span className="text-xl font-semibold  ">Software Engineer</span>

          <p className="pt-4 text-2xl">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia
            perspiciatis fuga ipsum veritatis dolorem ducimus, porro eaque modi.
            Tempore, odit repellat eius quae tenetur ipsam perspiciatis
            praesentium alias nihil nemo.
          </p>

          <p className="flex items-center pt-4">
            <span className="font-bold pr-1">Email :</span>{" "}
            <p className="text-md">manishkishor2003@gmail.com</p>
          </p>
          <p className="flex items-center">
            <span className="font-bold pr-1">Place :</span>{" "}
            <p className="text-md">Pune,Maharashtra,India</p>
          </p>

          <div className="pt-4">
            <Button style={{ fontSize: "1rem" }} variant="contained">
              Resume
            </Button>
          </div>
        </div>
      </div>
      <hr className="h-[2px] w-full bg-white mt-18" />
    </>
  );
};

export default About;
