import React from 'react'
import styles from './BestSellingProduct.module.css'
import GamePad from '../../assets/Gamepad.png'
import Tv from '../../assets/Tv.png'
import Keyboard from '../../assets/KeyBoard.png'
import chair from '../../assets/chair.png'
import Image from 'next/image';
const BestSellingProduct = () => {
  return (
    <div className={styles.FlashSalesProducts}>
        <div className={styles.Container}>
            <div className={styles.TitleDetailes}>
                <h6 className={styles.Subtile}>This Month</h6>
                <h2 className={styles.ProductTitle}>Best Selling Products</h2>
            </div>
            <div className={styles.Row}>
                <div className={styles.ProductCard}>
                    <div className={styles.ProductThumbnail}>
                         <Image src={chair} alt ="" className={styles.ProductImage}></Image>
                         <div className={styles.DiscountIcon}>
                               <span>-40%</span> 
                         </div>
                         <div className={styles.HeartViewIcon}>
                              <a href='#' className={styles.HeartIcon}><i className="fa-regular fa-heart"></i></a> 
                              <a href='#' className={styles.ViewIcon}><i className="fa-regular fa-eye"></i></a> 
                         </div>
                         <div className={styles.AddtocartButton}>
                            <button type="button" className={`btn btn-dark ${styles.CartButton}`}>Add To Cart</button>
                         </div>
                    </div>
                    <div className={styles.ProductDetailes}>
                        <h5 className={styles.ProductName}>
                            <a href='#'>HAVIT HV-G92 Gamepad</a>
                        </h5>
                        <div className={styles.ProductPrice}>
                            <span className={styles.Saleprice}>$120</span>
                            <span className={styles.ProductBaseprice}>$160</span>
                        </div>
                        <div className={styles.ProductReview}>
                             <span className={`fa fa-star  ${styles.checked}`}></span>
                            <span className={`fa fa-star  ${styles.checked}`}></span>
                            <span className={`fa fa-star  ${styles.checked}`}></span>
                            <span className={`fa fa-star  ${styles.checked}`}></span>
                            <span className={`fa fa-star  ${styles.checked}`}></span>
                            <div className={styles.ReviewCounter}>
                                <span>(88)</span>
                            </div>
                        </div>
                        
                    </div>
                        
                </div>
                <div className={styles.ProductCard}>
                    <div className={styles.ProductThumbnail}>
                        <Image src={GamePad} alt ="" className={styles.ProductImage}></Image>
                        
                        <div className={styles.DiscountIcon}>
                               <span>-40%</span> 
                         </div>
                         <div className={styles.HeartViewIcon}>
                              <a href='#' className={styles.HeartIcon}><i className="fa-regular fa-heart"></i></a> 
                              <a href='#' className={styles.ViewIcon}><i className="fa-regular fa-eye"></i></a> 
                         </div>
                         <div className={styles.AddtocartButton}>
                            <button type="button" className={`btn btn-dark ${styles.CartButton}`}>Add To Cart</button>
                         </div>
                    </div>
                    <div className={styles.ProductDetailes}>
                        <h5 className={styles.ProductName}>
                            <a href='#'>AK-900 Wired Keyboard</a>
                        </h5>
                        <div className={styles.ProductPrice}>
                            <span className={styles.Saleprice}>$120</span>
                            <span className={styles.ProductBaseprice}>$160</span>
                        </div>
                        <div className={styles.ProductReview}>
                             <span className={`fa fa-star  ${styles.checked}`}></span>
                            <span className={`fa fa-star  ${styles.checked}`}></span>
                            <span className={`fa fa-star  ${styles.checked}`}></span>
                            <span className={`fa fa-star  ${styles.checked}`}></span>
                            <span className={`fa fa-star  ${styles.checked}`}></span>
                            
                            <div className={styles.ReviewCounter}>
                                <span>(88)</span>
                            </div>
                        </div>
                    </div>
                        
                </div>
                <div className={styles.ProductCard}>
                    <div className={styles.ProductThumbnail}>
                    <Image src={Tv} alt ="" className={styles.ProductImage}></Image>
                    
                    <div className={styles.DiscountIcon}>
                               <span>-40%</span> 
                         </div>
                         <div className={styles.HeartViewIcon}>
                              <a href='#' className={styles.HeartIcon}><i className="fa-regular fa-heart"></i></a> 
                              <a href='#' className={styles.ViewIcon}><i className="fa-regular fa-eye"></i></a> 
                         </div>
                         <div className={styles.AddtocartButton}>
                            <button type="button" className={`btn btn-dark ${styles.CartButton}`}>Add To Cart</button>
                         </div>
                    </div>
                    <div className={styles.ProductDetailes}>
                        <h5 className={styles.ProductName}>
                            <a href='#'>IPS LCD Gaming Monitor</a>
                        </h5>
                        <div className={styles.ProductPrice}>
                            <span className={styles.Saleprice}>$120</span>
                            <span className={styles.ProductBaseprice}>$160</span>
                        </div>
                        <div className={styles.ProductReview}>
                             <span className={`fa fa-star  ${styles.checked}`}></span>
                            <span className={`fa fa-star  ${styles.checked}`}></span>
                            <span className={`fa fa-star  ${styles.checked}`}></span>
                            <span className={`fa fa-star  ${styles.checked}`}></span>
                            <span className={`fa fa-star  ${styles.checked}`}></span>
                            
                            <div className={styles.ReviewCounter}>
                                <span>(88)</span>
                            </div>
                        </div>
                    </div>
                        
                </div>
                <div className={styles.ProductCard}>
                    <div className={styles.ProductThumbnail}>
                    <Image src={Keyboard} alt ="" className={styles.ProductImage}></Image>
                    
                    <div className={styles.DiscountIcon}>
                               <span>-40%</span> 
                         </div>
                         <div className={styles.HeartViewIcon}>
                              <a href='#' className={styles.HeartIcon}><i className="fa-regular fa-heart"></i></a> 
                              <a href='#' className={styles.ViewIcon}><i className="fa-regular fa-eye"></i></a> 
                         </div>
                         <div className={styles.AddtocartButton}>
                            <button type="button" className={`btn btn-dark ${styles.CartButton}`}>Add To Cart</button>
                         </div>
                    </div>
                    <div className={styles.ProductDetailes}>
                        <h5 className={styles.ProductName}>
                            <a href='#'>S-Series Comfort Chair </a>
                        </h5>
                        <div className={styles.ProductPrice}>
                            <span className={styles.Saleprice}>$120</span>
                            <span className={styles.ProductBaseprice}>$160</span>
                        </div>
                        <div className={styles.ProductReview}>
                             <span className={`fa fa-star  ${styles.checked}`}></span>
                            <span className={`fa fa-star  ${styles.checked}`}></span>
                            <span className={`fa fa-star  ${styles.checked}`}></span>
                            <span className={`fa fa-star  ${styles.checked}`}></span>
                            <span className={`fa fa-star  ${styles.checked}`}></span>
                            <div className={styles.ReviewCounter}>
                                <span>(88)</span>
                            </div>
                            
                        </div>
                     
                    </div>
                        
                </div>
            </div>
            <div className={styles.ViewallProducts}>
                <a href="#">View All Products</a>
            </div>    
        </div>
           
    </div>
  )
}

export default BestSellingProduct
