import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import Header from "./Header"
import Footer from "./Footer"

const WrapperContext = React.createContext()

const query = graphql`
    query {
        prismic {
            allSettingss {
                edges {
                    node {
                        title
                        description
                        image
                    }
                }
            }
        }
    }
`

const Layout = ({ children, pageContext: { template } }) => {
    const { prismic } = useStaticQuery(query)
    const settings = prismic.allSettingss.edges.slice(0,1).pop().node;

    return(
        <WrapperContext.Provider value={{ settings }}>
            <div id="page">
                <Header  />
                <main>
                    {children}
                </main>
                <div className="sep80"></div>
                <Footer />  
            </div>
        </WrapperContext.Provider>
    )
}

export { WrapperContext, Layout }


