import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Who Should Learn',
    Svg: undefined,
    image: '/img/feature1.png',
    description: (
      <>
      Kana urikuda kudzidzira kunyora code, and kana uchiziva Shona, then ndiwe unokwanisa kushandisa ShonaScript
      </>
    ),
  },
  {
    title: 'But Why',
    Svg: undefined,
    image: "/img/feature2.png",
    description: (
      <>
       ShonaScript inokubatsira kuti unzwisise zvinhu zvakasiyana siyana zvinowanzo shandiswa kunyora <code>code</code> mune mamwe ma programming languages 
      </>
    ),
  },
  {
    title: "What's Next",
    Svg: undefined,
    image: "/img/feature3.png",
    description: (
      <>
        Kana uchinge waukunzwisisa ShonaScript, unokurudzirwa kudzidza mamwe ma programming languages akaita se Python kana JavaScript
      </>
    ),
  },
];

function Feature({Svg,image, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">

        {Svg? <Svg className={styles.featureSvg} alt={title} /> :
        <img src={image}></img>}
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
