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

type VerticalBarChartType = {
  legendPosition: "top" | "bottom";
  title: string|undefined;
};

export function VerticalBarChart({
  legendPosition = "top",
  title,
}: VerticalBarChartType) {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position:
          legendPosition == "top" ? ("top" as const) : ("bottom" as const),
      },
      title: {
        display: true,
        text: title,
      },
    },
  };

  const labels = ["Nov", "Dec", "Jan", "Feb", "Mar", "Apr"];
  const desired = [100, 110, 100, 125, 80, 90];
  const total = [80, 90, 85, 85, 120, 80];
  const recommended = [5, 20, 8, 20, 0, 5];
  const gap = [15, 0, 7, 20, 0, 5];
  const data = {
    labels,
    datasets: [
      {
        label: "Desired",
        data: desired,
        backgroundColor: "rgba(7,65,115,0.8)",
        stack: "Stack 0",
        borderRadius: 6,
      },
      {
        label: "Total",
        data: total,
        backgroundColor: "rgb(13,110,253,0.8)",
        stack: "Stack 1",
        borderRadius: 6,
      },
      {
        label: "Available",
        data: recommended,
        backgroundColor: "rgba(13,202,240,0.8)",
        stack: "Stack 1",
        borderRadius: 6,
      },
      {
        label: "Gap",
        data: gap,
        backgroundColor: "rgba(220,53,69,0.8)",
        stack: "Stack 1",
        borderRadius: 6,
      },
    ],
  };
  return <Bar options={options} data={data} />;
}
