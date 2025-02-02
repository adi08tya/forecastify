import { GpsFixedOutlined } from "@mui/icons-material";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import logo from "../assets/forecastify.svg"
const Navbar = ({ onSearch }) => {
  const [searchCity, setSearchCity] = useState('');

  const handleSearchClick = () => {
    if (searchCity.trim()) {
      onSearch(searchCity);
    }
  };

  return (
    <nav className="flex flex-col sm:flex-row items-center justify-between mt-2.5 p-4 px-7 bg-gray-800 text-white">
      <div className="flex items-center gap-2 mb-2 sm:mb-0">
        <img src={logo} alt="Forecastify Logo" className="h-8 w-8" />
        <p className="font-semibold text-xl">Forecastify</p>
      </div>
      <div className="flex items-center gap-2 w-full sm:w-auto">
        <TextField 
          className="bg-white rounded-md w-full sm:w-64"
          placeholder="Search City"
          variant="outlined"
          value={searchCity}
          onChange={(e) => setSearchCity(e.target.value)}
        />
        <Button
          variant="contained"
          className="bg-green-600 text-white px-4 py-2 rounded-md"
          onClick={handleSearchClick}
        >
          Search
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;