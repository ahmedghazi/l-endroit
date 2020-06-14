import { graphql } from "gatsby"

//https://github.com/gatsbyjs/gatsby/blob/26582d31ab14f7bac6d5738e4245ceca2e6d411d/packages/gatsby-transformer-sharp/src/fragments.js#L6

export const query = graphql`
  # fragment _prismicOptions on PrismicOptions {
  #     data {
  #         title {text}
  #         description {text}
  #         banner{url}
  #     }
  # }
  fragment project on PrismicProjectDataType {
    title {
      text
    }
    texte {
      html
    }
    realisateur
    image_featured {
      ...sharp
    }
    date
    credits {
      label
      valeur {
        html
      }
    }
    categorie {
      document {
        ... on PrismicCategorie {
          id
          data {
            title
          }
        }
      }
    }
  }



  fragment sharp on PrismicImageType {
		url
		alt
		fluid(maxWidth: 1500) {
			...GatsbyPrismicImageFluid
		}
		# localFile {
		# 	childImageSharp {
		# 		fluid(maxWidth: 1500, quality: 70){
		# 			...GatsbyPrismicImageFluid
		# 		}
		# 	}
		# }
	}
`
