import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Permissionless Protocol',
    img: require('../../static/img/1.png').default,
    description: (
      <>
        Any NFT contract can join, any game dev can access 
        open data for an avatar's wrestling skills.
      </>
    ),
  },
  {
    title: 'Cross-Chain Gameplay',
    img: require('../../static/img/2.png').default,
    description: (
      <>
        Persisted on-chain and indexed, 
        Wrasslers supports any type of metaverse experience.
      </>
    ),
  },
  {
    title: 'Free+',
    img: require('../../static/img/3.png').default,
    description: (
      <>
        Revenue share for NFT projects 
        and positive sum outcomes through open collaboration.
      </>
    ),
  },
];

function Feature({img, title, description}) {
  return (
    <div className={clsx('col col--4', styles.feature)}>
      <div className={styles.feature}>
        <div className="text--center">
          <img className={styles.featureimg} alt={title} src={img} />
        </div>
        <div className="margin-vert--md">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
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
