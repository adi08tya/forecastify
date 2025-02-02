import { AcUnit, CalendarMonth, Cloud, LocationOn, WbSunny } from "@mui/icons-material";
import React from "react";

const MainWeatherCard = ({ weatherdata }) => {
  const temperatureCelsius = weatherdata?.main?.temp || "N/A";
  const weatherDescription = weatherdata?.weather?.[0]?.description || "N/A";
  const cityName = weatherdata?.name || "City not Available";
  const countryname = weatherdata?.sys?.country || "Country not Available";
  const timestamp = weatherdata?.dt || null;
  const currentDate = timestamp
    ? new Date(timestamp * 1000).toLocaleString("en-US", {
        weekday: "long",
        day: "numeric",
        month: "short",
      })
    : "Date not available";
  
  const renderTemperatureIcon = () => {
    if (temperatureCelsius > 23) {
      return <WbSunny className="ml-2 text-5xl text-orange-500" />;
    } else if (temperatureCelsius < 10) {
      return <AcUnit className="ml-2 text-5xl text-blue-500" />;
    } else {
      return <Cloud className="ml-2 text-5xl text-gray-400" />;
    }
  };

  return (
    <div className="bg-gray-700 rounded-xl text-white w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl p-6 flex flex-col items-center gap-4 text-center mx-auto">
      <div className="text-xl flex items-center gap-2">
        <LocationOn className="text-red-500" />
        {cityName}, {countryname}
      </div>
      <div className="flex items-center text-3xl font-bold">
        {temperatureCelsius}&deg;C {renderTemperatureIcon()}
      </div>
      <div className="text-lg mt-2 font-medium uppercase">
        {weatherDescription}
      </div>
      <div className="mt-1 flex items-center gap-2 text-md">
        <CalendarMonth className="text-yellow-400" />
        {currentDate}
      </div>
    </div>
  );
};

export default MainWeatherCard;
