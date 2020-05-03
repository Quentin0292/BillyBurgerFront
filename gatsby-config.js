require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Billy Burger - The Good Burger`,
    description: `Site of the famous Billy Burger Company !`,
    author: `@quentinlecocq`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-mongodb`,
      options: {
        dbName: `test`,
        collection: `burgers`,
        server: {
          address: "cluster0-shard-00-02-p98fb.mongodb.net",
          port: 27017,
        },
        auth: { user: "admin", password: "Lensois.62" },
        extraParams: {
          replicaSet: "Cluster0-shard-0",
          ssl: true,
          authSource: `admin`,
          retryWrites: true,
        },
      },
    },
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
