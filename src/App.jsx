import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import dropdown from "./assets/images/icon-dropdown.svg";
import Hourly from "./components/Hourly";
import Day from "./components/Day";
import InfoBox from "./components/InfoBox";
import Daily from "./components/Daily";
import overcast from "./assets/images/icon-overcast.webp";
import sunny from "./assets/images/icon-sunny.webp";
import rain from "./assets/images/icon-rain.webp";
import drizzle from "./assets/images/icon-drizzle.webp";
import partlyCloud from "./assets/images/icon-partly-cloudy.webp";
import storm from "./assets/images/icon-storm.webp";
import snow from "./assets/images/icon-snow.webp";
import fog from "./assets/images/icon-fog.webp";
import { useCallback, useState } from "react";

export default function App() {
  const [isDayMenuOpen, setIsDayMenuOpen] = useState(false);
  const [dayBtnText, setDayBtnText] = useState("Tuesday");
  const handleDayMenu = useCallback(() => {
    setIsDayMenuOpen((prev) => !prev);
  }, []);
  return (
    <>
      <Header />
      <main className="pt-2 pb-6 px-4 md:px-8 lg:px-10">
        <h1 className="text-center text-4xl md:text-5xl font-grotesque mb-2 py-5 md:py-0">
          How's the sky looking today?
        </h1>
        <div className="flex flex-wrap md:flex-nowrap items-center justify-center gap-3 pt-6 md:pt-10 pb-5">
          <SearchBar />
          <button
            className="h-12 bg-blue500 font-light rounded-md px-6 w-full md:w-fit"
            type="button"
          >
            Search
          </button>
        </div>
        <section className="flex flex-wrap lg:flex-nowrap gap-6 font-light pt-4">
          <div className="flex-grow">
            <div className="w-full text-center md:text-start h-64 mb-6 bg-[url('./assets/images/bg-today-small.svg')] md:bg-[url('./assets/images/bg-today-large.svg')] bg-no-repeat bg-cover bg-center flex flex-wrap md:flex-nowrap items-center justify-between p-5 rounded-xl">
              <div className="w-full">
                <h2 className="text-3xl font-medium mb-1">Berlin, Germany</h2>
                <p className="text-lg text-neutral200">Tuesday, Aug 5, 2025</p>
              </div>
              <div className="flex items-center gap-4 w-full justify-center md:justify-end">
                <img className="w-32" src={sunny} alt="sun svg" />
                <h2 className="text-8xl font-semibold">68°</h2>
              </div>
            </div>
            <div className="flex justify-center md:justify-between gap-4 md:gap-6 mb-10 flex-wrap">
              <InfoBox title="Feels Like" value="64" unit="°" />
              <InfoBox title="Humidity" value="46" unit="%" />
              <InfoBox title="Wind" value="9" unit="mph" />
              <InfoBox title="Precipitation" value="0" unit="in" />
            </div>
            <div>
              <h2 className="mb-5 text-xl font-medium">Daily forecast</h2>
              <div className="flex flex-wrap justify-between gap-4">
                <Daily day="Tue" imageSrc={rain} infoa="68°" infob="57°" />
                <Daily day="Wed" imageSrc={drizzle} infoa="68°" infob="57°" />
                <Daily day="Thu" imageSrc={sunny} infoa="68°" infob="57°" />
                <Daily
                  day="Fri"
                  imageSrc={partlyCloud}
                  infoa="68°"
                  infob="57°"
                />
                <Daily day="Sat" imageSrc={storm} infoa="68°" infob="57°" />
                <Daily day="Sun" imageSrc={snow} infoa="68°" infob="57°" />
                <Daily day="Mon" imageSrc={fog} infoa="68°" infob="57°" />
              </div>
            </div>
          </div>
          <div className="w-full lg:w-96 h-fit bg-neutral800 rounded-xl py-4">
            <div className="flex items-center justify-between mb-3 px-4">
              <h2 className="font-medium text-xl">Hourly forecast</h2>
              <div className="relative">
                <button
                  onClick={handleDayMenu}
                  className="flex items-center justify-between gap-2 bg-neutral700 py-2 px-4 rounded-md"
                  type="button"
                >
                  <span>{dayBtnText}</span>
                  <img src={dropdown} alt="dropdown svg" />
                </button>
                <div
                  className={`bg-neutral800 w-56 p-2 rounded-lg border-[1px] border-neutral600 absolute right-0 top-12 z-10 ${
                    isDayMenuOpen ? "block" : "hidden"
                  }`}
                >
                  <Day
                    day="Monday"
                    setDayBtnText={setDayBtnText}
                    setIsDayMenuOpen={setIsDayMenuOpen}
                  />
                  <Day
                    day="Tuesday"
                    setDayBtnText={setDayBtnText}
                    setIsDayMenuOpen={setIsDayMenuOpen}
                  />
                  <Day
                    day="Wednesday"
                    setDayBtnText={setDayBtnText}
                    setIsDayMenuOpen={setIsDayMenuOpen}
                  />
                  <Day
                    day="Thursday"
                    setDayBtnText={setDayBtnText}
                    setIsDayMenuOpen={setIsDayMenuOpen}
                  />
                  <Day
                    day="Friday"
                    setDayBtnText={setDayBtnText}
                    setIsDayMenuOpen={setIsDayMenuOpen}
                  />
                  <Day
                    day="Saturday"
                    setDayBtnText={setDayBtnText}
                    setIsDayMenuOpen={setIsDayMenuOpen}
                  />
                  <Day
                    day="Sunday"
                    setDayBtnText={setDayBtnText}
                    setIsDayMenuOpen={setIsDayMenuOpen}
                  />
                </div>
              </div>
            </div>
            <div className="px-4 max-h-[562px] overflow-y-auto scrollbar-custom">
              <Hourly imgSrc={overcast} time="12 AM" temperature="68°" />
              <Hourly imgSrc={partlyCloud} time="1 AM" temperature="68°" />
              <Hourly imgSrc={sunny} time="2 AM" temperature="68°" />
              <Hourly imgSrc={overcast} time="3 AM" temperature="68°" />
              <Hourly imgSrc={snow} time="4 AM" temperature="68°" />
              <Hourly imgSrc={fog} time="5 AM" temperature="68°" />
              <Hourly imgSrc={snow} time="6 AM" temperature="68°" />
              <Hourly imgSrc={overcast} time="7 AM" temperature="68°" />
              <Hourly imgSrc={overcast} time="8 AM" temperature="68°" />
              <Hourly imgSrc={partlyCloud} time="9 AM" temperature="68°" />
              <Hourly imgSrc={sunny} time="10 AM" temperature="68°" />
              <Hourly imgSrc={overcast} time="11 AM" temperature="68°" />
              <Hourly imgSrc={snow} time="12 PM" temperature="68°" />
              <Hourly imgSrc={fog} time="1 PM" temperature="68°" />
              <Hourly imgSrc={snow} time="2 PM" temperature="68°" />
              <Hourly imgSrc={overcast} time="3 PM" temperature="68°" />
              <Hourly imgSrc={overcast} time="4 PM" temperature="68°" />
              <Hourly imgSrc={partlyCloud} time="5 PM" temperature="68°" />
              <Hourly imgSrc={sunny} time="6 PM" temperature="68°" />
              <Hourly imgSrc={overcast} time="7 PM" temperature="68°" />
              <Hourly imgSrc={snow} time="8 PM" temperature="68°" />
              <Hourly imgSrc={fog} time="9 PM" temperature="68°" />
              <Hourly imgSrc={snow} time="10 PM" temperature="68°" />
              <Hourly imgSrc={overcast} time="11 PM" temperature="68°" />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
