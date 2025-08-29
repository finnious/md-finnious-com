// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'finnious Scott Finney',
  tagline: 'Uncovering my contribution to the world',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://md.finnious.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: '/',

  // GitHub pages deployment config
  organizationName: 'finnious', // Your GitHub username
  projectName: 'md-finnious-com', // Your repo name

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false, // Disable docs - we're using pages instead
        blog: {
          showReadingTime: true,
          blogTitle: 'finnious thoughts',
          blogDescription: 'Thoughts and ideas from Scott Finney',
          postsPerPage: 10,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/finnious/md-finnious-com/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        googleAnalytics: {
          trackingID: 'G-5S4SDELN3T', // Add your Google Analytics ID
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/finnious-social-card.jpg',
      navbar: {
        title: 'finnious',
        logo: {
          alt: 'finnious Scott Finney',
          src: 'img/finnious-logo.png',
        },
        items: [
          {to: '/', label: 'Home', position: 'left'},
          {to: '/journey-of-hope', label: 'Journey of Hope', position: 'left'},
          {to: '/coffee', label: 'Coffee', position: 'left'},
          {to: '/health', label: 'Health & Fitness', position: 'left'},
          {to: '/blog', label: 'Blog', position: 'left'},
          {to: '/now', label: 'Now', position: 'left'},
          {
            href: 'https://www.linkedin.com/in/scottfinney/',
            label: 'LinkedIn',
            position: 'right',
          },
          {
            href: 'https://twitter.com/finnious',
            label: 'Twitter',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Connect',
            items: [
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/scottfinney/',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/finnious',
              },
              {
                label: 'Instagram',
                href: 'https://instagram.com/finnious',
              },
            ],
          },
          {
            title: 'About',
            items: [
              {
                label: 'Journey of Hope',
                to: '/journey-of-hope',
              },
              {
                label: 'Coffee Talk',
                to: '/coffee',
              },
              {
                label: 'What I\'m Up To Now',
                to: '/now',
              },
            ],
          },
          {
            title: 'Location & Contact',
            items: [
              {
                label: '📍 Memphis, TN',
                href: 'https://goo.gl/maps/bsqFprikrwZ39YMq7',
              },
              {
                label: 'Creating Value LLC',
                href: 'https://creatingvaluellc.com/',
              },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} Scott Finney (finnious). War Eagle 🦅`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
    }),
    
  plugins: [
    // Add any additional plugins here
  ],
};

module.exports = config;