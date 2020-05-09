import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { GiShinyApple } from "react-icons/gi"
import { FaPagelines, FaPepperHot } from "react-icons/fa"
import { IoMdEgg } from "react-icons/io"

export default () => {
  const query = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "burger-test.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div className="home-content">
      <section className="home-info">
        <span className="new">new</span>
        <h1>the double decker</h1>
        <div className="home-spicy">
          <FaPepperHot />
          <FaPepperHot />
          <FaPepperHot className="not-spicy" />
          <FaPepperHot className="not-spicy" />
          <FaPepperHot className="not-spicy" />
          <span>Spicy</span>
        </div>
        <p className="home-description">
          Beef, crispy jambon and Fourme d’Ambert cheese from La Fromagerie, red
          onion relish, tomato, rocket and pickles with homemade rosemary salted
          chips
        </p>

        <div className="home-ingredient">
          <h4>Ingredients</h4>
          <div className="ingredient-list">
            <GiShinyApple />
            <FaPagelines />
            <FaPepperHot />
            <IoMdEgg />
            <span>+3</span>
          </div>
        </div>
        <div className="home-order">
          <button className="desktop-button">order now </button>
          <div>
            <span>$12.99</span>
            <span>$14.99</span>
          </div>
        </div>
      </section>
      <section className="home-photo">
        <div className="home-burger">
          <Img fluid={query.placeholderImage.childImageSharp.fluid} />
        </div>
        <div className="home-nutrition">
          <div className="home-nutrition-card">
            <span>Calories</span>
            <span>Kcal</span>
            <span>1370</span>
          </div>
          <div className="home-nutrition-card">
            <span>Fat</span>
            <span>g</span>
            <span>93</span>
          </div>
          <div className="home-nutrition-card">
            <span>Protein</span>
            <span>g</span>
            <span>85</span>
          </div>
        </div>
      </section>
      <div className="only-mobile">
        <button className="mobile-buton">order now</button>
        <div>
          <span>$12.99</span>
          <span>$14.99</span>
        </div>
      </div>
    </div>
  )
}
