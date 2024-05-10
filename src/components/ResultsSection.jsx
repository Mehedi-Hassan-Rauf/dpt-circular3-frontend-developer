import dataFile from "../../data/LHR_CDG_ADT1_TYPE_1.txt";
import { useEffect, useState } from "react";

//Heading list
const headings = [
  "flight",
  "aircraft",
  "class",
  "fare",
  "route",
  "departure",
  "arrival",
  "duration",
  "price",
];

const ResultsSection = () => {
  const [data, setData] = useState([]);
  // fetching data for the search result and converting it in json
  useEffect(() => {
    const gettingData = async () => {
      const fetchedData = await fetch(dataFile);
      const res = await fetchedData.json();
      setData(res);
    };
    gettingData();
  }, []);
  //check console to see the raw json data
  console.log(data);

  return (
    <div className=" w-10/12 md:w-10/12 bg-gray-200 flex flex-col">
      <h3 className="bg-white mt-[-22px] pb-8">{data.message}</h3>
      <div className="overflow-x-auto h-[460px] md:h-fit">
        <header className="w-[1000px] md:w-full bg-gray-300 text-gray-700 text-[10px] md:text-sm flex justify-between py-2">
          {headings.map((heading, i) => {
            return (
              <div
                key={i}
                className={`${
                  i === 5 || i === 6 ? "w-[15%]" : "w-[10%]"
                } uppercase font-medium flex items-center justify-center`}
              >
                <h3 className="w-full text-center">{heading}</h3>
              </div>
            );
          })}
        </header>

        {/* All data is shown below in columns */}
        {data?.flightOffer?.map((flight, i) => {
          return (
            <div
              key={i}
              className={`w-[1000px] md:w-full md:h-fit flex justify-between text-gray-500 ${
                i % 2 !== 0 && "bg-gray-300 border-y border-red-300"
              } text-xs py-2`}
            >
              {/* Flight */}
              <div className="w-[10%] flex flex-col items-center gap-1">
                {flight.itineraries[0].segments.map((item, i) => (
                  <h3 key={i} className="font-medium">
                    {item.carrierCode}
                    &nbsp;
                    {item.aircraft}
                  </h3>
                ))}
              </div>

              {/* Aircraft */}
              <div className="w-[10%] flex flex-col items-center gap-1">
                {flight.itineraries[0].segments.map((item, i) => (
                  <h3 key={i} className="font-medium">
                    {item.flightNumber}
                  </h3>
                ))}
              </div>

              {/* Class */}
              <div className="w-[10%] flex flex-col items-center gap-1">
                {flight.class[0].map((item, i) => (
                  <h3 key={i} className="font-medium">
                    {item}
                  </h3>
                ))}
              </div>

              {/* Fare */}
              <div className="w-[10%] flex flex-col items-center gap-1">
                {flight.fareBasis[0].map((item, i) => (
                  <h3 key={i} className="font-medium">
                    {item}
                  </h3>
                ))}
              </div>

              {/* Route */}
              <div className=" w-[10%]">
                {flight.itineraries[0].segments.map((item, i) => (
                  <div key={i} className="flex items-center justify-center">
                    <h3 className="font-medium">{item.departure.iataCode}</h3>
                    <span>&nbsp;-&nbsp;</span>
                    <h3 className="font-medium">{item.arrival.iataCode}</h3>
                  </div>
                ))}
              </div>

              {/* Departure */}
              <div className="w-[15%] flex flex-col items-center gap-1">
                {flight.itineraries[0].segments.map((item, i) => (
                  <h3 key={i} className="w-full font-medium text-center">
                    {item.departure.at}
                  </h3>
                ))}
              </div>

              {/* Arrival */}
              <div className="w-[15%] flex flex-col items-center gap-1">
                {flight.itineraries[0].segments.map((item, i) => (
                  <h3 key={i} className="w-full font-medium text-center">
                    {item.arrival.at}
                  </h3>
                ))}
              </div>

              {/* Duration */}
              <div className="w-[10%] flex flex-col items-center">
                <h3 className="font-medium">
                  {flight.itineraries[0].duration}
                </h3>
              </div>

              {/* Price */}
              <div className="w-[10%] flex flex-col items-center">
                <h3 className="font-medium">{flight.price}</h3>
                <button className=" uppercase text-white bg-indigo-800 px-5 rounded-md py-2 text-xs">
                  SELECT
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ResultsSection;
