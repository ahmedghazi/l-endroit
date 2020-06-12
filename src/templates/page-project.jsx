import React from 'react';
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
// import { linkResolver } from 'gatsby-source-prismic-graphql';
import { RichText } from 'prismic-reactjs';
import { getYearByDate } from '../core/utils'
import SEO from '../components/seo'

export const query = graphql`
  query ProjectBySlug($uid: String!) {
    prismic{
      project(lang: "fr-fr", uid: $uid) {
        ...project
      }
    }
  }
`

const Image = ({ source = {}, property, ...props }) => {
  const sourceSharp = source[`${property}Sharp`];
  if (sourceSharp && sourceSharp.childImageSharp) {
    return <Img {...sourceSharp.childImageSharp} />;
  } else if (source[property] && source[property].url) {
    return <img src={source[property].url} {...props} alt={source[property].alt} />;
  }
  return null;
};


export default function PageProject({data}) {
  console.log(data.prismic)
  const {
    title,
    texte,
    image_featured,
    image_featuredSharp,
    realisateur,
    date,
    categorie,
    credits
  } = data.prismic.project
console.log(credits)
  return (
    <div className="page-project">
      <SEO
        pageTitle={title[0].text}
        pageDescription={''}
        template="template-project dark"
        // pageBanner={image_featured}
        page={true} 
        /> 
      <div className="hero">
        <Image source={data.prismic.project} property="image_featured" />
      </div>
      <div className="container-fluid">
        <div className="header">
          <div className="row">
            <div className="col-md-3">
              <h1>{title[0].text}</h1>
            </div>
            <div className="col-md-3">
              {realisateur}
            </div>
            <div className="col-md-3">
              <h1>{categorie.title}</h1>
            </div>
            <div className="col-md-3">
              {getYearByDate(date)}
            </div>
          </div>
        </div>
        <div className="content">
          <div className="row">
            <div className="col-md-6">
              <div className="texte">
                {RichText.render(texte)}
              </div>
            </div>
            <div className="col-md-6">
              <ul className="credits fS">
                {credits.map((li,i ) => (
                  <li key={i}>
                    <div className="label">{li.label}</div>
                    <div className="value alinea">{RichText.render(li.valeur)}</div>
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

