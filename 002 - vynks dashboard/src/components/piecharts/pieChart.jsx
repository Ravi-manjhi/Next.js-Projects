"use client";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import styles from "./pieChart.module.scss";

ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
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
};

function PieChart({ data }) {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h3>Summary</h3>
      </div>

      <div className={styles.chartContainer}>
        <div className={styles.chart}>
          <Doughnut data={data} options={options} />
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

export default PieChart;
