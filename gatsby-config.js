module.exports = {
  siteMetadata: {
    title: `giffgaff status`,
    description: `Check the status of giffgaff easily from one page. This site updates regularly to make sure you're not missing any of the latest issues.`,
    author: `@davwheat`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `giffgaff status`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#000`,
        theme_color: `#000`,
        display: `minimal-ui`,
        icon: `src/images/giffgaff_square.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
