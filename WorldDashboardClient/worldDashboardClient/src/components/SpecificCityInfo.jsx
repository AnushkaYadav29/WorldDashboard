import React, { useState } from "react";
import { getSpecificCityinfo } from "../api/Api";

const SpecificCityInfo = () => {
  const [city, setCity] = useState("");
  const [info, setInfo] = useState(null);

  const handleSearch = async () => {
  console.log("button clicked");

  try {
    const res = await getSpecificCityinfo(city);

    console.log("API response:", res);

    setInfo(res);
  } catch (error) {
    console.log(error);
  }
};

  return (
    <div className="analytics-card">

      <h2>City Information</h2>

      <input
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <button onClick={handleSearch}>Search</button>

      {info && (
        <div className="city-info-card">

          <h3>{info.Name}</h3>

          <p>
            <strong>Country Code:</strong> {info.CountryCode}
          </p>

          <p>
            <strong>District:</strong> {info.District}
          </p>

          <p>
            <strong>Population:</strong> {info.Population.toLocaleString()}
          </p>

        </div>
      )}

    </div>
  );
};

export default SpecificCityInfo;