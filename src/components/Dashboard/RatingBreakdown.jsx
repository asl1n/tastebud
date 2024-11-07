import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";
import styles from "./RatingBreakdown.module.css";

const reviewData = [
  { month: "Jan", reviews: 10 },
  { month: "Feb", reviews: 20 },
  { month: "Mar", reviews: 30 },
  { month: "Apr", reviews: 40 },
  { month: "May", reviews: 50 },
  { month: "Jun", reviews: 40 },
];

function RatingBreakdown() {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>Rating and Review Breakdown</h3>
      <div className={styles.chartContainer}>
        <ResponsiveContainer width="95%" height={300}>
          <BarChart
            data={reviewData}
            barSize={37} 
            margin={{ top: 20, right: 20, left: 20, bottom: 20 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis ticks={[0, 20, 40, 60]} domain={[0, 60]} />
            <Bar dataKey="reviews" fill="#3A72A7" radius={[5, 5, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default RatingBreakdown;
