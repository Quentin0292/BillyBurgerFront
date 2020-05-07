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
        <Link to="#">
          <img src={Logo} alt="" />
        </Link>
      </div>
      <div className="links text-secondary">
        <ul className="navbar-links">
          <li>
            <Link to="#">Shop</Link>
          </li>
          <li>
            <Link to="#">delivery</Link>
          </li>
          <li>
            <Link to="#">offers</Link>
          </li>
          <li>
            <Link to="#">reviews</Link>
          </li>
          <li>
            <Link to="#">Contact</Link>
          </li>
          <li>
            <Link to="page2" className="menu">
              <span>Menu</span> <FaBookOpen />
            </Link>
          </li>
        </ul>
      </div>
      <div className="links social-links">
        <li>
          <Link to="#">
            <RiInstagramLine />
          </Link>
        </li>
        <li>
          <Link to="#">
            <RiFacebookCircleLine />
          </Link>
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
            <Link to="#">
              <img src={Logo} alt="" />
            </Link>
          </div>
          <ul>
            <li>
              <Link to="#">Shop</Link>
            </li>
            <li>
              <Link to="#">delivery</Link>
            </li>
            <li>
              <Link to="#">offers</Link>
            </li>
            <li>
              <Link to="#">reviews</Link>
            </li>
            <li>
              <Link to="#">Contact</Link>
            </li>
            <li>
              <Link to="page2" className="menu">
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
