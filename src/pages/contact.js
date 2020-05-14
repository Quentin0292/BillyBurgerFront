import React from "react"
import Layout from "../components/Layout/layout"
import Contact from "../components/ContactPage/contact"

const contact = () => {
  return (
    <Layout>
      <Contact />
      <div className="newsletter">
        <h4>subscribe to our newsletter</h4>
        <button>join the billy burger club</button>
        <p>
          you will be sent a validation email (please check your spam mailbox)
          <br />
          Please mark this as safe to continue receiving our newsletter
        </p>
      </div>
    </Layout>
  )
}

export default contact
