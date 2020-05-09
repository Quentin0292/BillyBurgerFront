import React from "react"
import { useStaticQuery, graphql } from "gatsby"

export default () => {
  const data = useStaticQuery(graphql`
    query {
      allMongodbTestSauces {
        edges {
          node {
            name
            id
          }
        }
      }
    }
  `)

  const allSauces = data.allMongodbTestSauces.edges

  return (
    <div id="sauces-menu">
      <ul>
        {allSauces.map(sauce => (
          <li key={sauce.node.id}>{sauce.node.name}</li>
        ))}
      </ul>
    </div>
  )
}
