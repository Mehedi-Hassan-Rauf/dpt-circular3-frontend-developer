import { useState } from "react";
import { SlCalender } from "react-icons/sl";
import Dropdown from "./Dropdown";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const list = ["One", "Two", "Three", "Four", "Five", "Six"];

const SearchSection = ({ setIsResult }) => {
  const [isClick, setIsClick] = useState("One Way");
  const [selectesDate, setSelectedDate] = useState("");
  const Submit = () => {
    setIsResult(true);
  };
  return (
    <div className=" w-10/12 flex flex-col items-center gap-6">
      {/* First section start*/}
      <div className="w-full flex items-center justify-center">
        <button
          className={`px-5 py-1 border border-black ${
            isClick === "Round Trip" && "bg-indigo-800 text-white"
          }`}
          onClick={() => setIsClick("Round Trip")}
        >
          Round Trip
        </button>
        <button
          className={`px-5 py-1 border border-black ${
            isClick === "One Way" && "bg-indigo-800 text-white"
          }`}
          onClick={() => setIsClick("One Way")}
        >
          One Way
        </button>
        <button
          className={`px-5 py-1 border border-black ${
            isClick === "Multi City" && "bg-indigo-800 text-white"
          }`}
          onClick={() => setIsClick("Multi City")}
        >
          Multi City
        </button>
      </div>
      {/* First section end*/}

      {/* Second section start*/}
      <div className=" w-full flex flex-col lg:flex-row gap-4 lg:gap-1 border-y border-gray-400 py-3">
        <div className="w-full lg:w-[40%] grid grid-cols-3 gap-3 lg:gap-1">
          <Dropdown list={list} name={"LHR"} />
          <Dropdown list={list} name={"CDG"} />
          <div className="w-full flex border border-black">
            <DatePicker
              selected={selectesDate}
              onChange={(date) => setSelectedDate(date)}
              dateFormat="dd-MM-yyyy"
              className="w-[80%] py-0.5 outline-none pl-1"
              //minDate={ new Date()}
              //maxDate={ new Date()}
              //filterDate={ date=>date.getDay()!=6 && date.getDay()!=0}
              // isClearable
              showYearDropdown
            />
            <SlCalender className="w-[20%] text-2xl" />
          </div>
        </div>

        <div className="w-full lg:w-[40%] grid grid-cols-2 gap-3 lg:gap-1">
          <div className="grid grid-cols-2 gap-3 lg:gap-1">
            <Dropdown list={list} name={"Day-"} />
            <Dropdown list={list} name={"Day+"} />
          </div>
          <Dropdown list={list} name={"Anytime"} />
        </div>
        <div className="flex gap-2 w-full lg:w-[20%]">
          <p className="text-xl font-bold flex items-center justify-center">
            +
          </p>
          <div className="w-full grid grid-cols-2 gap-3 lg:gap-1">
            <Dropdown list={list} name={"ADT"} />
            <Dropdown list={list} name={"1"} />
          </div>
          <p className="text-xl font-bold flex items-center sustify-center">
            +
          </p>
        </div>
      </div>
      {/* Second section end*/}

      {/* Third section start*/}
      <div className="flex w-full text-sm lg:text-base items-center justify-between border-b-2 pb-2 border-gray-300">
        <div className="flex gap-1 font-semibold">
          <input type="checkbox" name="Extra Options" id="Extra Options" />
          <label htmlFor="Extra Options">Extra Options</label>
        </div>
        <div>
          <div className="flex gap-1 font-semibold">
            <input
              type="radio"
              name="options"
              value="Environment"
              id="Environment"
            />
            <label htmlFor="Environment">Environment</label>
            <input type="radio" name="options" value="Dummy" id="Dummy" />
            <label htmlFor="Dummy">Dummy</label>
            <input type="radio" name="options" value="PDT" id="PDT" />
            <label htmlFor="PDT">PDT</label>
          </div>
        </div>
        <div className="pl-2">
          <button
            onClick={Submit}
            className=" uppercase text-white bg-indigo-800 px-3 lg:px-5 rounded-md py-2 text-xs"
          >
            SEARCH
          </button>
        </div>
      </div>
      {/* Third section end*/}
    </div>
  );
};

export default SearchSection;
