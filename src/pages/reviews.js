import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout/layout"
import AllReviews from "../components/Review/review"

const review = props => {
  return (
    <Layout>
      <section id="review">
        <div className="review-header">
          <h3>Best Burger in San Francisco ?</h3>
          <h1>reviews</h1>
        </div>
        <AllReviews />
        <div className="review-footer">
          <h4>You wan't to leave a review ?</h4>
          <Link to="/contact">Click here !</Link>
        </div>
      </section>
    </Layout>
  )
}

export default review
