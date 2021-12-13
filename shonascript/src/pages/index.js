import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
import TextLoop from "react-text-loop";
import { useMediaQuery } from 'react-responsive';
import ReactTypingEffect from 'react-typing-effect';


function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  })
  const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })

  const FirstSectionStyle = {
    display: "flex",
    flexWrap: "Wrap",
    justifyContent: "space-evenly",
    backgroundColor: "#008080",
    alignItems: "center"
  };
  const FSLeft = {
    width: '500px',
    textAlign: 'center',
    height: "500px"
  };
  const FSRight = {
    width: '500px',
    textAlign: "center",
    height: "500px"
  }
  return (




    // isDesktopOrLaptop && <header className={clsx('hero hero--primary', styles.heroBanner)}>
    //   <div className="container">
    //   <h1 className="hero__title">{siteConfig.title}</h1>
    //     <TextLoop>
    //     <p className="hero__subtitle">If you know Shona</p>
    //     <p className="hero__subtitle">then you can code</p>
    //     <p className="hero__subtitle">using Shonascript</p>
    //     </TextLoop>

    //     <div className={styles.buttons}>
    //       <Link
    //         className="button button--secondary button--lg"
    //         to="/docs/intro">
    //         Get Started
    //       </Link>
    //     </div>
    //   </div>
    // </header>

    isDesktopOrLaptop && <header className="laptop_hero">

      <div className="l_h_left">
        <div className="l_h_left_inner">
          <h1 className="hero__title">

            <ReactTypingEffect
              text={["Hesi", "Code in Shona", "Uchishandisa", "ShonaScript"]}
              typingDelay="500"
              eraseDelay="1500"

            /></h1>

          <p className="">If you know Shona, then you can learn coding using Shonascript Programming Language. </p>


          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg"
              to="/docs/intro">
              Get Started
            </Link>
          </div>
        </div>

      </div>
      <div className="l_h_right">
        <div className="l_h_r_code">
          <img 
          src="https://lh3.googleusercontent.com/-B3WcUU4Yol2YYb4ZTtN7IJvuGFYo_pALdaAsTiOr5I5JkVLCV86UdS5E6ZhsqR4013NZUs-7zPyq_Dpk3Z5IpLy2CLw0iPp5rbgzEV72_FcDt0ARDlNjGGPz-uNecCCXyfE_dDD_rb6FmO_MYpPecVAgcuOsCG1tozg5i25PwXpYd__NTMh1bTYxftuEozvnz6z2zgmRm7csrfLzvXabPqZUXhYCsqJ1GMN1__Bx68nk_EYrZw7mzHMXab3Z2DB62UenheuawhCBPioc0O0fvWZe-oGDbAIxYZKONcBy1XmZ3aUHJ9soB1ze6vHMIMhzUw5LYQ3KalvsmqaNs2jWMf84e2mGXbFB-8yRrlTX59MGPsvHy1QMSPPs3v_Ui7tL8g4qvfyKa1V2-VSajcRS7p2gaE9uRc0BAqG9D8db4pvS_r8RP-VnvKj0oWz4S1WJSMUZHmwKbF0MkvTQW5IrIAjSoaGzO2cvy_E72LZJ4Nhc5leE8dixJ8ROOOFhBRgzKwumrYPdKqGxAbgf_ZC7zMZbxV4RQjhaLsIeMVOxoWR2QljlaUL8onbpvuqEA9zU1h4iFeLOp2M0li5BahR668wxglaUZQvlw6Ooab6T0utlZmpsWlTdNJpMzXgc0kih0zf6DfXLOiAxXrNLAGkamMDDlXAL01snLI4uf8tlVB0RouKGKsuXmUZCAgL_DtVev0SUKkGR-CSTdsPhzUQN1I=w732-h422-no?authuser=0"
          height="200px"
          style={{borderRadius: "10px", boxShadow: "rgba(0,0,0,0.15) 0 10px 15px -3px", transform: "rotate(-15deg)"}}
          ></img>
                 <img 
          src="https://lh3.googleusercontent.com/NfMek2HD98FGkNtOBDYIG4EwPoRQ-uHBwhAsyspQrkMqXiA7iQCqLRNQx-mQOskz0lYLHR3cO4BsgBsa6ftmV3wjzi35tVIkECedQ7mhxCIZr1sLsPNemoiW2K6kc7o_MTJPXuLlDx0kqauUkyneC_W7T_NBkwQT5K83YytpvCzlWuSC1kpPZPi4tFhPgv2i9uQI_llL6Awu_STWvllymmBawAdqnmA84GpGXU-qDnzvUTetI-TIG0F0kTC9bEcZz4LVZT8sEK37GQ_mHMM_aoyBHDT_NYaWdCGKUfmTCedfAhIKIt5ygG8F1D-WJKBPrCY1yd-FunIqnorEwBSwB_jEPBGQbdRP6gu3bTRdXGp-L8Pa0CNEDaZmJ_JO1q9Kx6aUlYRaX2N0w2um3oxMC-RI81y5LiehVrh6uuGZkRyIcYZYh-qfh9rh_MbUj38fkfiVnu7A8ydW6QqShWJ4PTHXww6D6wZGiJEyuNa8WJNeoCBqXQq0kp-L09bwglWfiRRG051AfizT1XtGZVGgKDn2MQugj4pdRqZm-RA1JBZ-_-U3rAgZe6_EjcNGxfnVIERcEvX8vdfMDg3y5tMBbQ7LXzCI1jeEgpBne8vFGtn3Gjgz3bceUZpTdg_kEK1B_KEb2OkQZG0DFkrePJhdpu-_Wso7cFFPX_9-IvkubKUxYWHCUEOkQcvNpAEif_sjb_9-MC87EZxAZpj79tOMx9w=w732-h350-no?authuser=0"
          height="160px"
          style={{borderRadius: "10px", boxShadow: "rgba(0,0,0,0.15) 0 10px 15px -3px"}}
          className="l_h_r_image2"
          ></img>
       
        </div>

      </div>
    </header>




    // <header style={FirstSectionStyle}>
    //   <div style={FSLeft}>
    //     <div></div>
    //     <TextLoop>
    //     <p className="hero__subtitle">If you know Shona</p>
    //      <p className="hero__subtitle">then you can code</p>
    //      <p className="hero__subtitle">using Shonascript</p>
    //     </TextLoop>
    //     </div>
    //   <div style={FSRight}>SHONASCRIPT</div>
    // </header>





  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`ShonaScript`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
