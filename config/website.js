module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  title: 'L\'ENDROIT FILMS', // Navigation and Site Title
  titleAlt: 'Site Alt', // Title for JSONLD
  description: 'desc here',
  headline: '', // Headline for schema.org JSONLD
  url: 'https://lendroit-films.com', // Domain of your site. No trailing slash!
  logo: '/src/images/logo.png', // Used for SEO
  ogLanguage: 'fr_FR', // Facebook Language

  // JSONLD / Manifest
  favicon: 'src/images/icons/favicon.ico', // Used for manifest favicon generation
  shortName: 'aeai', // shortname for manifest. MUST be shorter than 12 characters
  author: 'aeai', // Author for schemaORGJSONLD
  themeColor: '#21211F',
  backgroundColor: '#21211F',

  instagram: '',
  twitter: '', // Twitter Username
  facebook: '', // Facebook Site Name
  googleAnalyticsID: '',

  skipNavId: 'reach-skip-nav', // ID for the "Skip to content" a11y feature
}
