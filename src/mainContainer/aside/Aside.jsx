import "./Aside";
import SearchForm from "./searchForm/SearchForm";
import WeatherDetails from "./weatherDetails/WeatherDetails";
import LongTermWeatherDetails from "./longTermWeatherDetails/LongTermWeatherDetails";

function Aside() {
  return (
    <aside>
      <SearchForm />
      <WeatherDetails />
      <LongTermWeatherDetails />
    </aside>
  );
}

export default Aside;
