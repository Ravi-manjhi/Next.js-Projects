"use client";

import { useRef, useEffect, useState } from "react";
import { Chart } from "chart.js/auto";

import Dropdown from "../dropdown/dropdown";

import styles from "./barChart.module.scss";

export default function BarChart({ title, subtitle1, subtitle2, data }) {
  const chartRef = useRef(null);
  useEffect(() => {
    if (chartRef.current) {
      if (chartRef.current.chart) {
        chartRef.current.chart.destroy();
      }

      const context = chartRef.current.getContext("2d");

      const newChart = new Chart(context, {
        type: "bar",
        data: {
          labels: data.labels,
          datasets: [
            {
              ...data.datasets.at(0),
              backgroundColor: "#6E56CF",
              label: "Dataset 1",
            },
            {
              ...data.datasets.at(1),
              backgroundColor: "#8BA0C2",
              label: "Dataset 2",
            },
          ],
        },
        options: {
          legend: { display: false },
          responsive: true,
          maintainAspectRatio: false,

          barThickness: 18,
          maxBarThickness: 12,
          barPercentage: 1.0,

          scales: {
            x: {
              grid: { display: false },
            },
            y: {
              beginAtZero: true,
              max: 40,
              ticks: {
                stepSize: 11,
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
        },
      });

      chartRef.current.chart = newChart;
    }
  }, [data]);

  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.title}>{title}</h2>
        <Dropdown />
      </div>
      <div className={styles.chartContainer}>
        <canvas ref={chartRef}></canvas>
      </div>
      <div className={styles.titleContainer}>
        <div>
          <span
            className={styles.point}
            style={{ backgroundColor: "#6E56CF" }}
          ></span>
          <h3>{subtitle1}</h3>
        </div>

        <div>
          <span
            className={styles.point}
            style={{ backgroundColor: "#8BA0C2" }}
          ></span>
          <h3>{subtitle2}</h3>
        </div>
      </div>
    </div>
  );
}
