import React from "react"
import Layout from "../components/Layout/layout"
import Contact from "../components/ContactPage/contact"
import CallToAction from "../components/ContactPage/callToAction"

const contact = () => {
  return (
    <Layout>
      <Contact />
      <CallToAction />
    </Layout>
  )
}

export default contact
