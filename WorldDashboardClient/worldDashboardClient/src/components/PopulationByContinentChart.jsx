import React, { useEffect, useState } from "react";
import { getTotalPopulationByContinent } from "../api/Api";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

const COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#AF19FF",
  "#FF4560",
  "#00E396"
];

const PopulationByContinentChart = () => {

  const [data, setData] = useState([]);

  async function fetchData() {
    const res = await getTotalPopulationByContinent();

    const formatted = res.map(item => ({
      name: item.Continent,
      value: Number(item.total_population)
    }));

    setData(formatted);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="chart-card">

      <h2> Population By Continent</h2>

      <ResponsiveContainer width="100%" height={300}>
  <PieChart>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={130}
          label
        >
          {data.map((entry, index) => (
            <Cell
              key={index}
              fill={COLORS[index % COLORS.length]}
            />
          ))}
        </Pie>

        <Tooltip />
        <Legend />
      </PieChart>
      </ResponsiveContainer>

    </div>
  );
};

export default PopulationByContinentChart;