import Image from "next/image";
import Link from "next/link";

import logo from "../../assets/logo.png";
import Layout from "../Layout/Layout";
import classes from "./Homepage.module.css";

const HomePage = () => {
  return (
    <Layout>
      <header className={classes["heading-section"]}>
        <nav className={classes["navigation-bar"]}>
          <div className={classes["logo-box"]}>
            <a href="">
              <Image src={logo} alt="logo" />
            </a>
          </div>
          <ul>
            <li>
              <Link href="">Home</Link>
            </li>
            <li>
              <Link href="">About us</Link>
            </li>
            <li>
              <Link href="">Features</Link>
            </li>
            <li>
              <Link href="">How it works</Link>
            </li>
            <li>
              <Link href="">Pricing</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link href="">Log in</Link>
            </li>
            <li className={classes["sign-up"]}>
              <Link href="">Try BETA</Link>
            </li>
          </ul>
        </nav>
        <div className={classes["hero-box"]}>
          <div className={classes["box"]}>
            <div className={classes["box-1-of-2"]}>
              <h1 className={classes["heading-main"]}>
                Productivity App For Legal Minds
              </h1>
              <h3 className={classes["heading-sub"]}>Best app for lawyers</h3>
              <p className={classes["heading-long-copy"]}>
                Use Lawyer Up to save hours of work. Write distinctive,
                engaging, and high-quality writing or content automatically.
              </p>
              <div className={classes["heading-sub-box"]}>
                <div className={classes["heading-sub-items"]}>
                  <i className="fa-solid fa-pen-to-square"></i>
                  <h2>Write here!</h2>
                </div>
                <div className={classes["heading-icon-box"]}>
                  <i className="fa-solid fa-angles-right"></i>
                </div>
              </div>
              <div className={classes["heading-sub-box-2"]}>
                <div className={classes["heading-sub-items-2"]}>
                  <i className="fa-solid fa-screwdriver-wrench"></i>
                  <h2>Collaborate here!</h2>
                </div>
                <div className={classes["heading-icon-box-2"]}>
                  <i className="fa-solid fa-angles-right"></i>
                </div>
              </div>
            </div>
            <div className={classes["box-1-of-2"]}>
              <div className={classes["hero-image"]}>
                
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className={classes["section-about-us"]}>
        <div className={classes["box-con"]}>
            <h2 className={classes["heading-secondary"]}>About Us</h2>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;
