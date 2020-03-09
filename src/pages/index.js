import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout/layout"
import Image from "../components/image"
import Header from "../components/Layout/header"
import SEO from "../components/seo"

import "../sass/App.scss"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div id="main-content">
      <Header />
    </div>

    {/* <Link to="/menu/">Go to menu</Link> */}
  </Layout>
)

export default IndexPage
