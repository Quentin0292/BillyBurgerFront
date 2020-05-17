import React from "react"
import { graphql, useStaticQuery } from "gatsby"

export default () => {
  const data = useStaticQuery(graphql`
    query {
      allMongodbTestReviews {
        edges {
          node {
            id
            client
            review
          }
        }
      }
    }
  `)
  const allReviews = data.allMongodbTestReviews.edges
  return (
    <div className="review-content">
      {allReviews.map(review => (
        <div className="review">
          <blockquote>{review.node.review}</blockquote>
          <span>- {review.node.client}</span>
        </div>
      ))}
    </div>
  )
}
