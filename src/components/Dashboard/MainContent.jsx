import React from "react";
import styles from "./Dashboard.module.css";
import StatCard from "./StatCard";
import AverageRating from "./AverageRating";
import RatingBreakdown from "./RatingBreakdown";
import TopReviewedFood from "./TopReviewedFood";
import AverageRatingByLocation from "./AverageRatingByLocation";

function MainContent() {
  return (
    <main className={styles.mainContent}>
      <header className={styles.header}>
      <h2 className="self-stretch my-auto text-2xl font-bold text-black">Dashboard</h2>
      </header>
      <section className={styles.statsSection}>
        <StatCard
          icon="https://cdn-icons-png.flaticon.com/512/149/149071.png" // User Icon
          label="Total Reviews"
          value="5,593,00"
        />
        <StatCard
          icon="https://cdn-icons-png.flaticon.com/512/1046/1046784.png" // Food Icon
          label="Total Foods"
          value="5,593,00"
        />
      </section>
      <section className={styles.chartsSection}>
        <AverageRating />
        <RatingBreakdown />
        <TopReviewedFood />
      </section>
      <AverageRatingByLocation />
    </main>
  );
}

export default MainContent;
