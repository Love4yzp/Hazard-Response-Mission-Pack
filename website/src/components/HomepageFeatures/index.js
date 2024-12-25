import clsx from 'clsx';
import Heading from '@theme/Heading';
// import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Digital Off-grid communicator',
    // Svg: require('@site/static/img/feature-network.svg').default,
    description: (
      <>
        Mesh-style long-range network, lightweight device. 
        Works standalone or with phone pairing.
      </>
    ),
    link: '/docs/communicator',
  },
  {
    title: 'Powerful Basecamp computer',
    // Svg: require('@site/static/img/feature-processing.svg').default,
    description: (
      <>
        Onsite edge computing with communication gateway. 
        Features no-code software and HMI.      
      </>
    ),
    link: '/docs/basecamp',
  },
  {
    title: 'Intelligent Hazard Sensors',
    // Svg: require('@site/static/img/feature-sensors.svg').default,
    description: (
      <>
        Includes weather station, long-range tracker, and AI sensors. 
        Ideal for hazard monitoring.
      </>
    ),
    link: '/docs/sensors',
  },
];

function Feature({Svg, title, description, link}) {
  return (
    <div className={styles.featureCard}>
      {/* <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div> */}
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
        {/* <div className={styles.featureActions}>
          <Link
            className={clsx('button button--secondary', styles.featureButton)}
            to={link}>
            Learn More
          </Link>
        </div> */}
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.featureSection}>
      <div className={styles.featureGrid}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
      </div>
    </section>
  );
}
