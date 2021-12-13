import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Who Should Learn',
    Svg: undefined,
    image: 'https://lh3.googleusercontent.com/0JdypC4l3foqeEqymigMP1ScaHv73so2Ni8Hbb-M84KSHRYB9o0vmbLNn4DWAZm9whVJCW4a5fC84gD9OW9ZbQMKQh1T5Mr56TlfN3d59o4KlJKDaxdaSCWJXMumMiZinCGicGWUPWjYNAVxD7KYRC31gRz5xQVihUHQbL9aoqEJ9r_ELLNc40RpkMd5K7qCSwH95epIl4GRMctyAwGT7d-Q8cY6eH_rFElFqWAp7i5zv3hPQS6SvOVHcxbR4OTEmCD0UkPkKoE3A6KfRzYHUahKM7LH_9cXm5BtsOjXr3YYgquTMpkWyb4HW3k8v_PUO3WAo877oIHnRNHRhE9iQ9tzGZ7NXHiB_QKW1iJL00UmH_3HdFZGt0kD4RzfJfKpXAplQcFt0tlvfXV0aRyUbBkZHCjHuI1WqjdOBQiwBfprayIhVo0Hd5DZgI6sxuXIZlFX0bNLGHsR6c0b3Gbs7U8CrQLjPkFbGC4yFw9flyd_3NBIGtGwMKiijJQBRc8vjMTBNlcqayWtEEMe3__p2oEfrAtqDMcoHQ0iV8AKo_WywOnkEeuxlYnLreM0qOVvHx-uFwB3JksPn4qU83dc8fxQu-S7y3ODDc-Zu8EreUZOAj6N_iA979VCdqv4rmX28rk5V2phi2LoVAkPiVTX_KMS50MSIJwcnr1Pf9x3ix_XULQwCoPhC4rRLwKgo1KitrNLi64n4E1sdMew77w2ZEc=w1200-h628-no?authuser=0',
    description: (
      <>

      Kana urikuda kudzidzira kunyora code, and kana uchiziva Shona, then ndiwe unofana kushandisa Shonascript
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: 'Powered by React',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
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
