import React from "react";
import Card from "../ui/dashboard/card/card";
import Rightbar from "../ui/dashboard/rightbar/rightbar";
import Transactions from "../ui/dashboard/transactions/transactions";
import Charts from "../ui/dashboard/chart/chart";
import styles from "../ui/dashboard/dashboard.module.css";

function Dashboard() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.cards}>
          <Card />
          <Card />
          <Card />
        </div>
        <Transactions />
        <Charts />
      </div>
      <div className={styles.side}>
        <Rightbar />
      </div>
    </div>
  );
}

export default Dashboard;
