import React from 'react';
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
// import { linkResolver } from 'gatsby-source-prismic-graphql';
import { RichText } from 'prismic-reactjs';
// import Img from "gatsby-image"
//import PubSub from 'pubsub-js';
// import SEO from '../components/seo'

export const query = graphql`
  query ProjectBySlug($uid: String!) {
    prismic{
      project(lang: "fr-fr", uid: $uid) {
        title
        texte
        image_featured
        image_featuredSharp{
          ...sharp
        }
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
    // image_featured,
    // image_featuredSharp
  } = data.prismic.project

  return (
    <div className="page-project">
      
      <h1>{title[0].text}</h1>
      <div className="texte">
        {RichText.render(texte)}
      </div>
      <div>
        <Image source={data.prismic.project} property="image_featured" />
      </div>
      <Link to="/">Back to index</Link>
    </div>
    
  );
}

