import Stat from "./stat/stat";
import styles from "./stats.module.scss";

const Stats = () => {
  return (
    <div className={styles.container}>
      <Stat title="No. of Links" data="50" icon="/folder.svg" />
      <Stat title="Total User" data="40" icon="/totalUsers.svg" />
      <Stat title="Link Groups" data="12" icon="/clipboard.svg" />
      <Stat title="Target Emails" data="24" icon="/target-emails.svg" />
      <Stat title="Target Phones" data="85" icon="/target-emails.svg" />
    </div>
  );
};

export default Stats;
