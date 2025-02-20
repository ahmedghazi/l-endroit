import React, { useRef, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { debounce, throttle } from "throttle-debounce"
// import { withPreview } from "gatsby-source-prismic-graphql"
import { RichText } from "prismic-reactjs"
import Accr from "../images/l-endroit-accr.inline.svg"
import { PrismicRichText } from "@prismicio/react"

const query = graphql`
  query {
    prismicFooter {
      data {
        infos {
          richText
        }
        contacts {
          contact {
            richText
          }
        }
        colophon {
          richText
        }
      }
    }
  }
`

const Footer = () => {
  const { prismicFooter } = useStaticQuery(query)
  const { infos, contacts, colophon } = prismicFooter.data
  // console.log(colophon)
  const footerRef = useRef()

  useEffect(() => {
    setTimeout(() => {
      _onResize()
    }, 250)
    window.addEventListener("resize", throttle(250, _onResize))

    return () => window.removeEventListener("resize", throttle(250, _onResize))
  }, [])

  const _onResize = () => {
    const height = footerRef.current.clientHeight
    console.log(height)
    const sep = document.querySelector(".sep80")
    sep.style.height = height - 20 + "px"
  }

  // const hasColophon =

  return (
    <footer ref={footerRef}>
      <div className="inner h100">
        <div className="row ">
          <div className="col-md-6 col-xs-12">
            <div className="infos">
              <h3>Infos</h3>
              <div className="texte">
                <PrismicRichText field={infos.richText} />
                {/* {RichText.render(infos.raw)} */}
              </div>
            </div>
          </div>

          <div className="col-md-6 col-xs-12">
            <div className="contacts">
              <h3>Contacts</h3>
              <div className="row fS">
                {contacts.map((el, i) => (
                  <div className="col-md-6 col-xs-6" key={i}>
                    <div className="item">
                      {/* {RichText.render(el.contact.raw)} */}
                      <PrismicRichText field={el.contact.richText} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="copy fS">
              <div className="row">
                <div className="col-md-6 col-xs-6">
                  <div className="copyright">
                    © {new Date().getFullYear()}{" "}
                  </div>
                </div>
                <div className="col-md-6 col-xs-6">
                  <p>
                    Made with ❤ by{" "}
                    <a
                      href="https://ahmedghazi.com"
                      target="_blank"
                      rel="noopener, noreferrer"
                    >
                      a_e_a_i_
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Accr />
      </div>
    </footer>
  )
}

export default Footer
