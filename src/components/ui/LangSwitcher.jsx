import React, {Component} from "react"
import { Link } from "gatsby"
// import PubSub from "pubsub-js"

import { ContextHoc } from "../../context/ContextHoc"
const locales = require('../../../config/i18n')


class LangSwitcher extends Component {
    constructor(props) {
        super(props)
        // const { i18n } = this.props
        this.state = {
            //language: i18n.language,
            nav: [],
            path: ""
        }
        //console.log(locales)
        this.handleChangeLanguage = this.handleChangeLanguage.bind(this)
    }

    componentDidMount() {
        Object.values(locales).forEach(locale => {
            //console.log(locale)
            const url = this._getLocalizedUrl(locale)
            ///console.log(url)
            const nav = this.state.nav
            const li = {
                url: url,
                label: locale.label,
                locale: locale.locale
            }
            nav.push(li)
            this.setState({
                nav: nav
            })
        });

        

        //this._browserLang()
    }

    _getLocalizedUrl(locale) {
        let {
            pathname
        } = window.location
        let url = ''
        if (pathname.indexOf("article") > -1) {
            const rm = "/" + locale.path + "/"
            pathname = pathname.replace(rm, "/")
            //console.log(locale)
            url = locale.default // === "en" 
                ? pathname 
                : locale.path + pathname
        } else {
            url = locale.default ? '/' : '/' + locale.path
        }
        return url
    }

    //   _browserLang(){
    //     const _userLang = cookie.load('_userLang')
    //     if(!_userLang){
    //       if(navigator){
    //         const userLang = navigator.language || navigator.userLanguage; 
    //         cookie.save('_userLang', userLang, { path: '/' })
    //         if(userLang !== this.props.lang){
    //           //redirect
    //           const locale = locales[userLang.toLowerCase()]
    //           const url = this._getLocalizedUrl(locale)
    //           navigate(url)
    //         }
    //       }

    //     }
    //   }

    
    handleChangeLanguage(lng) {
        // const { i18n } = this.props
        // i18n.changeLanguage(lng)
    }

    renderLanguages() {
        // const langKeys = Object.keys(locales)
        //console.log(this.props)
        // const {locale} = this.props.context
        const {
            nav,
            path
        } = this.state;
        const {
            lang
        } = this.props;

        const languages = nav.map((li, key) => {
            const _liClassName = li.locale === lang ? 'active' : ''
            //console.log(_liClassName, li.locale, lang)
            // if(locale === li.locale)return (null)
            return ( 
                <li key={key} className={_liClassName}>
                    <Link 
                        className={_liClassName + " "}
                        to={li.url+path}> 
                        {li.label} 
                    </Link> 
                </li>
            )
        })

        return languages;
    }

    render() {
        //console.log(this)
        //console.log(Object.keys(locales))
        //const {lang} = this.props

        return ( 
            
            <ul className="language-switcher"> 
                {this.renderLanguages()} 
            </ul> 
            
        )
    }
}

export default ContextHoc(LangSwitcher)