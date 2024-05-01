import React from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

export function RadarChart() {
  const labels = ["Apr", "Mar", "Feb", "Jan", "Dec", "Nov"];
  const desired = [100, 100, 100, 100, 80, 90];
  const total = [80, 90, 85, 75, 70, 80];
  const recommended = [5, 5, 8, 10, 10, 5];

  const data = {
    labels: labels,
    datasets: [
      {
        label: "# of Desired",
        data: desired,
        backgroundColor: "rgba(255, 99, 132, 0.3)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 2,
      },
      {
        label: "# of Total",
        data: total,
        backgroundColor: "rgba(75, 192, 192, 0.3)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 2,
      },
      {
        label: "# of Recommended",
        data: recommended,
        backgroundColor: "rgba(53, 162, 235, 0.3)",
        borderColor: "rgba(53, 162, 235, 1)",
        borderWidth: 2,
      },
    ],
  };

  return <Radar data={data} />;
}
