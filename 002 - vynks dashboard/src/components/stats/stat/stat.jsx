import Image from "next/image";
import styles from "./stat.module.scss";

const Stat = ({ data, title, icon }) => {
  return (
    <div className={styles.container}>
      <div className={styles.iconContainer}>
        <Image
          className={styles.icon}
          src={icon}
          alt="No of links"
          width={24}
          height={24}
        />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.title}>{title}</div>
        <div className={styles.value}>{data}</div>
      </div>
    </div>
  );
};

export default Stat;
