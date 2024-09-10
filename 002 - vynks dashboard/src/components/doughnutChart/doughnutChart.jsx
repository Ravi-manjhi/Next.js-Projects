"use client";

import { useRef, useEffect } from "react";
import { Chart } from "chart.js/auto";

import styles from "./doughnutChart.module.scss";

function DoughnutChart({ data }) {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      if (chartRef.current.chart) {
        chartRef.current.chart.destroy();
      }

      const context = chartRef.current.getContext("2d");

      const newChart = new Chart(context, {
        type: "doughnut",
        data,
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false,
            },
            tooltip: {
              enabled: true,
              boxWidth: 5,
              boxHeight: 5,
              boxPadding: 5,
            },
          },
          backgroundColor: ["#6E56CF", "#1D4A99"],
          borderColor: "#ffffff",
          borderWidth: 4,
          borderRadius: 6,
          rotation: 180,
          cutout: "85%",
        },
      });

      chartRef.current.chart = newChart;
    }
  }, [data]);
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h3>Summary</h3>
      </div>

      <div className={styles.chartContainer}>
        <div className={styles.chart}>
          <canvas ref={chartRef} />
        </div>

        <div className={styles.details}>
          <div className={styles.stats}>
            <h4>Active User</h4>
            <h3>87</h3>
            <p>
              <span>+8% </span>
              from yesterday
            </p>
          </div>

          <div className={styles.stats}>
            <h4>Inactive User</h4>
            <h3>30</h3>
            <p>
              <span>+5% </span>
              from yesterday
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DoughnutChart;
