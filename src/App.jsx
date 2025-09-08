import Header from "./components/Header";
import SearchBar from "./components/SearchBar";

export default function App() {
  return (
    <>
      <Header />
      <h1 className="text-center text-4xl font-grotesque">How's the sky looking today?</h1>
      <div className="flex items-center justify-center gap-3 py-5">
        <SearchBar />
        <button className="h-10 bg-blue500 font-light rounded-md px-5" type="button">Search</button>
      </div>
    </>
  );
}
