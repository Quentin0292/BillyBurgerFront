import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BurgerItem from "../components/burgerItem"

import { graphql } from "gatsby"

const Menu = ({ data }) => {
  return (
    <Layout>
      <SEO title="Page two" />
      <h1>Our burgers</h1>
      {data.allStrapiBurgers.edges.map(burger => {
        return <BurgerItem key={burger.node.strapiId} burger={burger} />
      })}
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default Menu

export const query = graphql`
  query {
    allStrapiBurgers {
      edges {
        node {
          strapiId
          Name
          description
          price
          Image {
            publicURL
            childImageSharp {
              fluid {
                base64
              }
            }
          }
        }
      }
    }
  }
`
