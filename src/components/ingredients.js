import React from "react"
import IngredientsPicture from "../images/ingredients.png"
import { FaCheckCircle } from "react-icons/fa"

const Ingredients = () => {
  return (
    <div className="ingredients-section">
      <h1>
        <span>best quality</span>
        <span>ingredients</span>
      </h1>
      <div className="ingredients-list">
        <div className="ingredients-left">
          <div className="ingredients-item">
            <h3>artisan buns</h3>
            <ul>
              <li>
                <FaCheckCircle /> Available gluten-free
              </li>
              <li>
                <FaCheckCircle /> Custom recipe
              </li>
              <li>
                <FaCheckCircle /> Mode cocally
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
        </div>
        <div className="ingredients-picture">
          <img src={IngredientsPicture} alt="" />
        </div>
        <div className="ingredients-right">
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
          <span>sed nec consequat lorem. Phasellus</span>
          <span>convallis ante eu augue</span>
        </div>
        <button>read more</button>
      </div>
    </div>
  )
}

export default Ingredients