import React from "react";
import styles from "./Header.module.css";
import Exclusive from "../../assets/Logo.svg";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <header>
        <div className={styles.DsiscountBanner}>
          <div className={styles.BannerInfo}>
            <h6 className={styles.DiscountText}>
              Summer Sale For All Swim Suits And Free Express Delivery - OFF
              50%!
              <a href="#" className={styles.HeaderShopnow}>
                Shop Now
              </a>
            </h6>
            <div className={styles.LanguageSelectorWrapper}>
              <select
                className={`form-select ${styles.LanguageSelector}`}
                aria-label="Default select example"
              >
                <option selected>English</option>
                <option value="1">Hindi</option>
                <option value="2">Gujarati</option>
              </select>
            </div>
          </div>
        </div>
        <nav className={styles.navbar}>
          <div className={styles.container}>
            <div className={styles.row}>
              <div className={styles.Logo}>
                <Image src={Exclusive} alt="" />
              </div>
              <div className={styles.navigation}>
                <ul className={styles.navigationList}>
                  <li>
                    {" "}
                    <a href="o" className={styles.HeaderHome}>
                      {" "}
                      HOME
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href="contact" className={styles.HeaderContact}>
                      Contact{" "}
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href="About" className={styles.HeaderAbout}>
                      About{" "}
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href="/" className={styles.HeaderSignUp}>
                      Sign Up{" "}
                    </a>
                  </li>
                </ul>
              </div>
              <div className={styles.searchbar}>
                <input
                  className={styles.Searchbar}
                  type="search"
                  placeholder="What are you looking for?"
                ></input>
                <button
                  className={`btn btn-outline-success ${styles.SearchButton}`}
                  type="submit"
                >
                  <i className="fa fa-search" aria-hidden="true"></i>
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
