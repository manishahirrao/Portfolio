import React from "react";
import images from "../assets/images.jpeg";
import { ReactTyped } from "react-typed";
import Button from "@mui/material/Button";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";

const Home = () => {
  return (
    <>
      <div className="mt-16  flex justify-between items-center">
        <div className="">
          <p className="text-3xl font-semibold pb-2">Hello it's Me</p>
          <span className="font-extrabold text-5xl  ">Manish Ahirrao</span>
          <p className="text-3xl font-semibold pt-2 ">
            And I'm a
            <span className="pl-2">
              <ReactTyped
                className="text-blue-400"
                strings={["DEVELOPER", "FREELANCER", "CODER"]}
                typeSpeed={50}
                backSpeed={50}
                loop
              />
            </span>
          </p>
          <p className="mt-8 w-[600px] ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            mollitia nihil sit. Assumenda sapiente debitis ipsam expedita porro,
            eius accusamus iure officiis, ab optio obcaecati! Debitis totam
            eaque quis quam.
          </p>

          {/* social media */}
          <div className="mt-15 flex items-center gap-5">
            <FacebookRoundedIcon
              className="cursor-pointer text-blue-400 "
              style={{ fontSize: "3rem" }}
            />
            <InstagramIcon
              className="cursor-pointer text-blue-400 "
              onClick={() =>
                (window.location.href =
                  "https://www.instagram.com/manishahirrao_?igsh=MXJjOXJybDJkZm43 ")
              }
              style={{ fontSize: "3rem" }}
            />
            <TwitterIcon
              className="cursor-pointer text-blue-400   "
              onClick={() =>
                (window.location.href = " https://x.com/manishahirrao?s=08 ")
              }
              style={{ fontSize: "3rem" }}
            />
            <GitHubIcon
              className="cursor-pointer text-blue-400 "
              onClick={() =>
                (window.location.href = "https://github.com/manishahirrao")
              }
              style={{ fontSize: "3rem" }}
            />
          </div>
          <div className="mt-8">
            <Button style={{ fontSize: "1rem" }} variant="contained">
              Download CV
            </Button>
          </div>
        </div>
        <div>
          {/* <img className="h-[500px] rounded-full w-[900px]" src={bg} /> */}
          <div className="h-[500px] w-[500px] rounded-full hover:scale-105 bg-[#0055ff] cursor-pointer flex items-end justify-center shadow-md shadow-blue-600">
            <img className="rounded-full h-[500px] w-[500px] " src={images} />
          </div>
        </div>
      </div>
      <hr className="bg-amber-50 h-[0.5px]  mt-12" />
    </>
  );
};

export default Home;
