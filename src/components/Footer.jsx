import React from 'react';
import { useStaticQuery, graphql } from 'gatsby'
import { RichText } from 'prismic-reactjs';
import Accr from '../images/l-endroit-accr.inline.svg'

const Footer = () => {
    const { prismic } = useStaticQuery(graphql`
        query {
            prismic {
                footer(lang: "fr-fr", uid: "footer") {
                    title
                    infos
                    contacts {
                        contact
                    }
                    colophon
                    }
            }
        }
    `)
    const {
        infos,
        contacts,
        colophon
    } = prismic.footer
    // console.log(prismic.footer)

    return(
    <footer>
        <div className="row ">
            <div className="col-md-6 col-xs-12">
                <div className="infos">
                    <h3>Infos</h3>
                    <div className="texte">
                    {RichText.render(infos)}
                    </div>
                </div>
            </div>

            <div className="col-md-6 col-xs-12">
                <div className="contacts">
                    <h3>Contacts</h3>
                    <div className="row fS">
                        {contacts.map((el,i) => (
                            <div className="col-md-6" key={i}>
                                {RichText.render(el.contact)}
                            </div>
                        ))}
                        
                        
                    </div>
                </div>
                <div className="colophon">
                    <h3>Colophon</h3>
                    <div className="fS">
                    {RichText.render(colophon)}
                    </div>
                </div>
                <div className="copy fS">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="copyright">© {new Date().getFullYear()}     </div>
                        </div>
                        <div className="col-md-6">
                        <p>Made with ❤ by the <a href="ahmedghazi.com" target="_blank">a_e_a_i_</a></p>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        <Accr />
        
    </footer>
)
}

export default Footer;