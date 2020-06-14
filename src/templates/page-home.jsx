import React from "react"
import { graphql, Link } from "gatsby"
//import PubSub from 'pubsub-js';
//import cookie from 'react-cookies'
// import { linkResolver } from "gatsby-source-prismic-graphql"
import SEO from "../components/seo"
// import { RichText } from "prismic-reactjs"
import CardHome from "../components/CardHome"

export const pageQuery = graphql`
  query {
    prismicHome {
      type
      data {
        title {
          text
        }
        texte {
          text
        }
        projects {
          project {
            document {
              ... on PrismicProject {
                type
                uid
                url
                data{
                  ...project
                }
              }
            }
          }
        }
      }
    }
  }
`

const Home = ({ data }) => {
  console.log(data)
  // if (!home) return null
  const { title, texte, projects } = data.prismicHome.data

  console.log(projects)
  return (
    <div className="home">
      <SEO
        pageTitle={title.text}
        pageDescription={texte.text}
        template="template-home"
        // pathname={location.pathname}
      />
      {/* {RichText.render(title)} */}

      <div className="projets no-gutter">
        {projects.map(({ project }, i) => !project.document ? null : (
          <CardHome input={project.document} key={i} />
        ))}
      </div>
    </div>
  )
}

export default Home
