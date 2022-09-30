import Image from "next/image";
import Link from "next/link";

import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import logo from "../../assets/logo.png";
import logoFooter from "../../assets/logo-footer.png";
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
      <header className={classes["heading-section"]} id="home">
        <Navbar
          collapseOnSelect
          expand="lg"
          variant="light"
          fixed="top"
          className={classes["navbar"]}
        >
          <Container className={classes["container"]}>
            <Navbar.Brand href="#home" className={classes["navbar-logo"]}>
              <div href="" className={classes["logo-box"]}>
                <Image src={logo} alt="logo" />
              </div>
            </Navbar.Brand>
            <Navbar.Toggle
              className={classes["navbar-toggle"]}
              aria-controls="responsive-navbar-nav"
            />
            <Navbar.Collapse
              id="responsive-navbar-nav"
              className={classes["navbar-collapse"]}
            >
              <Nav className="me-auto justify-content-center flex-grow-1">
                <Nav.Link href="#home" className={classes["navbar-text"]}>
                  Home
                </Nav.Link>
                <Nav.Link href="#features" className={classes["navbar-text"]}>
                  Features
                </Nav.Link>
                <Nav.Link
                  href="#how-it-works"
                  className={classes["navbar-text"]}
                >
                  How It Works
                </Nav.Link>
                <Nav.Link href="#pricing" className={classes["navbar-text"]}>
                  Pricing
                </Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link href="#home" className={classes["navbar-text-login"]}>
                  Log In
                </Nav.Link>
                <Nav.Link href="#home" className={classes["navbar-text-signup"]}>
                  Try BETA
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
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
      <section className={classes["section"]} id="features">
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
      <section className={classes["section"]} id="how-it-works">
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
                  <p>
                    Select from a variety of tools to writings, articles, and
                    blog entries.
                  </p>
                </div>
              </div>
              <div className={classes["how-it-works-box"]}>
                <div className={classes["box-1-of-3-h"]}>
                  <h1>2</h1>
                </div>
                <div className={classes["box-2-of-3-h"]}>
                  <h3>Fill in your details</h3>
                  <p>
                    Explain as much detail as possible what you want to write
                    about.
                  </p>
                </div>
              </div>
              <div className={classes["how-it-works-box"]}>
                <div className={classes["box-1-of-3-h"]}>
                  <h1>3</h1>
                </div>
                <div className={classes["box-2-of-3-h"]}>
                  <h3>Generate your content</h3>
                  <p>
                    In seconds, our highly trained tools analyze your details
                    and generates original and human-like content.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={classes["section"]} id="pricing">
        <div className={classes["box-con"]}>
          <h2 className={classes["heading-secondary"]}>Pricing</h2>
          <p className={classes["heading-secondary-sub"]}>
            Our plans are straightforward and open, depending on the number of
            tools.
          </p>
          <div className={classes["box-pricing"]}>
            <div className={classes["box-1-of-3-pricing"]}>
              <i className="fa-solid fa-user"></i>
              <h2>Personal</h2>
              <p>Perfect plan for starters</p>
              <h1>
                $0<span>/year</span>
              </h1>
              <button>Try BETA</button>
              <ul>
                <li>
                  <i className="fa-solid fa-check"></i>Unlimited projects
                </li>
                <li>
                  <i className="fa-solid fa-check"></i>Share with 5 team members
                </li>
              </ul>
            </div>
            <div className={classes["box-1-of-3-pricing"]}>
              <i className="fa-solid fa-user-plus"></i>
              <h2>Professional</h2>
              <p>For users who want to do more</p>
              <h1>
                $19<span>/year</span>
              </h1>
              <button>Try BETA</button>
              <ul>
                <li>
                  <i className="fa-solid fa-check"></i>Unlimited projects
                </li>
                <li>
                  <i className="fa-solid fa-check"></i>Share with 5 team members
                </li>
                <li>
                  <i className="fa-solid fa-check"></i>Advanced security
                </li>
                <li>
                  <i className="fa-solid fa-check"></i>Sharing permission
                </li>
              </ul>
            </div>
            <div className={classes["box-1-of-3-pricing"]}>
              <i className="fa-solid fa-users"></i>
              <h2>Team</h2>
              <p>Your entire team in one place</p>
              <h1>
                $49<span>/year</span>
              </h1>
              <button>Try BETA</button>
              <ul>
                <li>
                  <i className="fa-solid fa-check"></i>Unlimited projects
                </li>
                <li>
                  <i className="fa-solid fa-check"></i>Share with 5 team members
                </li>
                <li>
                  <i className="fa-solid fa-check"></i>Advanced security
                </li>
                <li>
                  <i className="fa-solid fa-check"></i>Sharing permission
                </li>
                <li>
                  <i className="fa-solid fa-check"></i>Collaborative workspace
                </li>
                <li>
                  <i className="fa-solid fa-check"></i>Admin tools
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <footer className={classes["footer"]}>
        <div className={classes["footer-box"]}>
          <div className={classes["logo-footer-box"]}>
            <a href="">
              <Image src={logoFooter} alt="logo footer" />
            </a>
          </div>
          <div className={classes["box-footer"]}>
            <div className={classes["box-1-of-4-footer"]}>
              <h2>Save time. Get motivated.</h2>
              <p className={classes["long-copy"]}>
                In seconds, you can generate contents, writings and material.
                Utilize the most advanced tool writer to increase traffic and
                productivity.
              </p>
              <p className={classes["copyright"]}>
                &#169; 2022 Lawyer Up. All rights reserved.
              </p>
            </div>
            <div className={classes["box-1-of-4-footer"]}>
              <h3>Links</h3>
              <ul>
                <li>
                  <a href="">FAQ</a>
                </li>
                <li>
                  <a href="">Log In</a>
                </li>
                <li>
                  <a href="">Sign Up</a>
                </li>
              </ul>
            </div>
            <div className={classes["box-1-of-4-footer"]}>
              <h3>About</h3>
              <ul>
                <li>
                  <a href="">Features</a>
                </li>
                <li>
                  <a href="">How It Works</a>
                </li>
                <li>
                  <a href="">Pricing</a>
                </li>
                <li>
                  <a href="">Contact Us</a>
                </li>
              </ul>
            </div>
            <div className={classes["box-1-of-4-footer"]}>
              <h3>Use Cases</h3>
              <ul>
                <li>
                  <a href="">Notes to Summary</a>
                </li>
                <li>
                  <a href="">Interview Questions</a>
                </li>
                <li>
                  <a href="">Keywords</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </Layout>
  );
};

export default HomePage;
