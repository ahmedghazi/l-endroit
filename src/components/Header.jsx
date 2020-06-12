import React, { useContext } from 'react';
//import { StaticQuery, graphql } from "gatsby"
import { Link } from 'gatsby';
import { WrapperContext } from './Layout';
import Burger from './ui/Burger';
import Logo from '../images/l-endroit-logo.inline.svg'

const Header = () => {
  const _WrapperContext = useContext(WrapperContext)
  const { settings } = _WrapperContext
  // console.log(settings)

  const _goToContact = () => {
    // const footer = document.querySelector("footer")
    // footer.scrollIntoView({
    //   behavior: "smooth", 
    //   block: "end", 
    //   inline: "nearest"
    // });
    // window.scrollTo(0,document.body.scrollHeight);
    window.scrollTo({ left: 0, top: document.body.scrollHeight, behavior: "smooth" });
  }

  return (
    <header>
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