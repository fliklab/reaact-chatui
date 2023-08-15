module.exports = {
  siteMetadata: {
    siteTitle: `React ChatUI Docs`,
    defaultTitle: `React ChatUI Docs`,
    siteTitleShort: `React ChatUI Docs`,
    siteDescription: `Out of the box Gatsby Theme for creating documentation websites easily and quickly`,
    siteUrl: `https://rocketdocs.netlify.app`,
    siteAuthor: `@fliklab`,
    siteImage: `/banner.png`,
    siteLanguage: `en`,
    themeColor: `#8257E6`,
    basePath: `/react-chatui`,
  },
  plugins: [
    {
      resolve: `@rocketseat/gatsby-theme-docs`,
      options: {
        configPath: `src/config`,
        docsPath: `src/docs`,
        homePath: `src/home`,
        yamlFilesPath: `src/yamlFiles`,
        repositoryUrl: `https://fliklab.github.io/react-chatui`,
        baseDir: `examples/gatsby-theme-docs`,
        gatsbyRemarkPlugins: [],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `React ChatUI  Docs`,
        short_name: `React ChatUI  Docs`,
        start_url: `/`,
        background_color: `#ffffff`,
        display: `standalone`,
        icon: `static/favicon.png`,
      },
    },
    `gatsby-plugin-sitemap`,
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: `YOUR_ANALYTICS_ID`,
    //   },
    // },
    `gatsby-plugin-remove-trailing-slashes`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://fliklab.github.io/react-chatui`,
      },
    },
    `gatsby-plugin-offline`,
  ],
};
