const siteConfig = require('./config/site-config');
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    ...siteConfig,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: process.env.NODE_ENV !== 'production',
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-webpack-size`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-datocms-starter`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#222`,
        theme_color: `#fff`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: process.env.DATO_CMS_KEY,
      },
    },
  ],
};
