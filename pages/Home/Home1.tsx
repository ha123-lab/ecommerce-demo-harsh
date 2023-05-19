import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import React from "react";
import styles from "./Home.module.css";
import Image from "next/image";
import AppleLogo from "../../assets/appleLogo.png";
import AppBackground from "../../assets/AppBackground.png";
import Link from "next/link";
import Categories from "@/components/Categories/Categories";
import BannerImage from "../../assets/BannerImage.jpg";
import FlashSales from "@/components/FlashSales/FlashSales";
import BestSellingProduct from "@/components/BestSellingProduct/BestSellingProduct";
import ExplreOurProduct from "@/components/ExploreOurProducts/ExploreOurProduct";
import CategoriesAdvertisement from "@/components/CategoriesAdvertisement/CategoriesAdvertisement";

const Home1 = () => {
  return (
    <>
      <Header />
      <div className={styles.Container}>
        <div className={styles.Sidebar}>
          <ul className={styles.List}>
            <li className={styles.Hello}>
              <a href="/Woman’s Fashion ">Woman’s Fashion </a>
            </li>

            <li className={styles.Men}>
              <a href=" Men’s Fashion"> Men’s Fashion </a>
            </li>
            <li className={styles.Men}>
              <a href=" Electronics">Electronics </a>
            </li>
            <li className={styles.Lifestyle}>
              <a href="Lifestyle">Home & Lifestyle </a>
            </li>
            <li className={styles.Lifestyle}>
              <a href="Medicine">Medicine</a>
            </li>
            <li className={styles.Sports}>
              <a href="Sports & Outdoor">Sports & Outdoor</a>
            </li>

            <li className={styles.Pets}>
              <a href="Baby’s & Toys">Baby’s & Toys</a>
            </li>

            <li className={styles.Pets}>
              <a href="Pets">Groceries & Pets</a>
            </li>
            <li className={styles.Beauty}>
              <a href="Beauty">Health & Beauty</a>
            </li>
          </ul>
        </div>
        <div className={styles.Background}>
          <div className={styles.content}>{/* Main content goes here */}</div>
        </div>
      </div>
      <FlashSales />
      <Categories />
      <BestSellingProduct />
      <CategoriesAdvertisement />
      <ExplreOurProduct />
      <Footer />
    </>
  );
};

export default Home1;
