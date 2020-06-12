const dotenv = require('dotenv');

if (process.env.ENVIRONMENT !== 'production') {
  dotenv.config();
}
const { repositoryName, accessToken } = process.env;

const website = require('./config/website')
const pathPrefix = website.pathPrefix === '/' ? '' : website.pathPrefix

module.exports = {
  siteMetadata: {
    siteTitle: website.title,
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
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-prismic-graphql',
      options: {
        repositoryName: repositoryName,
        // accessToken: accessToken,
        defaultLang: 'fr-fr',
        path: '/preview', // optional, default: /preview
        previews: true, // optional, default: false
        pages: [{
            type: 'Home',
            match: '/',
            path: '/',
            component: require.resolve('./src/templates/page-home.jsx'),
            sharpKeys: [
              /image|photo|picture/, // (default)
              'profilepic',
            ],
          },
          {
            type: 'Project', // TypeName from prismic
            match: '/project/:uid', // pages will be generated under this pattern (optional)
            path: '/project', // placeholder page for unpublished documents
            component: require.resolve('./src/templates/page-project.jsx'),
            // sortBy: 'date_ASC', // optional, default: meta_lastPublicationDate_ASC; useful for pagination
            sharpKeys: [
              /image|photo|picture/, // (default)
              'profilepic',
            ],
        }],
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.inline\.svg$/
        }
      }
    },
    'gatsby-plugin-sitemap',
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: "./src/favicon-1500.png",
  
        // WebApp Manifest Configuration
        appName: website.titleAlt, // Inferred with your package.json
        appDescription: website.description,
        developerName: 'a_e_a_i_',
        developerURL: 'ahmedghazi.com',
        dir: 'auto',
        lang: 'fr-FR',
        background: website.backgroundColor,
        theme_color: website.themeColor,
        display: 'standalone',
        orientation: 'any',
        start_url: '/?homescreen=1',
        version: '1.0',
  
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          yandex: false,
          windows: false
        }
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: website.googleAnalyticsID,
      },
    }
  ],
};
