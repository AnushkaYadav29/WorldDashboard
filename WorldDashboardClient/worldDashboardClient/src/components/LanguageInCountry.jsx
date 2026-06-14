import React, { useState } from "react";
import { getLanguageSpokenInCountry } from "../api/Api";

const LanguageInCountry = () => {
  const [country, setCountry] = useState("");
  const [data, setData] = useState([]);

  const handleSearch = async () => {
    try {
      const res = await getLanguageSpokenInCountry(country);
      console.log(res);
      setData(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="analytics-card">

      <h2>Languages in Country</h2>

      <input
        placeholder="Enter country"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
      />

      <button onClick={handleSearch}>Search</button>

      <div className="language-list">

        {data.length === 0 ? (
          <p>No data found</p>
        ) : (
          data.map((item, index) => (
            <div className="language-item" key={index}>
              <span>{item.Language}</span>

              {/* if Percentage exists in DB */}
              <span>{item.Percentage}%</span>
            </div>
          ))
        )}

      </div>

    </div>
  );
};

export default LanguageInCountry;