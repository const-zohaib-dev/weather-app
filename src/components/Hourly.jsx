export default function Hourly({ imgSrc, time, temperature }) {
  return (
    <div className="hourly w-full py-1 px-3 bg-neutral700 rounded-md flex items-center gap-2 mb-[14px] border-[1px] border-neutral600">
      <img className="w-12" src={imgSrc} alt="cloud sun image" />
      <h2 className="flex-grow font-medium">{time}</h2>
      <h3 className="text-sm">{temperature}</h3>
    </div>
  );
}
