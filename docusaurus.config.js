// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// TODO setup prettier + hooks
// TODO setup fathom
// TODO migrate content from Gitbook
// TODO design main page
// TODO setup CI / CD
// TODO deploy

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'My Site',
  tagline: 'Dinosaurs are cool',
  url: 'https://docs.sigle.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/github/sigle/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'My Site',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Tutorial',
          },
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
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
                label: 'Twitter',
                href: 'https://twitter.com/sigleapp',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/td7WmgK22k',
              },
              {
                label: 'Github',
                href: 'https://github.com/sigle',
              },
            ],
          },
          {
            title: 'Product',
            items: [
              {
                label: 'Blog',
                href: 'https://app.sigle.io/sigleapp.id.blockstack',
              },
              {
                label: 'Feedback',
                href: 'https://sigle.canny.io/feature-requests',
              },
            ],
          },
          {
            title: 'More...',
            items: [
              {
                label: 'The Explorer Guild',
                href: 'https://www.explorerguild.io/',
              },
              {
                label: 'StxStats',
                href: 'https://www.stxstats.co/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Sigle`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
