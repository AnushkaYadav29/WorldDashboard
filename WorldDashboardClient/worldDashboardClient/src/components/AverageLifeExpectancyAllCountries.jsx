import React, { useEffect, useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { getAveLifeExpectancyAllCountries } from "../api/Api";

const AverageLifeExpectancyAllCountries = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getAveLifeExpectancyAllCountries();
      setValue(res);
    };
    fetchData();
  }, []);

  const data = [
    { name: "Life Expectancy", value: value },
    { name: "Remaining", value: 100 - value },
  ];

  return (
    <div className="dashboard-card">
      <h2>Avg Life Expectancy</h2>

      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            innerRadius={60}
            outerRadius={90}
          >
            <Cell fill="#4CAF50" />
            <Cell fill="#eee" />
          </Pie>
        </PieChart>
      </ResponsiveContainer>

      <h1 style={{ textAlign: "center" }}>{value}</h1>
    </div>
  );
};

export default AverageLifeExpectancyAllCountries;