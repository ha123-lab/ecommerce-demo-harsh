import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import React, { useState } from "react";
import styles from "./Login.module.css";
import Image from "next/image";
import { useForm } from "react-hook-form";
import Login1 from "../../assets/Login1.png";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import Link from "next/link";
import Categories from "@/components/Categories/Categories";
const Home = dynamic(() => import("../Home/Home1")); // import the home component dynamically

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
  } = useForm();
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false); // add state to check if user is logged in

  const onSubmit = (data: any) => {
    // Your login logic goes here
    // Set isLoggedIn to true on successful login
    setIsLoggedIn(true);

    router.push("/Home/Home1");
  };

  return (
    <>
      {isLoggedIn ? (
        <Home />
      ) : (
        <>
          <Header />
          <div className={styles.imageLoginContentWrapper}>
            <>
              <div className={styles.imageContainer}>
                <Image src={Login1} alt="" />
              </div>
              <div className={styles.contentContainer}>
                <h3 className={styles.loginTitle}>Login In To Exclusive</h3>
                <h4 className={styles.welcomeTitle}>
                  Enter your details below
                </h4>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className={styles.loginFormContemt}
                >
                  <div className={styles.inputTypeContent}>
                    <input
                      type="email"
                      {...register("email", { required: true })}
                      className={styles.Email}
                      placeholder="Email"
                    />
                    <span className={styles.ErrorMessage}>
                      {" "}
                      {errors.email?.type === "required" &&
                        "Please Enter Your Email Address"}
                    </span>
                  </div>
                  <div className={styles.inputTypeContent}>
                    <input
                      type="password"
                      {...register("password", { required: true })}
                      className={styles.Password}
                      placeholder="Password"
                    />
                    <span className={styles.ErrorMessage}>
                      {" "}
                      {errors.password?.type === "required" &&
                        "Please Enter Your Password"}{" "}
                    </span>
                  </div>
                  <div className={styles.forgotPwd}>
                    <a href="sign up" className={styles.forgotPassword}>
                      Forgot Password?
                    </a>
                  </div>
                  <div className={styles.loginBtn}>
                    <button type="submit" className={styles.button1}>
                      {" "}
                      Login{" "}
                    </button>
                  </div>
                  <div className={styles.loginwithGoogle}>
                    {/* <button type="button" className="btn btn-light button2"><img src={bgimg2} alt="" /> Login With Google</button> */}
                  </div>
                </form>
              </div>
            </>
          </div>

          <Footer />
        </>
      )}
    </>
  );
};

export default Login;
