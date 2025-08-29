import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <img 
          src="/img/finnious-profile.jpg" 
          alt="Scott Finney (finnious)" 
          className="profile-image"
        />
        <h1 className="hero__title">Hello, I'm finnious Scott Finney</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        
        <div className="social-links">
          <Link className="social-link" to="https://www.linkedin.com/in/scottfinney/">
            Connect on LinkedIn
          </Link>
          <Link className="social-link" to="https://twitter.com/finnious">
            Follow on Twitter
          </Link>
        </div>
      </div>
    </header>
  );
}

function AboutSection() {
  return (
    <section className={styles.aboutSection}>
      <div className="container">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <div className="text--center">
              <h2>About Me</h2>
              <p className={styles.aboutText}>
                Scott Finney, also known as Finnious, lives in Memphis, Tennessee, and is an Auburn University graduate. 
                I'm passionate about cycling, having ridden 3,333 miles across the U.S. in 2017 to support people with disabilities, 
                a journey that highlights my commitment to community service. I'm deeply interested in emerging technology like 
                AI (artificial intelligence), blockchain technology and am an active participant in the cryptocurrency and NFT communities.
              </p>
              <p className={styles.aboutText}>
                Besides my technical interests, I enjoy live music, particularly from the band Phish, and appreciate a good cup of 
                coffee made with Ethiopian beans. Despite experiencing a serious bicycle accident in 2019, I continue to pursue my 
                passions and use this website to share my thoughts and ideas. My diverse interests and experiences make me a 
                unique individual dedicated to exploring my contributions to the world.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  const features = [
    {
      emoji: '📍',
      title: 'Based in Memphis, TN',
      description: 'Living in the home of blues, BBQ, and great cycling routes along the Mississippi River.',
      link: 'https://goo.gl/maps/bsqFprikrwZ39YMq7'
    },
    {
      emoji: '🚴♂️',
      title: 'Journey of Hope Cyclist',
      description: 'In 2017, I rode 3,333 miles across the United States to raise money and awareness for people with disabilities.',
      link: '/journey-of-hope'
    },
    {
      emoji: '☕',
      title: 'Coffee Enthusiast',
      description: 'I\'m a fan of drinking coffee brewed with Ethiopian coffee beans. Let\'s talk about your favorite coffee!',
      link: '/coffee'
    },
    {
      emoji: '🎵',
      title: 'Live Music Lover',
      description: 'I enjoy hearing live music, especially performed by the band Phish ⭕. Music brings people together.',
      link: '#'
    },
    {
      emoji: '⛓️',
      title: 'Blockchain Enthusiast',
      description: 'Interested and active in blockchain technology, cryptocurrency, and NFT space. finnious.ETH',
      link: '#'
    },
    {
      emoji: '🦅',
      title: 'Auburn University Graduate',
      description: 'War Eagle! Auburn is where I acquired the "finnious" nickname and made lifelong friendships.',
      link: '#'
    }
  ];

  return (
    <section className="features-section">
      <div className="container">
        <div className="text--center margin-bottom--lg">
          <h2>How Can I Help? What Makes Me Tick?</h2>
          <p>Here are the things that define who I am and what I'm passionate about:</p>
        </div>
        <div className="row">
          {features.map((feature, idx) => (
            <div key={idx} className="col col--4 margin-bottom--lg">
              <div className="feature-card">
                <span className="emoji">{feature.emoji}</span>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
                {feature.link && feature.link !== '#' && (
                  <Link to={feature.link} className="button button--secondary button--sm">
                    Learn More
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CurrentFocusSection() {
  return (
    <section className={styles.currentFocus}>
      <div className="container">
        <div className="row">
          <div className="col col--6 col--offset-3">
            <div className="text--center">
              <h2>Current Focus</h2>
              <p className={styles.focusText}>
                <strong>Uncovering my contribution to the world.</strong>
              </p>
              <p>
                I use this website as a place to capture thoughts and ideas in a digital format. 
                You'll find content on personal growth, technology, health & fitness, entrepreneurship, and life lessons.
              </p>
              <div className="margin-top--lg">
                <Link className="button button--primary button--lg" to="/now">
                  What I'm Up To Now
                </Link>
                <span className="margin-horiz--sm"></span>
                <Link className="button button--secondary button--lg" to="/blog">
                  Read My Blog
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Scott Finney (finnious) - Memphis entrepreneur, cyclist, coffee enthusiast, and Auburn University graduate. Uncovering my contribution to the world.">
      <HomepageHeader />
      <main>
        <AboutSection />
        <FeaturesSection />
        <CurrentFocusSection />
      </main>
    </Layout>
  );
}