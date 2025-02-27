import React from "react";
import Title from "./Title";

const Projects = () => {
  const proj = [
    {
      name: "Swiggy",
      desc: "  officiis numquam, voluptate quasi, nostrum excepturi nihil doloremque fugit, molestiae necessitatibus. Vitae exercitationem amet ea. Aspernatur, fugit! Ut, quibusdam animi.",
    },
    {
      name: "Spotify",
      desc: "  officiis numquam, voluptate quasi, nostrum excepturi nihil doloremque fugit, molestiae necessitatibus. Vitae exercitationem amet ea. Aspernatur, fugit! Ut, quibusdam animi.",
    },
    {
      name: "Employ Dashboard",
      desc: "  officiis numquam, voluptate quasi, nostrum excepturi nihil doloremque fugit, molestiae necessitatibus. Vitae exercitationem amet ea. Aspernatur, fugit! Ut, quibusdam animi.",
    },
    {
      name: "Ecommerce",
      desc: "  officiis numquam, voluptate quasi, nostrum excepturi nihil doloremque fugit, molestiae necessitatibus. Vitae exercitationem amet ea. Aspernatur, fugit! Ut, quibusdam animi.",
    },
  ];
  return (
    <div>
      <Title text={"PROJECTS"} />
      <div className="flex items-center justify-between mt-8">
        {proj.map((item, index) => (
          <div className="w-[300px] h-[200px] px-4 py-2 rounded-2xl border-2 border-white cursor-pointer hover:border-4 hover:scale-110 ">
            <div className="flex items-start flex-col justify-between">
              <span className="py-4">{item.name}</span>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <hr className="h-[2px] w-full bg-white mt-18" />
    </div>
  );
};

export default Projects;
