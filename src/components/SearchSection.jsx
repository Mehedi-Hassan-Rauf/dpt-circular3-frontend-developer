import { useState } from "react";
import { SlCalender } from "react-icons/sl";
import Dropdown from "./Dropdown";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const list = ["One", "Two", "Three", "Four", "Five", "Six"];

const SearchSection = () => {
  const [search, setSearch] = useState(false);
  const [isClick, setIsClick] = useState("One Way");
  const [selectesDate, setSelectedDate] = useState("");
  const Submit = () => {
    setSearch(true);
  };
  return (
    <div className="w-full flex flex-col items-center gap-6">
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
      <div className=" w-[1000px] flex justify-center gap-2 border-y border-gray-400 py-3">
        <Dropdown list={list} name={"LHR"} width={"w-[120px]"} />
        <Dropdown list={list} name={"CDG"} width={"w-[120px]"} />
        <div className="relative">
          <DatePicker
            selected={selectesDate}
            onChange={(date) => setSelectedDate(date)}
            dateFormat="dd-MM-yyyy"
            className=" border border-black py-0.5 outline-none w-[120px] px-1"
            //minDate={ new Date()}
            //maxDate={ new Date()}
            //filterDate={ date=>date.getDay()!=6 && date.getDay()!=0}
            // isClearable
            showYearDropdown
          />
          <SlCalender className=" absolute text-lg top-1 right-2 cursor-none " />
        </div>
        {/* <Dropdown list={list} name={"22-12-2022"} width={"w-[120px]"} /> */}
        <Dropdown list={list} name={"Day-"} width={"w-[80px]"} />
        <Dropdown list={list} name={"Day+"} width={"w-[80px]"} />
        <Dropdown list={list} name={"Anytime"} width={"w-[180px]"} />
        <p className="text-xl font-bold flex items-center justify-center">+</p>
        <Dropdown list={list} name={"ADT"} width={"w-[100px]"} />
        <Dropdown list={list} name={"1"} width={"w-[100px]"} />
        <p className="text-xl font-bold flex items-center sustify-center">+</p>
      </div>
      <div>
        <div className="flex w-[1000px] items-center justify-between border-b-2 pb-2 border-gray-300">
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
          <div>
            <button
              onClick={Submit}
              className=" uppercase text-white bg-indigo-800 px-5 rounded-md py-2 text-xs"
            >
              SEARCH
            </button>
          </div>
        </div>
        {search && <h3 className=" font-semibold">Data parsed successfully</h3>}
      </div>
    </div>
  );
};

export default SearchSection;
