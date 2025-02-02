import AirIcon from "@mui/icons-material/Air";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import InvertColorsIcon from "@mui/icons-material/InvertColors";
import HighlightBox from "../../src/components/Highlightbox";
import VisibilityIcon from '@mui/icons-material/Visibility';
import CompressIcon from '@mui/icons-material/Compress';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';

const TodayHighlights = ({ weatherData, airQualityData }) => {
  const { main, wind, visibility, sys } = weatherData;
  const airQualityIndex = airQualityData?.main?.aqi;
  const { co, no, no2, o3 } = airQualityData?.components || {};

  const renderAirQualityDescription = (aqi) => {
    switch (aqi) {
      case 1:
        return "Good";
      case 2:
        return "Fair";
      case 3:
        return "Moderate";
      case 4:
        return "Poor";
      case 5:
        return "Very Poor";
      default:
        return "Unknown";
    }
  };

  const highlights = [
    { title: "Humidity", value: `${main.humidity}%`, Icon: InvertColorsIcon },
    {
      title: "Pressure",
      value: `${main.pressure} hPa`,
      Icon: CompressIcon,
    },
    {
      title: "Visibility",
      value: `${visibility / 1000} km`,
      Icon: VisibilityIcon,
    },
    {
      title: "Feels Like",
      value: `${main.feels_like}°C`,
      Icon: DeviceThermostatIcon,
    },
  ];

  return (
    <div className="bg-gray-700 text-white w-full max-w-5xl mx-auto rounded-lg p-6 flex flex-col gap-6">
      <h2 className="text-xl font-bold text-center">Today's Highlights</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Air Quality Index */}
        <div className="bg-gray-600 p-5 rounded-lg flex flex-col gap-4">
          <div className="flex justify-between items-center text-lg font-bold">
            <span>Air Quality Index</span>
            <span className={`px-3 py-1 rounded-lg text-sm font-semibold ${airQualityIndex === 1 ? 'bg-green-500' : airQualityIndex === 2 ? 'bg-yellow-500' : airQualityIndex === 3 ? 'bg-orange-500' : airQualityIndex === 4 ? 'bg-red-500' : 'bg-purple-500'}`}>
              {renderAirQualityDescription(airQualityIndex)}
            </span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <p className="font-bold">CO</p>
              <p>{co} µg/m³</p>
            </div>
            <div>
              <p className="font-bold">NO</p>
              <p>{no} µg/m³</p>
            </div>
            <div>
              <p className="font-bold">NO₂</p>
              <p>{no2} µg/m³</p>
            </div>
            <div>
              <p className="font-bold">O₃</p>
              <p>{o3} µg/m³</p>
            </div>
          </div>
        </div>

        {/* Sunrise and Sunset */}
        <div className="bg-gray-600 p-5 rounded-lg flex flex-col gap-4 text-center">
          <h3 className="text-lg font-bold">Sunrise and Sunset</h3>
          <div className="flex justify-around items-center">
            <div className="flex flex-col items-center">
              <WbSunnyIcon className="text-yellow-400 text-4xl" />
              <p>{new Date(sys.sunrise * 1000).toLocaleTimeString()}</p>
            </div>
            <div className="flex flex-col items-center">
              <NightsStayIcon className="text-blue-400 text-4xl" />
              <p>{new Date(sys.sunset * 1000).toLocaleTimeString()}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {highlights.map((highlight, index) => (
          <HighlightBox key={index} title={highlight.title} value={highlight.value} Icon={highlight.Icon} />
        ))}
      </div>
    </div>
  );
};

export default TodayHighlights;
