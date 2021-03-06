import React from "react"
import { FaCheckCircle } from "react-icons/fa"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "ingredients.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div className="ingredients-section">
      <h1>
        <span>best quality</span>
        <span>ingredients</span>
      </h1>
      <div className="ingredients-picture">
        <Img fluid={data.placeholderImage.childImageSharp.fluid} />
      </div>
      <div className="ingredients-list">
        <div className="ingredients-information">
          <div className="ingredients-item">
            <h3>artisan buns</h3>
            <ul>
              <li>
                <FaCheckCircle /> Available gluten-free
              </li>
              <li>
                <FaCheckCircle /> Custom recipe
              </li>
            </ul>
          </div>
          <div className="ingredients-item">
            <h3>ground Beef</h3>
            <ul>
              <li>
                <FaCheckCircle /> Signature blended beef
              </li>
              <li>
                <FaCheckCircle /> Never frozen
              </li>
            </ul>
          </div>
          <div className="ingredients-item">
            <h3>fresh produce</h3>
            <ul>
              <li>
                <FaCheckCircle /> Made fresh everyday
              </li>
              <li>
                <FaCheckCircle /> Hand-tossed
              </li>
            </ul>
          </div>
          <div className="ingredients-item">
            <h3>Ground Turkey</h3>
            <ul>
              <li>
                <FaCheckCircle /> Ground fresh
              </li>
              <li>
                <FaCheckCircle /> Never frozen
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="ingredients-comment">
        <div>
          <span>Homemade fresh every day with</span>
          <span> quality ingredients</span>
        </div>
        <button>read more</button>
      </div>
    </div>
  )
}
