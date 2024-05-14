// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Final Factory Documentation',
  tagline: 'Discover the Tools You Need — Your Guide to Final Factory\'s Unity Assets!',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.finalfactory.de',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/documentation',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'FinalFactory', // Usually your GitHub org/user name.
  projectName: 'FinalPreferences', // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Final Factory',
        logo: {
          alt: 'Final Factory Logo',
          src: 'img/logo.png',
          href: 'https://finalfactory.de', // Default to `siteConfig.baseUrl`.
        target: '_self', // By default, this value is calculated based on the `href` attribute (the external link will open in a new tab, all others in the current one).
        },
        items: [
          {to: '/', label: 'Home', position: 'left'},
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Final Tagger',
          },
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Final Preferences',
          },
          {
            href: 'https://finalfactory.de/unity-asset-store-publisher',
            label: 'Unity Asset Store',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Final Tagger',
                to: '/docs/tagger/intro',
              },
              {
                label: 'Final Preferences',
                to: '/docs/preferences/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://finalfactory.de/discord',
              }
            ],
          },
          {
            title: 'Asset Store',
            items: [
              {
                label: 'Final Factory',
                href: 'https://finalfactory.de/unity-asset-store-publisher',
              },
              {
                label: 'Final Tagger',
                href: 'https://finalfactory.de/unity-asset-tagger',
              },
              {
                label: 'Final Preferences',
                href: 'https://finalfactory.de/unity-asset-preferences',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Final Factory',
                href: 'https://finalfactory.de',
              },
              {
                label: 'Legal Notice',
                href: 'https://www.finalfactory.de/legal-notice',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Final Factory.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['csharp'],
      },
    }),
    plugins: [require.resolve('docusaurus-lunr-search')],
};

export default config;
