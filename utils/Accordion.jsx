"use client";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import Collapse from "react-collapse";

const Accordion = ({ open, toggle, title, desc, color }) => {
  return (
    <>
      <div
        className="shadow rounded-full"
        style={{marginBottom: "16px", backgroundColor: color, padding: "18px"}}
      >
        <div
          className="py-[25px] px-[50px] flex justify-between items-center pointer"
          onClick={toggle}
        >
          <p className="large-text font-semibold text-white mr-20">
            {title}
          </p>
          
        </div>
        <Collapse isOpened={open}>
          <div className="text-white text-2xl"
          >
            {desc}
          </div>
        </Collapse>
      </div>
      
    </>
  );
};

export default Accordion;
