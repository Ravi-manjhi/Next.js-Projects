"use client";

import { useEffect, useRef } from "react";
import { Chart } from "chart.js/auto";
import Image from "next/image";
import Link from "next/link";

import styles from "./simpleLineChart.module.scss";

function SimpleLineChart({
  data,
  title,
  subtitle,
  percentage,
  isPositive = true,
}) {
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
              display: false,
              beginAtZero: true,
            },
            y: {
              display: false,
              beginAtZero: true,
            },
          },
          plugins: {
            tooltip: { enabled: false },
            legend: { display: false },
          },
          elements: {
            point: {
              borderColor: "#fff",
              backgroundColor: "#6E56CF",
              borderWidth: 1,
              hoverRadius: 4,
              radius: 4,
            },
            line: {
              borderColor: "#6E56CF",
              borderWidth: 1.3,
              tension: 0,
            },
          },
        },
      });

      chartRef.current.chart = newChart;
    }
  }, [data]);

  return (
    <div className={styles.container}>
      <div className={styles.containerCard}>
        <div className={styles.containerCardTitle}>
          <h4>{title}</h4>
          <Link href="/">
            <Image src="/vector.svg" alt="details" width={12} height={12} />
          </Link>
        </div>

        <div className={styles.containerCardInfo}>
          <h2 className={styles.containerCardInfoSubtitle}>{subtitle}</h2>
          <span className={`${isPositive ? styles.positive : styles.negative}`}>
            +{percentage}%
          </span>
        </div>
      </div>
      <div className={styles.containerChart}>
        <canvas ref={chartRef} />
      </div>
    </div>
  );
}

export default SimpleLineChart;
