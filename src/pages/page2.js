import React from "react"
import Ingredients from "../components/Images/Ingredients"
import Layout from "../components/Layout/layout"
import { graphql } from "gatsby"

const page2 = props => {
  const burgers = props.data.allMongodbTestBurgers.edges
  return (
    <div>
      welcome to page 2 and our burger name
      {burgers.map(burger => (
        <h2>{burger.node.name}</h2>
      ))}
    </div>
  )
}

export default page2

export const pageQuery = graphql`
  query {
    allMongodbTestBurgers {
      edges {
        node {
          name
        }
      }
    }
  }
`
