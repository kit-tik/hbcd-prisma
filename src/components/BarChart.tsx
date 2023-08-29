"use client";
import { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
} from "chart.js";
import { Bar, Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function RPie({ className, data, chType, title}: {className: string, data:any, chType:string, title:string}) {
  console.log("chartType", chType, chType==="Bar")

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: `${title? title: chType=="Bar"? "Bar Chart": "Line Chart"}` 
      },
    },
    //   maintainAspectRatio: false,
  };

  return (
    <div className="xl:w-[450px] m-4">
      {chType === "Bar" ? (
        // @ts-ignore
        <Bar options={options} data={data} className={className} />
      ) : (
        // @ts-ignore
        <Line options={options} data={data} className={className} />
      )}
    </div>
  );
}
