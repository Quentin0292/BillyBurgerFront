import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout/layout"
import Header from "../components/Layout/header"
import SEO from "../components/seo"
import HomeContent from "../components/homeContent"
import LocationAndFranchise from "../components/locationAndFranchise"
import Menu from "../components/menu"
import Ingredients from "../components/ingredients"
import VideoSection from "../components/videoSection"
import Footer from "../components/Layout/footer"
import "../sass/App.scss"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Header />
    <HomeContent />
    <LocationAndFranchise />
    <Menu />
    <Ingredients />
    <VideoSection />

    {/* <Link to="/menu/">Go to menu</Link> */}
  </Layout>
)

export default IndexPage
