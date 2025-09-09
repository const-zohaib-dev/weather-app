import logo from "../assets/images/logo.svg";
import units from "../assets/images/icon-units.svg";
import dropdown from "../assets/images/icon-dropdown.svg";
import DropdownSection from "./DropdownSection";
import { useCallback, useState } from "react";

export default function Header() {
  const [dropdownData, setDropdownData] = useState([
    {
      tag: "Temperature",
      btns: [
        { text: "Celsius (°C)", isActive: true },
        { text: "Fahrenheit (°F)", isActive: false },
      ],
    },
    {
      tag: "Wind Speed",
      btns: [
        { text: "km/h", isActive: true },
        { text: "mph", isActive: false },
      ],
    },
    {
      tag: "Precipitation",
      btns: [
        { text: "Milimeters (mm)", isActive: true },
        { text: "Inches (in)", isActive: false },
      ],
    },
  ]);
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, [setIsOpen]);
  return (
    <header className="flex items-center justify-between h-20 md:h-24 px-4 md:px-8 lg:px-10 font-light">
      <img className="w-40 md:w-44" src={logo} alt="logo" />
      <div className="relative">
        <button
          onClick={toggleDropdown}
          className="flex items-center justify-between gap-2 bg-neutral800 py-2 px-4 rounded-md"
          type="button"
        >
          <img src={units} alt="units svg" />
          <span>Units</span>
          <img src={dropdown} alt="dropdown svg" />
        </button>
        <div
          className={`bg-neutral800 w-56 p-2 rounded-lg border-[1px] border-neutral600 absolute right-0 top-12 z-10 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <button className="dropdown-btn text-left" type="button">
            Switch to Imperial
          </button>
          {dropdownData.map((obj, index) => (
            <DropdownSection
              key={index}
              index={index}
              tag={obj.tag}
              btnsText={obj.btns}
              setDropdownData={setDropdownData}
            />
          ))}
        </div>
      </div>
    </header>
  );
}
