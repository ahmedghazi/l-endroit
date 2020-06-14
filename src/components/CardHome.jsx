import React from "react"
import { Link } from "gatsby"
// import { linkResolver } from "gatsby-source-prismic-graphql"
// import { RichText } from "prismic-reactjs"
import Img from "gatsby-image"
import { getYearByDate } from "../core/utils"

const CardHome = ({ input }) => {
  
  const {
    title,
    date,
    realisateur,
    image_featured,
    categorie
  } = input.data
  console.log(image_featured)
  return (
    <div className="card-home">
      {/* <Link to={linkResolver(input._meta)}> */}
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
              <div className="alinea">{realisateur}</div>
              <div className="alinea-mid">{`${
                categorie.document.data.title
              }, ${getYearByDate(date)}`}</div>
            </div>
          </div>
        </div>
      </div>

      {/* </Link> */}
    </div>
  )
}

export default CardHome
