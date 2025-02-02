import React from "react";

const FiveDayForecast = ({ forecastData }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-GB", {
      day: "2-digit",
      month: "short",
    }).format(date);
  };

  return (
    <div className="bg-gray-700 text-white rounded-lg p-4 shadow-lg w-full max-w-md mx-auto">
      <h3 className="text-lg font-bold text-center mb-4">5-Day Forecast</h3>
      {forecastData.list.slice(0, 5).map((item, index) => (
        <div
          key={index}
          className="mb-2 flex justify-between items-center p-3 rounded-lg bg-gray-600 transition-transform transform hover:scale-105"
        >
          <div className="flex-1 text-center md:text-left">
            <div className="text-lg font-bold">{Math.round(item.main.temp)}°C</div>
          </div>
          <div className="flex-1 text-center">
            <div className="text-sm font-bold">{formatDate(item.dt_txt)}</div>
          </div>
          <div className="flex-1 text-right text-sm uppercase hidden sm:block">
            {item.weather[0].description}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FiveDayForecast;