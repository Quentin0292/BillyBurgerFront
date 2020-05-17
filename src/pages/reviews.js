import React from "react"
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
        {/* <div className="review-footer">
          <p>You wan't to leave a review ?</p>
          <button>GO !</button>
        </div> */}
      </section>
    </Layout>
  )
}

export default review
