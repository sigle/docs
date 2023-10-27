// @ts-check

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Sigle',
  url: 'https://docs.sigle.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'sigle',
  projectName: 'docs',

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
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/sigle/docs/tree/main/',
        },
        theme: {
          customCss: [
            require.resolve('./src/css/custom.css'),
            require.resolve('@fontsource/open-sans'),
          ],
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Sigle Docs',
        logo: {
          alt: 'Sigle Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            href: 'https://github.com/sigle/sigle',
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
                label: 'Application',
                href: 'https://app.sigle.io',
              },
              {
                label: 'Blog',
                href: 'https://blog.sigle.io',
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
      fathomAnalytics: {
        siteId: 'SWRRJQGT',
      },
    }),

  plugins: [require.resolve('docusaurus-plugin-fathom')],
};

module.exports = config;
