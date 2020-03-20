import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout/layout"
import Header from "../components/Layout/header"
import SEO from "../components/seo"
import HomeContent from "../components/homeContent"
import LocationAndFranchise from "../components/locationAndFranchise"

import "../sass/App.scss"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section id="main-content">
      <Header />
      <HomeContent />
    </section>
    <section id="info-content">
      <LocationAndFranchise />
    </section>

    <Link to="/menu/">Go to menu</Link>
  </Layout>
)

export default IndexPage
