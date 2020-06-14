import React from "react"
import { StaticQuery, useStaticQuery, graphql } from "gatsby"
import Header from "./Header"
import Footer from "./Footer"

const WrapperContext = React.createContext()

const query = graphql`
  query {
    prismicSettings {
      data {
        title {
          text
        }
      }
    }
  }
`

const Layout = ({ children }) => {
  const { prismicSettings } = useStaticQuery(query)
  // const { settings } = prismic
  // console.log("Layout")
  // console.log(prismicSettings)
  // console.log(prismic)

  return (
    <WrapperContext.Provider value={{settings: prismicSettings.data}}>
      <div id="page">
        <Header />
        <main>{children}</main>
        <div className="sep80"></div>
        <Footer />
      </div>
    </WrapperContext.Provider>
  )
}

export { WrapperContext, Layout }
