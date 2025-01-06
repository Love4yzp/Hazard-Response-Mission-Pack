import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className={styles.heroBackground} />
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          {siteConfig.title}
        </h1>
        <p className={styles.heroSubtitle}>
        An open-source AIoT solution designed to efficiently manage and mitigate hazard scenarios.
        </p>
        <div className={styles.buttons}>
          <Link className={styles.primaryButton} to="/intro">
            Get Started
          </Link>
          <Link className={styles.secondaryButton} to="https://github.com/Seeed-Studio/Smarter-Spaces-Solutions">
            Examples
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
      description="An open-source AIoT solution designed to efficiently manage and mitigate hazard scenarios.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
