import React from "react";
import styles from "./Footer.module.css";
import Qrcode from "../../assets/Qcode.png";
import PlayIcon from "../../assets/Play Store Icon.png";
import AppIcon from "../../assets/App Store Icon.png";
import Image from "next/image";
const Footer = () => {
  return (
    <>
      <footer className={styles.Footer}>
        <div className={styles.container}>
          <div className={styles.FooterRow}>
            <div className={`${styles.FooterCol} ${styles.FooterCol1}`}>
              <h5 className={styles.FooterTitle}>Exclusive</h5>
              <div className={styles.sub}>
                <h6 className={styles.subscribetitle}>Subscribe</h6>
              </div>
              <span className={styles.discountFooter}>
                Get 10% off your first order
              </span>
              <div>
                <div className={styles.subscription}>
                  <input
                    type="text"
                    placeholder="Enter your email"
                    className={styles.Message}
                  />
                  <i className="fa fa-paper-plane" aria-hidden="true"></i>
                </div>
              </div>
            </div>
            <div className={`${styles.FooterCol} ${styles.FooterCol2} `}>
              <h5 className={styles.FooterTitle}>Support </h5>
              <address>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</address>
              <div className={styles.ContactLink}>
                <a href="mailto:harshsharma8595@gmail.com">
                  exclusive@gmail.com
                </a>

                <a href="tel:  +88015-88888-9999-456-7890">
                  {" "}
                  +88015-88888-9999
                </a>
              </div>
            </div>
            <div
              className={`${styles.FooterCol} ${styles.FooterCol3} ${styles.FooterTitle}`}
            >
              <h5 className={styles.FooterTitle}>Account</h5>
              <ul>
                <li>
                  <a href="My Account">My Account</a>
                </li>
                <li>
                  <a href="Register">Login / Register</a>
                </li>
                <li>
                  <a href="Cart">Cart</a>
                </li>
                <li>
                  <a href="Wishlist">Wishlist</a>
                </li>
                <li>
                  <a href="Shop">Shop</a>
                </li>
              </ul>
            </div>
            <div className={`${styles.FooterCol} ${styles.FooterCol4}`}>
              <h5 className={styles.FooterTitle}>Quick Link</h5>
              <ul>
                <li>
                  <a href="Policy">Privacy Policy</a>
                </li>
                <li>
                  <a href="Terms of Use">Terms Of Use</a>
                </li>
                <li>
                  <a href="FAQ">FAQ</a>
                </li>
                <li>
                  <a href="Contact">Contact</a>
                </li>
              </ul>
            </div>
            <div className={`${styles.FooterCol} ${styles.FooterCol5}`}>
              <h5 className={styles.FooterTitle}>Download App</h5>
              <div className={styles.FooterSave}>
                Save $3 with App New User Only
              </div>
              <div className={styles.FooterQrapplogo}>
                <div className={styles.Qrcode}>
                  <Image src={Qrcode} alt="xyz" />
                </div>
                <div className={styles.AppIconsColumn}>
                  <Image src={PlayIcon} alt="" className={styles.PlayIcon} />
                  <Image src={AppIcon} alt="" className={styles.AppIcon} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.FooterCopyRight}>
          <div className={styles.FooterCopyInfo}>
            © Copyright Rimel 2022. All right reserved
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
