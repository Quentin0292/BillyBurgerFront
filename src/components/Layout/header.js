import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from "../../images/logo.png"
import { FaBars, FaBookOpen } from "react-icons/fa"

const Header = () => (
  <header>
    <nav>
      <ul className="menu">
        <li className="logo">
          <Link to="#">
            <img src={Logo} alt="" />
          </Link>
        </li>
        <li className="item">
          <Link to="#">Shop</Link>
        </li>
        <li className="item">
          <Link to="#">Gift Cards</Link>
        </li>
        <li className="item">
          <Link to="#">Food Track</Link>
        </li>
        <li className="item">
          <Link to="#">Email Club</Link>
        </li>
        <li className="item">
          <Link to="#">Contact</Link>
        </li>
        <span></span>
        <li className="menu-btn">
          <Link to="#">Menu</Link>
          <FaBookOpen />
        </li>
        {/* <li className="toggle">
          <Link to="#">
            <FaBars />
          </Link>
        </li> */}
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
