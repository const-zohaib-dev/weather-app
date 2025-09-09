export default function Daily({ day, imageSrc, infoa, infob }) {
  return (
    <div className="bg-neutral800 border-[1px] border-neutral600 p-2 rounded-xl flex-grow">
      <h2 className="text-center text-xl">{day}</h2>
      <img className="w-16 my-4 mx-auto" src={imageSrc} alt="weather image" />
      <div className="flex items-center justify-between">
        <h2>{infoa}</h2>
        <h2 className="text-neutral200">{infob}</h2>
      </div>
    </div>
  );
}
