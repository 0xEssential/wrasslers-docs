import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'OSS Contracts',
    img: require('../../static/img/1.png').default,
    description: (
      <>
        Inherit our open-source ERC721 contracts to make your NFTs compatible with the Wrassling Arena
      </>
    ),
  },
  {
    title: 'Multi-Chain',
    img: require('../../static/img/2.png').default,
    description: (
      <>
        Wrassling happens on Matic - we provide contracts and documentation for Matic-exclusive and multi-chain NFTs
      </>
    ),
  },
  {
    title: 'Free',
    img: require('../../static/img/3.png').default,
    description: (
      <>
        NFT projects can join the Wrassling Arena at no cost, and our developer tools allow your team to start wrassling in hours
      </>
    ),
  },
];

function Feature({img, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className={styles.featureimg} alt={title} src={img} />
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
