import DropdownBtn from "./DropdownBtn";

export default function DropdownSection({
  index,
  tag,
  btnsText,
  setDropdownData,
}) {
  return (
    <div
      className={`pt-2 ${
        index === 2 ? "" : "border-b-[1px] border-neutral600"
      }`}
    >
      <p className="tag">{tag}</p>
      {btnsText.map((obj, index) => (
        <DropdownBtn
          key={index}
          text={obj.text}
          isActive={obj.isActive}
          tag={tag}
          setDropdownData={setDropdownData}
        />
      ))}
    </div>
  );
}
