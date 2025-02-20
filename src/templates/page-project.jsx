import React from "react"
import { graphql, Link } from "gatsby"
// import Img from "gatsby-image"
// import { linkResolver } from 'gatsby-source-prismic-graphql';
import { RichText } from "prismic-reactjs"
import { getYearByDate } from "../core/utils"
import SEO from "../components/seo"
import CardHome from "../components/CardHome"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export const pageQuery = graphql`
  query ProjectBySlug($uid: String!, $categorieUid: String!) {
    project: prismicProject(uid: { eq: $uid }) {
      data {
        ...project
      }
    }
    # related:allPrismicProject(filter: {data: {categorie: {slug: {eq: $categorieUid}}}}) {
    #   edges {
    #     node {
    #       uid
    #     }
    #   }
    # }
    related: allPrismicProject(
      filter: {
        uid: { ne: $uid }
        data: {
          # realisateur: {eq: $realisateur},
          categorie: { slug: { eq: $categorieUid } }
        }
      }
    ) {
      distinct(field: uid)
      nodes {
        type
        uid
        url
        data {
          ...project
        }
      }
    }
  }
`

const Project = ({ data }) => {
  console.log(data)
  const {
    title,
    texte,
    image_featured,
    realisateur,
    date,
    categorie,
    credits,
  } = data.project.data
  const { related } = data
  // console.log(categorie)
  return (
    <div className="page-project">
      <SEO
        pageTitle={title.text}
        pageDescription={texte.text}
        template="template-project dark"
        pageBanner={image_featured.url}
        page={true}
      />
      <div className="hero">
        {/* <Img {...image_featured} /> */}
        <GatsbyImage
          image={getImage(image_featured)}
          alt={image_featured.alt ? image_featured.alt : title.text}
        />
      </div>
      <section className="container-fluid">
        <section className="header">
          <div className="row">
            <div className="col-md-6 col-xs-12">
              <div className="item title">
                <h1>{title.text}</h1>
              </div>
            </div>

            <div className="col-md-6 col-xs-12">
              <div className="item metas h100">
                <div className="row">
                  <div className="col-md-6 col-xs-6">
                    <div className="ttu">{realisateur}</div>
                  </div>

                  <div className="col-md-6">
                    <div className="ttl">
                      {`${categorie.document.data.title} — ${getYearByDate(date)}`}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="content">
          <div className="row">
            <div className="col-md-6 col-xs-12">
              <div className="texte">{RichText.render(texte.raw)}</div>
            </div>
            <div className="col-md-6 col-xs-12">
              <ul className="credits fS">
                {credits.map((li, i) => (
                  <li key={i}>
                    <div className="row">
                      <div className="col-md-6 col-xs-6">
                        <div className="label">{li.label}</div>
                      </div>
                      <div className="col-md-6 col-xs-6">
                        <div className="value ">
                          {RichText.render(li.valeur.raw)}
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </section>
      <section className="related no-gutter">
        <div className="container-fluid">
          <h2 className="section-title">Dans le même genre</h2>
          {related.nodes.map((project, i) =>
            !project ? null : <CardHome input={project} key={i} />
          )}
        </div>
      </section>
    </div>
  )
}

export default Project
