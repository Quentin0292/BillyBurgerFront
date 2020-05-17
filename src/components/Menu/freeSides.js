import React from "react"
import { useStaticQuery, graphql } from "gatsby"

export default () => {
  const data = useStaticQuery(graphql`
    query {
      allMongodbTestFreeSides {
        edges {
          node {
            name
            id
          }
        }
      }
    }
  `)

  const allFreeSides = data.allMongodbTestFreeSides.edges

  return (
    <div id="freesides-menu">
      <ul>
        {allFreeSides.map(freeSide => (
          <li key={freeSide.node.id}>{freeSide.node.name}</li>
        ))}
      </ul>
    </div>
  )
}
