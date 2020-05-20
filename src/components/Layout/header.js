import { Link } from "gatsby"
import React, { Component } from "react"
import Logo from "../../images/logo-red.png"
import { FaBookOpen } from "react-icons/fa"
import Sidebar from "react-sidebar"
import { Hamburger } from "../icons"
import { RiInstagramLine, RiFacebookCircleLine } from "react-icons/ri"

function SidebarContents() {
  return (
    <div className="sidebar-contents">
      <div className="logo">
        <Link to="/">
          <img src={Logo} alt="Billy Burger's logo" />
        </Link>
      </div>
      <div className="links text-secondary">
        <ul className="navbar-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/location">location</Link>
          </li>
          {/* <li>
            <Link to="/offers">offers</Link>
          </li> */}
          <li>
            <Link to="/reviews">reviews</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/menu" className="menu">
              <span>Menu</span> <FaBookOpen />
            </Link>
          </li>
        </ul>
      </div>
      <div className="links social-links">
        <li>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <RiInstagramLine />
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <RiFacebookCircleLine />
          </a>
        </li>
      </div>
    </div>
  )
}

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sidebarOpen: false,
    }

    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this)
    this.menuOpen = this.menuOpen.bind(this)
  }

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open })
  }
  menuOpen(event) {
    event.preventDefault()
    this.onSetSidebarOpen(true)
  }

  render() {
    return (
      <React.Fragment>
        <Sidebar
          sidebar={<SidebarContents />}
          open={this.state.sidebarOpen}
          onSetOpen={this.onSetSidebarOpen}
          sidebarClassName="sidebar-content"
          styles={{
            sidebar: {
              zIndex: 101,
              position: "fixed",
            },
            overlay: {
              zIndex: 100,
            },
            dragHandle: {
              position: "fixed",
              zIndex: "99999",
            },
          }}
          pullRight={true}
        >
          <span></span>
        </Sidebar>
        <nav className="text-secondary">
          <div className={`logo ${this.state.sidebarOpen ? "hide-logo" : ""}`}>
            <Link to="/">
              <img src={Logo} alt="Billy Burger's logo" />
            </Link>
          </div>
          <ul>
            <li>
              <Link to="/">home</Link>
            </li>
            <li>
              <Link to="/location">location</Link>
            </li>
            {/* <li>
              <Link to="/offers">offers</Link>
            </li> */}
            <li>
              <Link to="/reviews">reviews</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/menu" className="menu">
                <span>Menu</span> <FaBookOpen />
              </Link>
            </li>
          </ul>
          <a href="#mobilenav" id="menu-open" onClick={this.menuOpen}>
            <span className="icon">
              <Hamburger />
            </span>
          </a>
        </nav>
      </React.Fragment>
    )
  }
}

export default Header
