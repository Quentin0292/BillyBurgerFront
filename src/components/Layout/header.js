import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { Component } from "react"
import Logo from "../../images/logo-red.png"
import { FaBars, FaBookOpen } from "react-icons/fa"

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
    }
  }

  toggleActive = () => {
    this.setState(prevState => ({ active: !prevState.active }))

    const navLinks = document.querySelectorAll(".nav-links li")
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = ""
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 +
          0.7}s`
      }
    })
  }

  render() {
    return (
      <header>
        <nav>
          <div className="logo">
            <Link to="#">
              <img src={Logo} alt="" />
            </Link>
          </div>
          <ul className={`nav-links ${this.state.active ? "nav-active" : ""}`}>
            <li>
              <Link to="#">Shop</Link>
            </li>
            <li>
              <Link to="#">Gift Cards</Link>
            </li>
            <li>
              <Link to="#">Food Track</Link>
            </li>
            <li>
              <Link to="#">Email Club</Link>
            </li>
            <li>
              <Link to="#">Contact</Link>
            </li>
            <li>
              <Link to="#" className="menu">
                Menu <FaBookOpen className="menu-logo" />
              </Link>
            </li>
          </ul>
          <div
            className={`burger ${this.state.active ? "toggle" : ""}`}
            onClick={this.toggleActive}
          >
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
        </nav>
      </header>
    )
  }
}

export default Header
