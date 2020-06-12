import React from "react"
import { graphql, Link } from "gatsby"
//import PubSub from 'pubsub-js';
//import cookie from 'react-cookies'
import { linkResolver } from "gatsby-source-prismic-graphql"
import SEO from "../components/seo"
import { RichText } from "prismic-reactjs"
import CardHome from "../components/CardHome"

export const query = graphql`
  query Q {
    prismic {
      allHomes {
        edges {
          node {
            title
            texte
          }
        }
      }
      home(lang: "fr-fr", uid: "lendroit-films") {
        title
        texte
        projets {
          projet {
            ... on PRISMIC_Project {
              ...project
            }
          }
        }
      }
    }
  }
`

const Home = ({ data }) => {
  // console.log(data)
  const { home } = data.prismic
  if (!home) return null
  // console.log(doc)
  const { title, texte, projets } = home

  // const projects = data.prismic.allProjects.edges
  // console.log(projects)
  return (
    <div className="home">
      <SEO
        pageTitle={title[0].text}
        pageDescription={texte[0].text}
        template="template-home"
        // pathname={location.pathname}
      />
      {/* {RichText.render(title)} */}

      <div className="projets no-gutter">
        {projets.map(({ projet }, i) => (
          <CardHome input={projet} key={i} />
        ))}
      </div>
    </div>
  )
}

export default Home
