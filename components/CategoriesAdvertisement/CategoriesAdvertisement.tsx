import React from "react";
import styles from "./CategoriesAdvertisement.module.css";
import CategoryList from "../../assets/CategoryList.jpg";
import Image from "next/image";
const CategoriesAdvertisement = () => {
  return (
    <div className={styles.Topcategories}>
      <div className={styles.Container}>
        <div className={styles.CategoryImage}>
          <Image src={CategoryList} alt=""></Image>
          <div className={styles.CategoryContent}>
            <h5 className={styles.CategoryTitle}>Categories</h5>
            <h1 className={styles.ExperienceTitle}>
              Enhance Your Music Experience
            </h1>
            <div className={styles.TimerDetailes}>
              <div className={styles.TimingContent}>
                <span className={styles.TimingCount}>23</span>
                <span className={styles.TimingName}>Hours</span>
              </div>
              <div className={styles.TimingContent}>
                <span className={styles.TimingCount}>05</span>
                <span className={styles.TimingName}>Days</span>
              </div>
              <div className={styles.TimingContent}>
                <span className={styles.TimingCount}>59</span>
                <span className={styles.TimingName}>Minutes</span>
              </div>
              <div className={styles.TimingContent}>
                <span className={styles.TimingCount}>35</span>
                <span className={styles.TimingName}>Seconds</span>
              </div>
            </div>
            <div className={styles.BuynowButton}>
              <button>Buy Now!</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoriesAdvertisement;
