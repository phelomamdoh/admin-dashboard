import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

const transactions = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Latest transactions</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Status</td>
            <td>Date</td>
            <td>Amount</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src={"/noavatar.png"}
                  alt=""
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                Phelo
              </div>
            </td>
            <td>
              <span className={`${styles.pending} ${styles.status}`}>
                Pending
              </span>
            </td>
            <td>14.2.24</td>
            <td>$3,200</td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src={"/noavatar.png"}
                  alt=""
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                Phelo
              </div>
            </td>
            <td>
              <span className={`${styles.done} ${styles.status}`}>Pending</span>
            </td>
            <td>14.2.24</td>
            <td>$3,200</td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src={"/noavatar.png"}
                  alt=""
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                Phelo
              </div>
            </td>
            <td>
              <span className={`${styles.cancelled} ${styles.status}`}>
                Pending
              </span>
            </td>
            <td>14.2.24</td>
            <td>$3,200</td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src={"/noavatar.png"}
                  alt=""
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                Phelo
              </div>
            </td>
            <td>
              <span className={`${styles.pending} ${styles.status}`}>
                Pending
              </span>
            </td>
            <td>14.2.24</td>
            <td>$3,200</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default transactions;
