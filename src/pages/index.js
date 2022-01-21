import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className={clsx("container", styles.hero)}>
      <img className={styles.heroImage} src={require('../../static/img/logo.png').default} />
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Let's Wrassle
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={"MWF Docs"}
      description="The Metaverse Wrassling Federation - Open to all metaverse beings">
      

      
        <div className={styles.background}>
          <div className={styles.stars}></div>
          <div className={styles.twinkling}></div>
        </div>
        <div className={styles.body}>

        <HomepageHeader />
        <HomepageFeatures />
      </div>
    
    </Layout>
  );
}
