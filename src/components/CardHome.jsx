import React from "react"
import { Link } from "gatsby"
// import { linkResolver } from "gatsby-source-prismic-graphql"
// import { RichText } from "prismic-reactjs"
import Img from "gatsby-image"
import { getYearByDate } from "../core/utils"

const CardHome = ({ input }) => {
  // console.log(input)
  const {
    title,
    date,
    realisateur,
    image_featured,
    categorie
  } = input.data
  console.log(input)
  return (
    <div className="card-home">
      <Link to={`/project/${input.uid}`}>
        <div className="row">
          <div className="col-md-6 col-xs-12">
            {image_featured && (
              <Img {...image_featured} />
            )}
          </div>
          <div className="col-md-6 col-xs-12">
            <div className="card-header">
              <div className="top">
                <h2>{title.text}</h2>
                <div className="alinea real">{realisateur}</div>
                <div className="alinea-mid text-right ttl">{`${
                  categorie.document.data.title
                  } — ${getYearByDate(date)}`}</div>
              </div>
            </div>
          </div>
        </div>

      </Link>
    </div>
  )
}

export default CardHome
