import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import Header from "./Header"
import Footer from "./Footer"

const WrapperContext = React.createContext()

const query = graphql`
    query {
        prismic {
            settings(lang: "fr-fr", uid: "settings") {
                title
            }
        }
    }
`

const Layout = ({ children, pageContext: { template } }) => {
    const { prismic } = useStaticQuery(query)
    const { settings } = prismic
    console.log("Layout")
    console.log(settings)

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


