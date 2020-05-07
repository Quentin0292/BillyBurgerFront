import React from "react"
import Ingredients from "../components/Images/Ingredients"
import Layout from "../components/Layout/layout"
import { graphql } from "gatsby"
import BurgerMenu from "../components/MenuPage/burger"

const page2 = props => {
  const burgers = props.data.allMongodbTestBurgers.edges
  return (
    <Layout>
      <div id="menu">
        <BurgerMenu allBurgers={burgers} />
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
  }
`
