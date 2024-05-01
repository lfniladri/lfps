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
import { Bar,Line } from "react-chartjs-2";
import { PeopleCount, RoleDataBasedOnMonth } from "./data";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export function HorizontalBarChartVar5() {
  const annotation1 = {
    type: "line",
    scaleID: "y",
    borderWidth: 3,
    borderColor: "black",
    value: 80,
    label: {
      content: "Line annotation at x=80",
      display: true,
    },
  };
  const options = {
    indexAxis: "y" as const,

    responsive: true,
    plugins: {
      legend: {
        position: "right" as const,
      },
      title: {
        display: true,
        text: "Chart.js Horizontal Bar Chart",
      },
      annotation: {
        annotations: {
          annotation1,
        },
      },
    },
  };

  const labels = PeopleCount.label;
  const current = PeopleCount.curent;
  const recommended = PeopleCount.recommended;
  const gap = PeopleCount.gap;

  const data = {
    labels,
    datasets: [
      {
        label: "Desired",
        data: [100],
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(18, 20, 129,0.7)",
        stack: "Stack 0",
      },
      {
        label: "Current",
        data: [120],
        borderColor: "rgb(117, 164, 12)",
        backgroundColor: "rgba(117, 164, 127,1)",
        stack: "Stack 1",
      },
      {
        label: "Recommended",
        data: [15],
        borderColor: "rgb(186, 205, 146)",
        backgroundColor: "rgb(186, 205, 146,1)",
        stack: "Stack 1",
      },
      {
        label: "Remaining",
        data: [-20],
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(196, 12, 12,1)",
        stack: "Stack 1",
      }
    ],
  };

  const chartBackground = {
    id: "chartBackground",
    beforeDataSetsDraw(chart: any, args: any, pluginOptions: any) {
      const {
        ctx,
        chartArea: { left, right, width, top, bottom, height },
      } = chart;
      ctx.save();
      ctx.strokeStyle = "pink";
      ctx.lineWidth = 5;
      ctx.beginPath();
      ctx.moveTo(left, top);
      ctx.lineTo(right, bottom);
      ctx.stroke();
      ctx.restore();
    },
  };

  return <Bar options={options} data={data} plugins={[chartBackground]} />;
}
