import { useCallback } from "react";

export default function Day({ day, setDayBtnText, setIsDayMenuOpen }) {
  const setBtnText = useCallback(() => {
    setDayBtnText(day);
    setIsDayMenuOpen(false);
  }, []);
  return (
    <button
      onClick={setBtnText}
      className="p-2 hover:bg-neutral700 rounded-md w-full text-left"
    >
      {day}
    </button>
  );
}
