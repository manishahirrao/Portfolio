import React from "react";

const Title = ({ text }) => {
  return (
    <div>
      <div className="flex items-center justify-center my-2">
        <p className="text-2xl font-bold">{text}</p>
      </div>
    </div>
  );
};

export default Title;
