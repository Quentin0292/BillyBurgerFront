import React from "react"

import { Link } from "gatsby"
import { GiShinyApple } from "react-icons/gi"
import { FaPagelines, FaPepperHot } from "react-icons/fa"
import { IoMdEgg } from "react-icons/io"
import Image from "../components/Images/homeBurger"

const homeContent = () => {
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
        {/* <Link to="/page2">page 2 </Link> */}

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
          <Image />
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

export default homeContent
