import search from "../assets/images/icon-search.svg";

export default function SearchBar() {
  return (
    <div className="flex items-center bg-neutral800 rounded-md h-10 pl-4 w-96">
        <img className="w-4" src={search} alt="search svg" />
        <input className="h-full flex-grow pl-3 bg-transparent border-none outline-none font-sans font-light" type="text" placeholder="Search for a place..." />
    </div>
  )
}
