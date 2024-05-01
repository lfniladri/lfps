import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

import { RoleDataBasedOnMonth } from "./data";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Role Analysis With Line Chart",
    },
  },
};

export default function LineChart() {
  const labels = RoleDataBasedOnMonth.label;
  const desired = RoleDataBasedOnMonth.desired;
  const total = RoleDataBasedOnMonth.total;
  const recommended = RoleDataBasedOnMonth.recommended;

  const data = {
    labels,
    datasets: [
      {
        label: "Desired",
        data: desired,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Total",
        data: total,
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
      {
        label: "Recommended",
        data: recommended,
        borderColor: "rgb(75, 192, 192)",
        backgroundColor: "rgb(75, 192, 192,0.5)",
      },
    ],
  };

  return <Line options={options} data={data} />;
}
