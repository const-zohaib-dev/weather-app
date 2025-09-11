export default function SuggestionBtn({city, country, setSearchQuery}) {
  const handleClick = () => {
    setSearchQuery(city)
  }
  return (
    <button
    onClick={handleClick}
      className="p-2 hover:bg-neutral700 rounded-md w-full text-left font-light border-[1px] border-transparent hover:border-neutral600 flex items-center justify-between"
      type="button"
    >
      <span>{city}</span>
      <span className="text-neutral300">{country}</span>
    </button>
  );
}
