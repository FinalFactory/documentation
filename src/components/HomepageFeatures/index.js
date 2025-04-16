import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Final Tagger',
    Img: require('@site/static/img/Final Tagger.png').default,
    Link: '/docs/tagger/intro',
    description: (
      <>
        Efficiently tag and multi-tag GameObjects with Tagger, an intuitive and rapid tool for organized tagging in Unity.
      </>
    ),
  },
  {
    title: 'Final Preferences',
    Img: require('@site/static/img/Final Preferences.png').default,
    Link: '/docs/preferences/intro',
    description: (
      <>
        Enhance Unity preference management with Final Preferences! Features multi-scope settings, real-time editor UI, encryption, and comprehensive documentation for seamless integration.
      </>
    ),
  },
  {
    title: 'Final Pool',
    Img: require('@site/static/img/Final Pool.png').default,
    Link: '/docs/pool/intro',
    description: (
      <>
        Final Pool optimizes GameObject reuse in Unity, boosting performance with customizable settings and advanced profiling tools for fine-tuned control.
      </>
    ),
  },
  {
    title: 'Final Debug Draw',
    Img: require('@site/static/img/Final DebugDraw.png').default,
    Link: '/docs/debugdraw/intro',
    description: (
      <>
        Final Debug Draw provides powerful visualization tools for Unity developers, enabling clear debugging with customizable shapes and texts for enhanced development workflow with jobs, burst jobs, multithreaded support.
      </>
    ),
  }
];

function Feature({Img, title, Link, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <a href={Link}>
          <img src={Img} className={styles.featureSvg}/>
        </a>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
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
