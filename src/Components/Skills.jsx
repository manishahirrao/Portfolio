import React from "react";
import Title from "./Title";

const Skills = () => {
  const languages = [
    {
      lang: "JAVA",
    },
    {
      lang: "JAVASCRIPT",
    },
    {
      lang: "NEXTJS",
    },
    {
      lang: "REACTJS",
    },
    {
      lang: "C++",
    },
    {
      lang: "FLUTTER",
    },
    {
      lang: "PYTHON",
    },
  ];
  return (
    <>
      <Title text={"SKILLS"} />
      <div className="flex items-center justify-between mt-8 ">
        {languages.map((item, index) => (
          <div className="bg-blue-500 w-[120px] h-[120px]  rounded-full flex justify-center items-center cursor-pointer hover:scale-105 ">
            <div key={index} className="text-xl font-semibold  ">
              {item.lang}
            </div>
          </div>
        ))}
      </div>
      <hr className="h-[2px] w-full bg-white mt-18" />
    </>
  );
};

export default Skills;
