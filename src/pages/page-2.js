import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BurgerItem from "../components/burgerItem"

import { graphql } from "gatsby"

const SecondPage = ({ data }) => {
  // const { Name, description, price, Image } = data.strapiBurgers

  return (
    <Layout>
      <SEO title="Page two" />
      <h1>Our burgers</h1>
      {data.allStrapiBurgers.edges.map(burger => {
        return <BurgerItem key={burger.node.strapiId} burger={burger} />
      })}
      {/* <h4>{Name}</h4>
      <p>{description}</p>
      <p>{price}$</p>
      <img src={Image.publicURL} alt="" /> */}
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default SecondPage

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
