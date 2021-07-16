import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'OSS Contracts',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Inherit our open-source ERC721 contracts to make your NFTs compatible with the Wrassling Arena
      </>
    ),
  },
  {
    title: 'Multi-Chain',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Wrassling happens on Matic - we provide contracts and documentation for Matic-exclusive and multi-chain NFTs
      </>
    ),
  },
  {
    title: 'Free',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        NFT projects can join the Wrassling Arena at no cost, and our developer tools allow your team to start wrassling in hours
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
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
