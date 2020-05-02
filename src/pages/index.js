import React from "react"

import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import HomeContent from "../components/homeContent"
import LocationAndFranchise from "../components/locationAndFranchise"
import Menu from "../components/menu"
import Ingredients from "../components/ingredients"
import VideoSection from "../components/videoSection"
import "../sass/App.scss"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HomeContent />
    <LocationAndFranchise />
    <Menu />
    <Ingredients />
    <VideoSection />

    {/* <Link to="/menu/">Go to menu</Link> */}
  </Layout>
)

export default IndexPage
