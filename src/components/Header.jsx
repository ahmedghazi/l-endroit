import React, { useEffect, useState, useContext } from 'react';
//import { StaticQuery, graphql } from "gatsby"
import { Link } from 'gatsby';
import { WrapperContext } from './Layout';
import Burger from './ui/Burger';
import Logo from '../images/l-endroit-logo.inline.svg'

const Header = () => {
  const _WrapperContext = useContext(WrapperContext)
  const { settings } = _WrapperContext
  const [scrollDirection, setScrollDirection] = useState(false)
  // console.log(settings)

  useEffect(() => {
    document.addEventListener("scroll", _onScroll)

    return () => document.removeEventListener("scroll", _onScroll)
  }, [])

  let prevScrollTop = 0
  const _onScroll = () => {
    // console.log(window.pageYOffset)
    if(window.pageYOffset > prevScrollTop){
      console.log("down")
      setScrollDirection("down")
    }else{
      console.log("up")
      setScrollDirection("up")
    }
    prevScrollTop = window.pageYOffset
  }

  const _goToContact = () => {
    window.scrollTo({ left: 0, top: document.body.scrollHeight, behavior: "smooth" });
  }

  return (
    <header className={scrollDirection}>
      <div className="logo">
        <Link to="/">
          <Logo />
        </Link>
      </div>

      <nav>
        <ul className="x xje">
          <li>
            <button className="btn outline" onClick={_goToContact}>
              <span>contact</span>
            </button>
          </li>
        </ul>
      </nav>
      
      {/* <Burger /> */}
    </header>
  );

}

export default Header;