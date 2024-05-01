import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export function BarChart() {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Role Analysis With Bar Chart"
      },
    },
  };

  const labels = ["Apr", "Mar", "Feb", "Jan", "Dec", "Nov"];
  const desired = [100, 100, 100, 100, 80, 90];
  const total = [80, 90, 85, 75, 70, 80];
  const recommended = [5, 5, 8, 10, 10, 5];

  const data = {
    labels,
    datasets: [
      {
        label: "Desired",
        data: desired,
        backgroundColor: "rgba(255, 99, 132, 0.7)",
      },
      {
        label: "Total",
        data: total,
        backgroundColor: "rgba(75, 192, 192,0.7)",
      },
      {
        label: "Recommended",
        data: recommended,
        backgroundColor: "rgba(53, 162, 235,0.7)",
      },
    ],
  };
  return <Bar options={options} data={data} />;
}
