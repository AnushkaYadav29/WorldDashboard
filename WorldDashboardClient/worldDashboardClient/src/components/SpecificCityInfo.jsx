import React, { useState } from "react";

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { getSpecificCityinfo } from "../api/Api";

const SpecificCityInfo = () => {
  const [city, setCity] = useState("");
  const [info, setInfo] = useState(null);

  const handleSearch = async () => {
    const res = await getSpecificCityinfo(city);
    setInfo(res);
  };

  return (
    <div className="dashboard-card">
      <h2>City Information</h2>

      <input
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <button onClick={handleSearch}>Search</button>

      {info && (
        <>
          <p>{info.name} ({info.country})</p>

          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={[info]}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="population" fill="#ff7300" />
            </BarChart>
          </ResponsiveContainer>
        </>
      )}
    </div>
  );
};

export default SpecificCityInfo;