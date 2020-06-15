import React, { useEffect, useState, useContext } from "react"
//import { StaticQuery, graphql } from "gatsby"
import { Link } from "gatsby";
import { debounce, throttle } from 'throttle-debounce';
import { WrapperContext } from './Layout';
import Burger from "./ui/Burger"
import Logo from "../images/l-endroit-logo.inline.svg"

const Header = () => {
  const _WrapperContext = useContext(WrapperContext)
  const { settings } = _WrapperContext
  
  const [scrollDirection, setScrollDirection] = useState("")
  // console.log(settings)

  useEffect(() => {
    document.addEventListener("scroll", throttle(250, _onScroll))

    return () => document.removeEventListener("scroll", throttle(250, _onScroll))
  }, [])

  let prevScrollTop = 0
  const _onScroll = () => {
    if (window.pageYOffset > prevScrollTop) {
      // console.log("down")
      setScrollDirection("down")
    } else {
      // console.log("up")
      setScrollDirection("up")
    }
    if(window.pageYOffset === 0)setScrollDirection("")

    prevScrollTop = window.pageYOffset
  }

  const _goToContact = () => {
    window.scrollTo({
      left: 0,
      top: document.body.scrollHeight,
      behavior: "smooth",
    })
  }
  // console.log(settings)
  return (
    <header className={scrollDirection}>
      <div className="logo">
        <Link to="/" title={settings.title.text}>
          <Logo />
        </Link>
      </div>

      <nav>
        <ul className="x xje">
          <li>
            <button className="btn outline" onClick={_goToContact}>
              <span className="label">contact</span>
            </button>
          </li>
        </ul>
      </nav>

      {/* <Burger /> */}
    </header>
  )
}

export default Header
