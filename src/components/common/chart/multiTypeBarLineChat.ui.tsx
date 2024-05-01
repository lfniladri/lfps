import React from "react";
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController,
} from "chart.js";
import { Chart } from "react-chartjs-2";
import { RoleDataBasedOnMonth } from "./data";

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController
);

export default function MultiTypeBarLineChart() {
  const labels = RoleDataBasedOnMonth.label;
  const desired = RoleDataBasedOnMonth.desired;
  const total = RoleDataBasedOnMonth.total;
  const recommended =RoleDataBasedOnMonth.recommended;
  const options = {
    plugins: {
      title: {
        display: true,
        text: "Role analysis With Multi Type Chart"
      },
    },
    responsive: true,
    interaction: {
      mode: "index" as const,
      intersect: true,
    },
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        type: "line" as const,
        label: "Desired",
        borderColor: "rgb(255, 99, 132)",
        borderWidth: 2,
        fill: false,
        data: desired,
      },
      {
        type: "bar" as const,
        label: "Total",
        backgroundColor: "rgb(75, 192, 192)",
        data: total,
        stack: "Stack 1",
      },
      {
        type: "bar" as const,
        label: "Recommended",
        backgroundColor: "rgb(53, 162, 235)",
        data: recommended,
        stack: "Stack 1",
      },
    ],
  };

  return <Chart options={options} type="bar" data={data} />;
}
