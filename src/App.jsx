import "./App.css";
import SearchSection from "./components/SearchSection";
import data from "../data/LHR_CDG_ADT1_TYPE_1.txt";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const gettingData = async () => {
      const fetchedData = await fetch(data);
      const res = await fetchedData.json();
      console.log(res);
    };
    gettingData();
  }, []);

  return (
    <main className="w-screen flex flex-col gap-7">
      <h1 className="text-2xl py-2 pl-5 border-2 border-gray-200">
        Master Price
      </h1>
      <SearchSection />
    </main>
  );
}

export default App;
