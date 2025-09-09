export default function InfoBox({ title, value, unit }) {
  return (
    <div className="flex-grow-0 w-[47%] md:w-fit md:flex-grow bg-neutral800 border-[1px] border-neutral600 px-5 py-3 rounded-xl">
      <h2 className="mb-6 text-xl text-neutral200">{title}</h2>
      <h2 className="text-3xl md:text-4xl">
        <span>{value}</span>
        <span>{unit}</span>
      </h2>
    </div>
  );
}
