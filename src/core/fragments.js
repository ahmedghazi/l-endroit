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
  fragment project on PrismicProjectData {
    title {
      text
    }
    texte {
      text
      richText
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
        richText
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

  fragment sharp on PrismicImageField {
    # url
    # alt
    # fluid(
    #   maxWidth: 1920
    #   imgixParams: { q: 80 }
    #   srcSetBreakpoints: [900, 1440, 1920]
    # ) {
    #   # ...GatsbyPrismicImageFluid_noBase64
    #   # ...GatsbyImageSharpFluid_withWebp
    #   ...GatsbyPrismicImageFluid_withWebp
    # }
    url
    alt
    dimensions {
      width
      height
    }
    gatsbyImageData(width: 2000)
  }
  fragment sharpNoB64 on PrismicImageField {
    # url
    # alt
    # fluid(
    #   maxWidth: 1920
    #   imgixParams: { q: 80 }
    #   srcSetBreakpoints: [900, 1440, 1920]
    # ) {
    #   ...GatsbyPrismicImageFluid_noBase64
    # }
    url
    alt
    dimensions {
      width
      height
    }
    gatsbyImageData(width: 2000)
  }

  # fragment sharp on PrismicImageType {
  #   url
  #   alt
  #   fluid(maxWidth: 1500) {
  #     ...GatsbyPrismicImageFluid
  #   }
  #   # localFile {
  #   # 	childImageSharp {
  #   # 		fluid(maxWidth: 1500, quality: 70){
  #   # 			...GatsbyPrismicImageFluid
  #   # 		}
  #   # 	}
  #   # }
  # }
`
