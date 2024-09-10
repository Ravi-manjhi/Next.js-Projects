"use client";

import { useEffect, useRef } from "react";
import { Chart } from "chart.js/auto";
import Dropdown from "../dropdown/dropdown";

import styles from "./lineChart.module.scss";

const LineChart = ({ title, subtitle, data, color, borderClr }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      if (chartRef.current.chart) {
        chartRef.current.chart.destroy();
      }

      const context = chartRef.current.getContext("2d");

      const newChart = new Chart(context, {
        type: "line",
        data,
        options: {
          legend: { display: false },
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            x: {
              grid: { display: false },
              beginAtZero: true,
            },
            y: {
              beginAtZero: true,
              max: 40,
              ticks: {
                stepSize: 10,
              },
            },
          },
          plugins: {
            tooltip: {
              enabled: true,
              boxWidth: 5,
              boxHeight: 5,
              boxPadding: 5,
            },
            legend: {
              display: false,
            },
          },
          elements: {
            point: {
              borderColor: borderClr,
              backgroundColor: borderClr,
              borderWidth: 1,
              hoverRadius: 4,
              radius: 3,
            },
            line: {
              borderColor: borderClr,
              borderWidth: 1.3,
              tension: 0.5,
              fill: "origin",
              backgroundColor: (context) => {
                const ctx = context.chart.ctx;
                const gradient = ctx.createLinearGradient(0, 0, 0, 200);
                gradient.addColorStop(0, "rgba(177, 133, 216, .6)");
                gradient.addColorStop(1, "rgba(244, 244, 244, .1");
                return gradient;
              },
            },
          },
        },
      });

      chartRef.current.chart = newChart;
    }
  }, [borderClr, data]);

  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.title}>{title}</h2>
        <Dropdown />
      </div>

      <div className={styles.chartContainer}>
        <canvas ref={chartRef} />
      </div>
      <div className={styles.titleContainer}>
        <span style={{ backgroundColor: color }}></span>
        <h3>{subtitle}</h3>
      </div>
    </div>
  );
};

export default LineChart;
