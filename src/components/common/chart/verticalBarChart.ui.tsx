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
  title: string | undefined;
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
    yAxes: [
      {
        ticks: {
          stepSize: 50,
          beginAtZero: true,
        },
      },
    ],
  };

  const labels = ["LKG", "UKG", "1St", "2nd", "3rd", "4th"];
  const totalAmount = [100, 110, 100, 125, 80, 90];
  const paid = [80, 90, 85, 85, 80, 0];
  const due = [20, 20, 15, 40, 0, 90];
  const data = {
    labels,
    datasets: [
      {
        label: "Total Amount",
        data: totalAmount,
        backgroundColor: "rgba(7,65,115,0.8)",
        stack: "Stack 0",
        borderRadius: 6,
      },
      {
        label: "Paid",
        data: paid,
        backgroundColor: "rgb(13,110,253,0.8)",
        stack: "Stack 1",
        borderRadius: 6,
      },
      {
        label: "Due",
        data: due,
        backgroundColor: "rgba(220,53,69,0.8)",
        stack: "Stack 1",
        borderRadius: 6,
      },
    ],
  };
  return <Bar options={options} data={data} />;
}
