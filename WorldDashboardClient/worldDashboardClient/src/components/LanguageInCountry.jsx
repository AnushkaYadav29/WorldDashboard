import React, { useEffect, useState } from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { getLanguageSpokenInCountry } from "../api/Api";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const LanguageInCountry = () => {
  const [country, setCountry] = useState("");
  const [data, setData] = useState([]);

  const handleSearch = async () => {
    const res = await getLanguageSpokenInCountry(country);
    setData(res);
  };

  return (
    <div className="dashboard-card">
      <h2>Languages in Country</h2>

      <input
        placeholder="Enter country"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
      />

      <button onClick={handleSearch}>Search</button>

      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie data={data} dataKey="value" nameKey="language" outerRadius={90} label>
            {data.map((_, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LanguageInCountry;