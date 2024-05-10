import "./App.css";
import SearchSection from "./components/SearchSection";
import ResultsSection from "./components/ResultsSection";
import { useState } from "react";

function App() {
  const [isResult, setIsResult] = useState(false);
  return (
    <main className="max-w-screen min-w-screen flex flex-col items-center gap-7 pb-10">
      <h1 className="w-full text-2xl py-2 pl-5 text-start border-y-2 border-gray-200">
        Master Price
      </h1>

      {/* Search section start */}
      <SearchSection setIsResult={setIsResult} />
      {/* Search section end */}

      {/* After parsing data the result start */}
      {isResult && <ResultsSection />}
      {/* After parsing data the result end */}
    </main>
  );
}

export default App;
