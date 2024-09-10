import Stats from "@/components/stats/stats";
import LineChart from "@/components/lineChart/lineChart";
import PieChart from "@/components/doughnutChart/doughnutChart";
import Sidebar from "@/components/sidebar/Sidebar";
import BarChart from "@/components/barcharts/barchart";
import SimpleLineChart from "@/components/simpleLineChart/SimpleLineChart";

import { LineChartData } from "@/lib/data/lineCartData";
import { doughnutData } from "@/lib/data/doughnutChartData";
import { alertData } from "@/lib/data/alertAnalytics";
import { barData } from "@/lib/data/barchartData";
import { data1, data2, data3 } from "@/lib/data/simpleLineData";

import styles from "./page.module.scss";

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
              borderColor="#1D4A99"
            />

            <LineChart
              title="Alert Analytics"
              subtitle="Monthly Alert"
              data={alertData}
              color="#07E098"
              borderColor="#1D4A99"
            />

            <BarChart
              title="Geo Location Analytics"
              data={barData}
              subtitle1="Place 01"
              subtitle2="Place 02"
            />
          </div>
          <div className={styles.secondContainer}>
            <PieChart data={doughnutData} />
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
