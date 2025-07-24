import "./weatherDetails.css";
import tempMax from "../../../assets/bg-icons/temp-max.svg";

function WeatherDetails() {
  return (
    <div id="weather-details">
      <h2>Weather Details</h2>
      <div class="current-weather-details">
        <div class="current-weather-info">
          <p>Temp max</p>
          <span id="temp-max"></span>
          <img src={tempMax} alt="max temperature" />
        </div>
      </div>
    </div>
    //need to create other components with different icon, maybe with props..
  );
}

export default WeatherDetails;
