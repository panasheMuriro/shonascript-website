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

  return isTabletOrMobile ? (
    isPortrait ? (
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
              Learn how to write code in Shona using ShonaScript Programming
              Language. Make websites and web applications on mobile using Dhaga
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
    ) : (
      <div
        className="tablet_h"
        style={{
          display: "flex",
          // minHeight: "70vh",
          backgroundColor: "#008080",
          width: "100vw",
          justifyContent: "space-evenly",
          // flexShrink:"none",
          flexWrap: "wrap",
          flex: "1 1 200px",
          overflowX: "hidden",
          backgroundImage: "url(/img/shona_outline.png)",
        }}
      >
        <div
          style={{
            width: "800px",
            height: "400px",
            display: "flex",
            alignItems: "stretch",
            flexDirection: "column",
          }}
        >
          <h1
            className="hero__title"
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "auto",
              color: "white",
              alignItems: "center",
            }}
          >
            <ReactTypingEffect
              text={["Hesi", "Code in Shona", "Uchishandisa", "ShonaScript"]}
              typingDelay="500"
              eraseDelay="1500"
            />
          </h1>
          <p
            className=""
            style={{
              width: "60%",
              margin: "auto",
              color: "white",
            }}
          >
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
        <div
          style={{
            width: "600px",
            height: "400px",
            display: "flex",
          }}
        >
          <img
            src="/img/welcome1.jpeg"
            height="200vh"
            style={{
              borderRadius: "10px",
              boxShadow: "rgba(0,0,0,0.15) 0 10px 15px -3px",
              transform: "rotate(-15deg) translatey(100px) translatex(-130px)",
            }}
          ></img>
          <img
            src="/img/Welcome2.jpeg"
            height="160px"
            style={{
              borderRadius: "10px",
              boxShadow: "rgba(0,0,0,0.15) 0 10px 15px -3px",
              transform: "rotate(10deg) translatex(-160px) translateY(100px)",
            }}
          ></img>
          <img
            src="/img/kana2.jpeg"
            height="160px"
            style={{
              borderRadius: "10px",
              boxShadow: "rgba(0,0,0,0.15) 0 10px 15px -3px",
              transform: "rotate(-5deg) translatex(-300px)",
            }}
          ></img>
          <img
            src="/img/basa6.jpeg"
            height="160px"
            style={{
              borderRadius: "10px",
              boxShadow: "rgba(0,0,0,0.15) 0 10px 15px -3px",
              transform: "rotate(-12deg) translatex(-600px) translatey(100px)",
            }}
          ></img>
        </div>
      </div>
    )
  ) : (
    <div
      className="tablet_h"
      style={{
        display: "flex",
        // minHeight: "70vh",
        backgroundColor: "#008080",
        width: "100vw",
        justifyContent: "space-evenly",
        // flexShrink:"none",
        flexWrap: "wrap",
        flex: "1 1 200px",
        overflowX: "hidden",
        backgroundImage: "url(/img/shona_outline.png)",
      }}
    >
      <div
        style={{
          width: "100vw",
          height: "400px",
          display: "flex",
          alignItems: "stretch",
          flexDirection: "column",
        }}
      >
        <h1
          className="hero__title"
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "auto",
            color: "white",
            alignItems: "center",
          }}
        >
          <ReactTypingEffect
            text={["Hesi", "Code in Shona", "Uchishandisa", "ShonaScript"]}
            typingDelay="500"
            eraseDelay="1500"
          />
        </h1>
        <p
          className=""
          style={{
            width: "60%",
            margin: "auto",
            color: "white",
          }}
        >
          If you know Shona, then you can learn coding using Shonascript
          Programming Language. Launch date for ShonaScript is 24 December 2021
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
      <div
        style={{
          width: "600px",
          height: "400px",
          display: "flex",
        }}
      >
        <img
          src="/img/welcome1.jpeg"
          height="200vh"
          style={{
            borderRadius: "10px",
            boxShadow: "rgba(0,0,0,0.15) 0 10px 15px -3px",
            transform: "rotate(-15deg) translatey(100px) translatex(-130px)",
          }}
        ></img>
        <img
          src="/img/Welcome2.jpeg"
          height="160px"
          style={{
            borderRadius: "10px",
            boxShadow: "rgba(0,0,0,0.15) 0 10px 15px -3px",
            transform: "rotate(10deg) translatex(-160px) translateY(100px)",
          }}
        ></img>
        <img
          src="/img/kana2.jpeg"
          height="160px"
          style={{
            borderRadius: "10px",
            boxShadow: "rgba(0,0,0,0.15) 0 10px 15px -3px",
            transform: "rotate(-5deg) translatex(-300px)",
          }}
        ></img>

        <img
          src="/img/basa6.jpeg"
          height="160px"
          style={{
            borderRadius: "10px",
            boxShadow: "rgba(0,0,0,0.15) 0 10px 15px -3px",
            transform: "rotate(-12deg) translatex(-600px) translatey(100px)",
          }}
        ></img>
      </div>
    </div>

    // this is the original html
    // <header className="laptop_hero">
    //   <div className="l_h_left">
    //     <div className="l_h_left_inner">
    //       <h1 className="hero__title">
    //         <ReactTypingEffect
    //           text={["Hesi", "Code in Shona", "Uchishandisa", "ShonaScript"]}
    //           typingDelay="500"
    //           eraseDelay="1500"
    //         />
    //       </h1>

    //       <p className="">
    //         If you know Shona, then you can learn coding using Shonascript
    //         Programming Language. Launch date for ShonaScript is 24 December
    //         2021
    //     </p>
    //       <div className={styles.buttons}>
    //         <Link
    //           className="button button--secondary button--lg"
    //           to="/docs/intro"
    //         >
    //           Get Started
    //       </Link>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="l_h_right">

    //     <div className="l_h_r_code">
    //       <img
    //         src="/img/welcome1.jpeg"
    //         height="200vh"
    //         style={{
    //           borderRadius: "10px",
    //           boxShadow: "rgba(0,0,0,0.15) 0 10px 15px -3px",
    //           transform: "rotate(-15deg)",
    //         }}
    //         className="l_h_r_image1"
    //       ></img>

    //       <img
    //         src="/img/Welcome2.jpeg"
    //         height="160px"
    //         style={{
    //           borderRadius: "10px",
    //           boxShadow: "rgba(0,0,0,0.15) 0 10px 15px -3px",
    //         }}
    //         className="l_h_r_image2"
    //       ></img>

    //     </div>

    //   </div>
    // </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`ShonaScript`}
      description="Code in Shona <head />"
    >
      <div
        style={{
          backgroundColor: "#FFEDC4",
          color: "",
          paddingY: "3px",
          textAlign: "center",
          width: "100vw",
        }}
      >
        Introducing Dhaga, for web development with ShonaScript
      </div>

      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
