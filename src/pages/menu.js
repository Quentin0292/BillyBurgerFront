import React from "react"
import Layout from "../components/Layout/layout"
import { graphql } from "gatsby"
import BurgerMenu from "../components/MenuPage/burger"
import SaladMenu from "../components/MenuPage/salad"

const page2 = props => {
  // keep all data from mongodb with graphql and send via props in my burgerMenu component
  const burgers = props.data.allMongodbTestBurgers.edges
  const salads = props.data.allMongodbTestSalads.edges
  return (
    <Layout>
      <div id="menu">
        <h3>
          1. Choose your own burger{" "}
          <span>include 1 free side and 2 free sauces</span>
        </h3>
        <em style={{ fontSize: "12px" }}>
          100% 6oz British prime beef patties using selected cuts from grass
          reared cattle on independent farms. We cook to medium but please tell
          us how you like it.
        </em>
        <BurgerMenu allBurgers={burgers} />
        <h3>
          1<small>bis</small>. Maybe u want fresh salads ?{" "}
          <span>include 1 free side and 2 free sauces</span>
        </h3>
        <SaladMenu allSalads={salads} />
      </div>
    </Layout>
  )
}

export default page2

export const pageQuery = graphql`
  query {
    allMongodbTestBurgers {
      edges {
        node {
          name
          price
          desc
          imageURL
        }
      }
    }
    allMongodbTestSalads {
      edges {
        node {
          name
          price
          description
        }
      }
    }
  }
`
