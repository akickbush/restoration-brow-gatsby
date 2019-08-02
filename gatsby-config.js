module.exports = {
  siteMetadata: {
    title: `Restoration Brow`,
    description: `Restoration Brow`,
    author: `Adam Kickbush`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Restoration Brow`,
        short_name: `RestorBrow`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#b7eaee`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        purgeOnly: [`/style.css`],
      },
    },
    `gatsby-plugin-offline`,
  ],
}
