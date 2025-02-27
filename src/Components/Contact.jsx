import React from "react";
import Title from "./Title";
import { Button } from "@mui/material";

const Contact = () => {
  return (
    <>
      <div>
        <Title text={"CONTACT"} />
        <div className="flex flex-col items-center justify-center gap-4 mt-8 ">
          <input
            className="border-[1px] w-[400px] border-amber-50 p-2 rounded"
            type="text"
            placeholder="Name"
          />
          <input
            className="border-[1px] w-[400px] border-amber-50 p-2 rounded"
            type="email"
            placeholder="Email"
          />
          <input
            className="border-[1px] w-[400px] border-amber-50 p-2 rounded"
            type="number"
            placeholder="Phone Number"
          />
          <textarea
            className="border-[1px] w-[400px] border-amber-50 p-2 rounded"
            type="text"
            rows={"5"}
            placeholder="Description"
          />
          <div className="">
            <Button style={{ fontSize: "1rem" }} variant="contained">
              Submit
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
