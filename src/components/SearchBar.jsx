import { useState } from "react";
import search from "../assets/images/icon-search.svg";
import SuggestionBtn from "./SuggestionBtn";

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isWaiting, setIsWaiting] = useState(false);
  const [suggestionData, setSuggestionData] = useState([]);
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    if (!isWaiting) {
      fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${e.target.value.trim()}&count=5`
      )
        .then((res) => res.json())
        .then(({ results }) => {
          console.log(results);
          if (results) {
            setSuggestionData(results);
          }
        });
      setIsWaiting(true);

      setTimeout(() => {
        setIsWaiting(false);
      }, 100);
    }
  };
  return (
    <div className="flex items-center bg-neutral800 rounded-md h-12 pl-4 w-full md:w-[470px] relative">
      <img className="w-4" src={search} alt="search svg" />
      <input
        className="h-full flex-grow px-3 bg-transparent border-none outline-none font-sans font-light"
        type="text"
        placeholder="Search for a place..."
        value={searchQuery}
        onInput={handleSearch}
      />
      <div
        className={`w-full md:w-[470px] rounded-xl bg-neutral800 absolute left-0 top-14 space-y-2 p-2 ${
          searchQuery == "" ? "hidden" : "block"
        }`}
      >
        {suggestionData.map(({ name, country }) => (
          <SuggestionBtn
            city={name}
            country={country}
            setSearchQuery={setSearchQuery}
          />
        ))}
      </div>
    </div>
  );
}
