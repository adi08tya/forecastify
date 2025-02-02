import "../src/App.css";
import Navbar from "../src/components/Navbar";
import MainWeatherCard from "./components/MainWeatherCard";
import FiveDayForecast from "../src/components/FiveDayForecast";
import TodayHighlights from "../src/components/TodayHighlights";
import { useEffect, useState } from "react";

function App() {
  const [weatherdata, setweatherdata] = useState(null);
  const [city, setcity] = useState("Indore");
  const [airQualityData, setAirQualityData] = useState(null);
  const [fiveDayForecast, setFiveDayForecast] = useState(null);

  useEffect(() => {
    fetchweatherData(city);
  }, [city]);

  async function fetchAirQualityData(lat, lon) {
    const Api_key = "284b1d84fbc9ee660788941e5702c773";
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${Api_key}`
      );
      const data = await response.json();
      console.log(data);
      setAirQualityData(data.list[0]);
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchweatherData() {
    const Api_key = "284b1d84fbc9ee660788941e5702c773";
    try {
      // Fetch current weather data
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${Api_key}`
      );
      const data = await response.json();
      console.log(data);
      setweatherdata(data);

      // Fetch air quality data
      fetchAirQualityData(data.coord.lat, data.coord.lon);

      // Fetch 5-day forecast data
      const forecastResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${Api_key}`
      );
      const forecastData = await forecastResponse.json();
      console.log(forecastData);
      setFiveDayForecast(forecastData);
    } catch (error) {
      console.log(error);
    }
  }

  const handleSearch = (searchedCity) => {
    setcity(searchedCity);
  };

  return (
    <>
      <div>
        <Navbar onSearch={handleSearch} />
      </div>
      {weatherdata && (
        <div className="flex flex-col lg:flex-row p-8 gap-5">
          <div className="lg:w-1/3">
            <MainWeatherCard weatherdata={weatherdata} />
            <p className="font-bold text-xl mt-5">5 Days Forecast</p>
            {fiveDayForecast && <FiveDayForecast forecastData={fiveDayForecast} />}
          </div>
          <div className="lg:w-2/3 flex flex-col gap-5">
            <TodayHighlights weatherData={weatherdata} airQualityData={airQualityData} />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
