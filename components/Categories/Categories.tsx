import React from 'react'
import styles from './Categories.module.css'
import Image from 'next/image';
import phone from '../../assets/Category-CellPhone.svg'
import computer from '../../assets/Category-Computer.svg'
import smartwatch from '../../assets/Category-SmartWatch.svg'
import camera from '../../assets/Category-Camera.svg'
import headphone from '../../assets/Category-Headphone.svg'
import gaming from '../../assets/Category-Gamepad.svg'
const Categories = () => {
  return (
  <>

  <div className={styles.BrowseCategories}>
      <div className={styles.Container}>
            <div className={styles.TitleDetailes}>
                <h6 className={styles.Subtile}>Categories</h6>
                <h2 className={styles.ProductTitle}>Browse By Category</h2>
            </div>
         <div className={styles.Row}>
               <a href='#' className={styles.CategoryThumbnail}>
                  <Image src={phone} alt =""></Image>
                  <h5 className={styles.CatrgoryName}>
                        Phones
                  </h5>
               </a>
            <a href='#'className={styles.CategoryThumbnail}>
               <Image src={computer} alt =""></Image>
                  <h5 className={styles.CatrgoryName}>
                        Computers
                  </h5>
            </a>
           
            <a href='#' className={styles.CategoryThumbnail}>
               <Image src={smartwatch} alt =""></Image>
                  <h5 className={styles.CatrgoryName}>
                        Smart Watch
                  </h5>
            </a>
            <a href='#' className={styles.CategoryThumbnail}>
               <Image src={camera} alt =""></Image>
                  <h5 className={styles.CatrgoryName}>
                        Camera
                  </h5>
            </a>
            <a href='#' className={styles.CategoryThumbnail}>
                   <Image src={headphone} alt =""></Image>
                  <h5 className={styles.CatrgoryName}>
                        Head Phones
                  </h5>
            </a>
            <a href='#' className={styles.CategoryThumbnail}>
             <Image src={gaming} alt =""></Image>
                  <h5 className={styles.CatrgoryName}>
                        Gaming
                  </h5>
            </a>
          
         </div>
             

      </div>
          
 </div>
  

  </>
  )
}

export default Categories
