"use client";

import React from "react";
import { Line } from "react-chartjs-2";
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const GraphingStation = () => {
  const data = {
    labels: ["January", "February", "March", "April"],
    datasets: [
      {
        label: "Sample Data",
        data: [65, 59, 80, 81],
        backgroundColor: "rgba(255 255 255 / 0.2)",
        borderColor: "rgba(255 255 255 / 0.8)",
        borderWidth: 2,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: "white",
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: "white",
        },
        grid: {
          color: "rgba(255 255 255 / 0.1)",
        },
      },
      y: {
        ticks: {
          color: "white",
        },
        grid: {
          color: "rgba(255 255 255 / 0.1)",
        },
      },
    },
  };

  return (
    <section className="bg-chart-bg rounded-lg p-6 max-w-4xl mx-auto min-h-chart border border-white/10">
      <h2 className="text-xl font-semibold mb-4 text-white">Graphing Station</h2>
      <div className="w-full h-128 relative">
        <Line 
          data={data} 
          options={{
            ...options,
            maintainAspectRatio: false,
            responsive: true,
          }} 
        />
      </div>
    </section>
  );
};

export default GraphingStation;
