import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";

const Dropdown = ({ list, name }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [val, setVal] = useState(name);
  return (
    <div className={`relative flex flex-col text-sm items-center`}>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="px-2 py-1 w-full flex items-center justify-between gap-4 border border-black duration-300 active:text-white"
      >
        {val}
        {!isOpen ? (
          <IoMdArrowDropup className="text-black" />
        ) : (
          <IoMdArrowDropdown className="text-black" />
        )}
      </button>
      {isOpen && (
        <div className="bg-gray-200 absolute top-8 w-full flex flex-col items-center gap-1 py-2 justify-between">
          {list.map((item, i) => (
            <h3
              key={i}
              onClick={() => setVal(item)}
              className=" cursor-pointer w-full text-center border hover:border-black"
            >
              {item}
            </h3>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
