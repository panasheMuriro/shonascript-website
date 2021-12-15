import React, { Component } from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import HomepageFeatures from "../components/HomepageFeatures";
import TextLoop from "react-text-loop";
import { useMediaQuery } from "react-responsive";
import ReactTypingEffect from "react-typing-effect";
// TODO: uninstall the react grid system
function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1200px)" });
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });

  return isTabletOrMobile ?
    isPortrait ?
      <header className="laptop_hero">
        <div className="l_h_left">
          <div className="l_h_left_inner">
            <h1 className="hero__title">
              <ReactTypingEffect
                text={["Hesi", "Code in Shona", "Uchishandisa", "ShonaScript"]}
                typingDelay="500"
                eraseDelay="1500"
              />
            </h1>
            <p className="">
              If you know Shona, then you can learn coding using Shonascript
              Programming Language. Launch date for ShonaScript is 24 December
              2021
            </p>
            <div className={styles.buttons}>
              <Link
                className="button button--secondary button--lg"
                to="/docs/intro"
              >
                Get Started
      </Link>
            </div>
          </div>
        </div>
        <div className="l_h_right">
          <div className="l_h_r_code">
            <img
              src="/img/welcome1.jpeg"
              height="200vh"
              style={{
                borderRadius: "10px",
                boxShadow: "rgba(0,0,0,0.15) 0 10px 15px -3px",
                transform: "rotate(-15deg)",
              }}
              className="l_h_r_image1"
            ></img>
            <img
              src="/img/Welcome2.jpeg"
              height="160px"
              style={{
                borderRadius: "10px",
                boxShadow: "rgba(0,0,0,0.15) 0 10px 15px -3px",
              }}
              className="l_h_r_image2"
            ></img>
          </div>
        </div>
      </header>
      :

      <header className="laptop_hero">
        <h1 className="hero__title lh2"
          style={{
            display: "flex",
            height: "100%",
            justifyContent: "center",
            margin: "auto"
          }}>
        </h1>
      </header>
    : (
      <header className="laptop_hero">
        <div className="l_h_left">
          <div className="l_h_left_inner">
            <h1 className="hero__title">
              <ReactTypingEffect
                text={["Hesi", "Code in Shona", "Uchishandisa", "ShonaScript"]}
                typingDelay="500"
                eraseDelay="1500"
              />
            </h1>

            <p className="">
              If you know Shona, then you can learn coding using Shonascript
              Programming Language. Launch date for ShonaScript is 24 December
              2021
          </p>
            <div className={styles.buttons}>
              <Link
                className="button button--secondary button--lg"
                to="/docs/intro"
              >
                Get Started
            </Link>
            </div>
          </div>
        </div>
        <div className="l_h_right">
          <div className="l_h_r_code">
            <img
              src="/img/welcome1.jpeg"
              height="200vh"
              style={{
                borderRadius: "10px",
                boxShadow: "rgba(0,0,0,0.15) 0 10px 15px -3px",
                transform: "rotate(-15deg)",
              }}
              className="l_h_r_image1"
            ></img>
            <img
              src="/img/Welcome2.jpeg"
              height="160px"
              style={{
                borderRadius: "10px",
                boxShadow: "rgba(0,0,0,0.15) 0 10px 15px -3px",
              }}
              className="l_h_r_image2"
            ></img>
          </div>
        </div>
      </header>
    )
}


export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (

    <Layout
      title={`ShonaScript`}
      description="Description will go into a meta tag in <head />"
    >
      <TextLoop>
        <div
          style={{
            backgroundColor: "#FFEDC4",
            color: "",
            paddingY: "3px",
            textAlign: "center",
            width: "100vw",
          }}
        >
          This website is still under development
        </div>
        <div
          style={{
            backgroundColor: "#FFEDC4",
            color: "",
            paddingY: "3px",
            textAlign: "center",
            width: "100vw",
          }}
        >
          ShonaScript is launching on 24 December 2021
        </div>
        <div
          style={{
            backgroundColor: "red",
            color: "white",
            paddingY: "3px",
            textAlign: "center",
            width: "100vw",
          }}
        >
          Merry Christmas
        </div>
      </TextLoop>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>

  );
}

