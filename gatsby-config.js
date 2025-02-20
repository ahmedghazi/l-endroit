const dotenv = require("dotenv")

if (process.env.ENVIRONMENT !== "production") {
  dotenv.config()
}
const { repositoryName, accessToken } = process.env

const linkResolver = require("./src/core/linkResolver")
const website = require("./config/website")
const pathPrefix = website.pathPrefix === "/" ? "" : website.pathPrefix

module.exports = {
  siteMetadata: {
    siteTitle: website.title,
    siteTitleAlt: website.titleAlt,
    siteDescription: website.description,
    siteUrl: website.url + pathPrefix, // For gatsby-plugin-sitemap
    pathPrefix,
    banner: website.logo,
    ogLanguage: website.ogLanguage,
    author: website.author,
    twitter: website.twitter,
    facebook: website.facebook,
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    // 'gatsby-plugin-transition-link',
    // {
    //   resolve: "gatsby-source-prismic",
    //   options: {
    //     repositoryName: repositoryName,
    //     accessToken: accessToken,
    //     // lang: '*',
    //     // linkResolver: () => linkResolver,
    //     // htmlSerializer: () => htmlSerializer,
    //     schemas: {
    //       home: require("./src/schemas/home.json"),
    //       settings: require("./src/schemas/settings.json"),
    //       footer: require("./src/schemas/footer.json"),
    //       project: require("./src/schemas/project.json"),
    //       categorie: require("./src/schemas/categorie.json"),
    //     },
    //   },
    // },
    {
      resolve: "gatsby-source-prismic",
      options: {
        repositoryName: process.env.GATSBY_PRISMIC_REPO_NAME,
        accessToken: process.env.PRISMIC_ACCESS_TOKEN,
        customTypesApiToken: process.env.PRISMIC_CUSTOM_TYPES_API_TOKEN,
        linkResolver: (doc) => linkResolver(doc),
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    "gatsby-plugin-sitemap",
    // {
    //   resolve: `gatsby-plugin-favicon`,
    //   options: {
    //     logo: "./src/favicon-1500.png",

    //     // WebApp Manifest Configuration
    //     appName: website.titleAlt, // Inferred with your package.json
    //     appDescription: website.description,
    //     developerName: 'a_e_a_i_',
    //     developerURL: 'ahmedghazi.com',
    //     dir: 'auto',
    //     lang: 'fr-FR',
    //     background: website.backgroundColor,
    //     theme_color: website.themeColor,
    //     display: 'standalone',
    //     orientation: 'any',
    //     start_url: '/?homescreen=1',
    //     version: '1.0',

    //     icons: {
    //       android: true,
    //       appleIcon: true,
    //       appleStartup: true,
    //       coast: false,
    //       favicons: true,
    //       firefox: true,
    //       yandex: false,
    //       windows: false
    //     }
    //   }
    // },
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: website.googleAnalyticsID,
    //   },
    // },
  ],
}
