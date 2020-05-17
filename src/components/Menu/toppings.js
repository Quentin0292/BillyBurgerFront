import React from "react"
import { useStaticQuery, graphql } from "gatsby"

export default () => {
  const data = useStaticQuery(graphql`
    query {
      allMongodbTestToppings {
        edges {
          node {
            name
            id
          }
        }
      }
    }
  `)

  const allToppings = data.allMongodbTestToppings.edges

  return (
    <div id="toppings-menu">
      <ul>
        {allToppings.map(topping => (
          <li key={topping.node.id}>{topping.node.name}</li>
        ))}
      </ul>
    </div>
  )
}
