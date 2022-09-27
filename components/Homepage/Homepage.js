import Image from "next/image";
import Link from "next/link";

import logo from "../../assets/logo.png";
import hero from "../../assets/hero.svg";
import featureOne from "../../assets/feature-1.png";
import featureTwo from "../../assets/feature-2.png";
import featureThree from "../../assets/feature-3.png";
import howItWorks from "../../assets/how-it-works.svg";

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
                <div className={classes["hero-image-con"]}>
                  <Image src={hero} alt="hero image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className={classes["section"]}>
        <div className={classes["box-con"]}>
          <h2 className={classes["heading-secondary"]}>Features</h2>
          <p className={classes["heading-secondary-sub"]}>
            The most advanced language model to create distinctive and
            human-like copy in seconds
          </p>
          <div className={classes["box-feature"]}>
            <div className={classes["box-1-of-3"]}>
              <div className={classes["feature-box"]}>
                <div className={classes["feature-image"]}>
                  <Image src={featureOne} alt="feature image" />
                </div>
              </div>
              <div className={classes["feature-text"]}>
                <h3>
                  <i className="fa-solid fa-toolbox"></i>Notes to Summary
                </h3>
                <p>Turn meeting notes into a summary</p>
              </div>
            </div>
            <div className={classes["box-1-of-3"]}>
              <div className={classes["feature-box"]}>
                <div className={classes["feature-image"]}>
                  <Image src={featureTwo} alt="feature image" />
                </div>
              </div>
              <div className={classes["feature-text"]}>
                <h3>
                  <i className="fa-solid fa-trowel-bricks"></i>Interview
                  Questions
                </h3>
                <p>Create interview questions</p>
              </div>
            </div>
            <div className={classes["box-1-of-3"]}>
              <div className={classes["feature-box"]}>
                <div className={classes["feature-image"]}>
                  <Image src={featureThree} alt="feature image" />
                </div>
              </div>
              <div className={classes["feature-text"]}>
                <h3>
                  <i className="fa-solid fa-key"></i>Keywords
                </h3>
                <p>Extract keywords from a block of text</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={classes["section"]}>
        <div className={classes["box-con"]}>
          <h2 className={classes["heading-secondary"]}>How It Works</h2>
          <p className={classes["heading-secondary-sub"]}>
            Use this to save hours of work and in 3 simple steps, begin writing
            here
          </p>
        </div>
        <div className={classes["box-works"]}>
          <div className={classes["box-1-of-2-w"]}>
            <div className={classes["how-it-works-image"]}>
              <div className={classes["how-it-works-image-con"]}>
                <Image src={howItWorks} alt="How it works image" />
              </div>
            </div>
          </div>
          <div className={classes["box-1-of-2-w"]}>
            <div className={classes["how-it-works-box-con"]}>
                <div className={classes["how-it-works-box"]}>
                    <div className={classes["box-1-of-3-h"]}>
                        <h1>1</h1>
                    </div>
                    <div className={classes["box-2-of-3-h"]}>
                        <h3>Select a writing tool</h3>
                        <p>Select from a variety of tools to writings, articles, and blog entries.</p>
                    </div>
                </div>
                <div className={classes["how-it-works-box"]}>
                    <div className={classes["box-1-of-3-h"]}>
                        <h1>2</h1>
                    </div>
                    <div className={classes["box-2-of-3-h"]}>
                        <h3>Fill in your details</h3>
                        <p>Explain as much detail as possible what you want to write about.</p>
                    </div>
                </div>
                <div className={classes["how-it-works-box"]}>
                    <div className={classes["box-1-of-3-h"]}>
                        <h1>3</h1>
                    </div>
                    <div className={classes["box-2-of-3-h"]}>
                        <h3>Generate your content</h3>
                        <p>In seconds, our highly trained tools analyze your details and generates original and human-like content.</p>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;
