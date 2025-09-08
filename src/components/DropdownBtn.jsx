import checkmark from "../assets/images/icon-checkmark.svg";

export default function DropdownBtn({ text, isActive, tag, setDropdownData }) {
  const handleBtnActive = () => {
    setDropdownData((prev) =>
      prev.map((obj) => {
        if (obj.tag === tag) {
          return {
            ...obj,
            btns: obj.btns.map((btn) => {
              return {
                ...btn,
                isActive: !btn.isActive,
              };
            }),
          };
        }
        return obj;
      })
    );
  };
  return (
    <button
      onClick={handleBtnActive}
      className={`dropdown-btn mb-1 ${isActive ? "bg-neutral700" : ""}`}
      type="button"
    >
      <span>{text}</span>
      <img
        className={`${isActive ? "opacity-100" : "opacity-0"}`}
        src={checkmark}
        alt="checkmark svg"
      />
    </button>
  );
}
