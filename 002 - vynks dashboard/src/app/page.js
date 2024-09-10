import Stats from "@/components/stats/stats";
import Sidebar from "@/components/sidebar/Sidebar";
import LineChart from "@/components/lineChart/lineChart";

import styles from "./page.module.scss";
import { LineChartData } from "@/lib/data/lineCartData";
import { alertData } from "@/lib/data/alertAnalytics";
import BarChart from "@/components/barcharts/barchart";
import { barData } from "@/lib/data/barchartData";
import DoughnutChart from "@/components/doughnutChart/doughnutChart";
import { doughnutData } from "@/lib/data/doughnutChartData";
import SimpleLineChart from "@/components/simpleLineChart/SimpleLineChart";
import { data1, data2, data3 } from "@/lib/data/simpleLineData";

function Home() {
  return (
    <div className={styles.main}>
      <div className={styles.sidebar}>
        <Sidebar />
      </div>

      {/* dashboard components */}
      <div className={styles.mainContainer}>
        <div className={styles.statContainer}>
          <Stats />
        </div>

        {/* first chart components */}
        <div className={styles.ChartContainer}>
          <div className={styles.firstContainer}>
            <LineChart
              title="Scan Analytics"
              subtitle="Monthly Scan"
              data={LineChartData}
              color="#6E56CF"
              borderClr="#1D4A99"
              lineChartId="scan_Analytics"
            />

            <LineChart
              title="Alert Analytics"
              subtitle="Monthly Alert"
              data={alertData}
              color="#07E098"
              borderClr="#1D4A99"
              lineChartId="alert_Analytics"
            />

            <BarChart
              title="Geo Location Analytics"
              data={barData}
              subtitle1="Place 01"
              subtitle2="Place 02"
            />
          </div>
          <div className={styles.secondContainer}>
            <DoughnutChart data={doughnutData} />

            <div className={styles.containerSummary_2}>
              <h2 className={styles.title}>Summary</h2>

              <SimpleLineChart
                data={data1}
                title="Average Daily Scanned QR Codes"
                subtitle="420"
                percentage={8}
                isPositive={true}
              />

              <SimpleLineChart
                data={data2}
                title="Average Time Spend"
                subtitle="2 Mint"
                percentage={8}
                isPositive={false}
              />

              <SimpleLineChart
                data={data3}
                title="Unprocessed Scanned QR Codes"
                subtitle="20.42 %"
                percentage={6}
                isPositive={false}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
