import React from 'react';
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
// import { linkResolver } from 'gatsby-source-prismic-graphql';
import { RichText } from 'prismic-reactjs';
import { getYearByDate } from '../core/utils'
import SEO from '../components/seo'

export const pageQuery = graphql`
  query ProjectBySlug($uid: String!) {
    prismicProject(uid: {eq: $uid}) {
      data{
        ...project
      }
    }
  }
`

// const Image = ({ source = {}, property, ...props }) => {
//   const sourceSharp = source[`${property}Sharp`];
//   if (sourceSharp && sourceSharp.childImageSharp) {
//     return <Img {...sourceSharp.childImageSharp} />;
//   } else if (source[property] && source[property].url) {
//     return <img src={source[property].url} {...props} alt={source[property].alt} />;
//   }
//   return null;
// };

const Project = ({ data }) => {
  console.log(data)
  const {
    title,
    texte,
    image_featured,
    realisateur,
    date,
    categorie,
    credits
  } = data.prismicProject.data
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
        <Img {...image_featured} />
      </div>
      <div className="container-fluid">
        <div className="header">
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
                    {realisateur}
                  </div>
                  <div className="col-md-3 col-xs-3">
                    {categorie.title}
                  </div>
                  <div className="col-md-3 col-xs-3 text-right">
                    {getYearByDate(date)}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div className="content">
          <div className="row">
            <div className="col-md-6 col-xs-12">
              <div className="texte">
                {RichText.render(texte.raw)}
              </div>
            </div>
            <div className="col-md-6 col-xs-12">
              <ul className="credits fS">
                {credits.map((li,i ) => (
                  <li key={i}>
                    <div className="row">
                      <div className="col-md-6 col-xs-6">
                        <div className="label">{li.label}</div>
                      </div>
                      <div className="col-md-6 col-xs-6">
                        <div className="value ">{RichText.render(li.valeur.raw)}</div>
                      </div>
                    </div>

                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

    </div>

  );
}

export default Project