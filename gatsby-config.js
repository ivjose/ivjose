module.exports = {
  siteMetadata: {
    title: 'Jose Santos IV',
    description:
      'Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.',
    author: '@ivjose',
    menuLinks: [
      {
        name: 'Home',
        path: '/',
      },
      {
        name: 'Services',
        path: '/services',
      },
      {
        name: 'Blog',
        path: '/blog',
      },
      {
        name: 'Contact',
        path: '/contact',
      },
    ],
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'ivjose',
        short_name: 'my-website',
        start_url: '/',
        background_color: '#f73859',
        theme_color: '#f73859',
        display: 'minimal-ui',
        icon: 'src/images/ivjose-logo.svg', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        test: /\.js$|\.jsx$/,
        exclude: /(node_modules|.cache|public)/,
        stages: ['develop'],
        options: {
          emitWarning: true,
          failOnError: false,
        },
      },
    },
    {
      resolve: 'gatsby-alias-imports',
      options: {
        aliases: {
          components: 'src/components',
          containers: 'src/containers',
          images: 'src/images',
          json: 'src/json',
        },
      },
    },
    'gatsby-plugin-emotion',
    'gatsby-plugin-theme-ui',
    {
      resolve: 'gatsby-plugin-scroll-reveal',
      options: {
        // eslint-disable-next-line max-len
        threshold: 1, // Percentage of an element's area that needs to be visible to launch animation
        once: true, // Defines if animation needs to be launched once
        disable: false, // Flag for disabling animations
      },
    },
    {
      resolve: 'gatsby-plugin-webfonts',
      options: {
        fonts: {
          google: [
            {
              family: 'Muli',
              variants: ['400', '500', '700'],
              // subsets: ['latin']
              // text: 'Hello'
              // fontDisplay: 'swap',
              // strategy: 'selfHosted' // 'base64' || 'cdn'
            },
          ],
        },
        formats: ['woff2', 'woff'],
        useMinify: true,
        usePreload: true,
        usePreconnect: true,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
};
