var fs = require('fs');
var dir = "./.cache/caches/gatsby-source-prismic-graphql"

exports.onPreBootstrap = () => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }
}

// exports.createResolvers = ({ cache, getCache, [...] }) => {
//   [...]
//   return createRemoteFileNode({
//     [...],
//     cache,
//     getCache,
//     [...]
//   });
// }

// const path = require("path")
// // const locales = require('./config/i18n')
// // const {
// //     replaceTrailing,
// //     localizedSlug,
// //     replaceBoth,
// //     wrapper
// // } = require('./src/core/gatsby-node-helpers')


// exports.createPages = async ({
//     graphql,
//     actions
// }) => {
//     const {
//         createPage
//     } = actions

//     const templateHome = path.resolve("src/templates/page-home.jsx")
//     const templateProject = path.resolve("src/templates/page-project.jsx")

//     createPage({
//         path: '/',
//         component: templateHome,
//         context: {
//             template: 'home'
//         },
//     })

//     //////////////////////////////////
//     const projects = await graphql(`
//     {
//         allPrismicProject {
//             edges {
//                 node {
//                     uid
//                 }
//             }
//         }
//     }
//     `)

//     projects.data.allPrismicProject.edges.forEach(edge => {
//         const path = `/project/${edge.node.uid}`

//         createPage({
//             path: path,
//             component: templateProject,
//             context: {
//                 uid: edge.node.uid,
//                 slug: edge.node.uid,
//                 template: 'project'
//             },
//         })
//     })


// }

// // exports.onCreatePage = ({
// //     page,
// //     actions
// // }) => {
// //     const {
// //         createPage,
// //         deletePage
// //     } = actions

// //     // Only create one 404 page at /404.html
// //     if (page.path.includes('404')) {
// //         return
// //     }

// //     // First delete the pages so we can re-create them
// //     deletePage(page)

// //     Object.keys(locales).map(lang => {
// //         // Remove the trailing slash from the path, e.g. --> /categories
// //         page.path = replaceTrailing(page.path)

// //         // Remove the leading AND traling slash from path, e.g. --> categories
// //         const name = replaceBoth(page.path)

// //         // Create the "slugs" for the pages. Unless default language, add prefix àla "/en"
// //         const localizedPath = locales[lang].default ? page.path : `${locales[lang].path}${page.path}`
// //         console.log(name)
// //         return createPage({
// //             ...page,
// //             path: localizedPath,
// //             context: {
// //                 locale: lang,
// //                 name,
// //                 //template: name
// //             },
// //         })
// //     })
// // }