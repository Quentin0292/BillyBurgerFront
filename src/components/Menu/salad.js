import React from "react"
import { useStaticQuery, graphql } from "gatsby"

export default () => {
  const data = useStaticQuery(graphql`
    query {
      allMongodbTestSalads {
        edges {
          node {
            name
            price
            description
            imageURL
          }
        }
      }
    }
  `)

  const allSalads = data.allMongodbTestSalads.edges

  return (
    <div id="burger-menu">
      <div className="all-burgers">
        {allSalads.map(salad => (
          <div className="burger-card" key={salad.node.id}>
            <div className="burger-picture">
              <img src={salad.node.imageURL} alt="burger" />
            </div>
            <div className="burger-info">
              <h4>{salad.node.name}</h4>
              <p>{salad.node.description}</p>
            </div>
            <div className="burger-order">
              <span>{salad.node.price} $</span>
              <span className="btn-order">To Order</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
