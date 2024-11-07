import React from "react";
import styles from "./Dashboard.module.css";

function StatCard({ icon, label, value }) {
  return (
    <div className={styles.statCard}>
      <img src={icon} alt={label} className={styles.statIcon} />
      <div className={styles.statDetail}>
        <div className={styles.statLabel}>{label}</div>
        <div className={styles.statValue}>{value}</div>
      </div>
    </div>
  );
}

export default StatCard;
