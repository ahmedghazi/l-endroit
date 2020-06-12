import React from 'react';
import { Link } from 'gatsby';
import { linkResolver } from 'gatsby-source-prismic-graphql';
import { RichText } from 'prismic-reactjs';
import Img from "gatsby-image"
import { getYearByDate } from '../core/utils'

const CardHome = ({input}) => {
  // console.log(input)

  return (
    <div className="card-home">
      {/* <Link to={linkResolver(input._meta)}> */}
        <div className="row">
          <div className="col-md-6 col-xs-12">
            {input.image_featuredSharp &&
              <Img {...input.image_featuredSharp.childImageSharp} />
            }
          </div>
          <div className="col-md-6 col-xs-12">
            <div className="card-header">
              <div className="top">
                <h2>{input.title[0].text}</h2>
                <div className="alinea">{input.realisateur}</div>
                <div className="alinea-mid">{`${input.categorie.title}, ${getYearByDate(input.date)}`}</div>
              </div>
            </div>
          </div>
        </div>
        
      {/* </Link> */}
    </div>
  );
};

export default CardHome;