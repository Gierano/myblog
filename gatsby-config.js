module.exports = {
  pathPrefix: "/leonids",
  siteMetadata: {
    title: `Vadim`,
    author: {
      name: `Vadim`,
      summary: `web dev`,
    },
    description: `A simple, fixed sidebar two columns Gatsby.js blog starter.`,
    siteUrl: `https://renyuanz.github.io/leonids`,
    social: {
      twitter: `ry_zou`,
    },
    defaultImage: "images/bg.jpeg",
  },
  plugins: [
    // Load webfonts using Web Font Loader
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Poppins', 'Droid Serif']
        }
      }
    }
    // Accepts all options defined by `babel-plugin-emotion` plugin.
    { 
      resolve: `gatsby-plugin-emotion`,
      options: {
      },
    },
    // The only required option is the domain
     {
       resolve: `gatsby-plugin-plausible`,
       options: {
         domain: `vadimyakovlev.com`,
       },
     },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: ``,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Ryz`,
        short_name: `Ryz`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/gatsby-icon.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    "gatsby-plugin-dark-mode",
    `gatsby-plugin-postcss`,
  ],
}
