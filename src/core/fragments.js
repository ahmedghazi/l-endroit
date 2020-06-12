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
    fragment projetCard on PRISMIC_Project {
      title
      realisateur
      date
      categorie {
        ... on PRISMIC_Categorie {
          _linkType
          title
        }
      }
      image_featured
      image_featuredSharp{
        ...sharp
      } 
    }
    
    # fragment projetCard on PrismicProjectData {
    #     title {text}
    #     texte {
    #         html,
    #         text
    #     }
    #     image_featured {
    #         ...fluidImageFeatured
    #     }
        
    # }
    
    
    fragment sharp on File{
      childImageSharp{
        fluid(maxWidth: 1500, quality: 80) {
            ...GatsbyImageSharpFluid
        }
      }
    }
    
`;
