import React from "react"
import Layout from "../components/Layout/layout"
import { graphql } from "gatsby"
import BurgerMenu from "../components/MenuPage/burger"
import SaladMenu from "../components/MenuPage/salad"
import Toppings from "../components/MenuPage/toppings"
import Sauces from "../components/MenuPage/sauces"
import FreeSides from "../components/MenuPage/freeSides"

const page2 = props => {
  // keep all data from mongodb with graphql and send via props in my burgerMenu component
  const burgers = props.data.allMongodbTestBurgers.edges
  const salads = props.data.allMongodbTestSalads.edges
  const toppings = props.data.allMongodbTestToppings.edges
  const sauces = props.data.allMongodbTestSauces.edges
  const freeSides = props.data.allMongodbTestFreeSides.edges
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
        <h3>
          2. Choose your toppings <span>0.80$ each or 3 for 1.95$</span>
        </h3>
        <Toppings allToppings={toppings} />
        <h3>
          3. Choose your 2 free sauces{" "}
          <span>served on the side - extra sauces 0.50$ each</span>
        </h3>
        <Sauces allSauces={sauces} />
        <h3>
          4. Choose 1 Free side{" "}
          <span>additional sides 1.95$ each, *1.50$ surcharge</span>
        </h3>
        <FreeSides allFreeSides={freeSides} />
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
    allMongodbTestToppings {
      edges {
        node {
          name
          id
        }
      }
    }
    allMongodbTestSauces {
      edges {
        node {
          name
          id
        }
      }
    }
    allMongodbTestFreeSides {
      edges {
        node {
          name
          id
        }
      }
    }
  }
`
