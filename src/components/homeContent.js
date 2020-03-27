import React from "react"
import Burger from "../images/burger-test.png"
import { GiShinyApple } from "react-icons/gi"
import { FaPagelines, FaPepperHot } from "react-icons/fa"
import { IoMdEgg } from "react-icons/io"

const homeContent = () => {
  return (
    <div className="home-content">
      <section className="home-info">
        <span className="btn-new">new</span>
        <h1 className="home-title">the double decker</h1>
        <div className="home-spicy">
          <FaPepperHot />
          <FaPepperHot />
          <FaPepperHot className="not-spicy" />
          <FaPepperHot className="not-spicy" />
          <FaPepperHot className="not-spicy" />
          <span>Spicy</span>
        </div>
        <p className="home-description">
          Sed new consequat lorem, phasellus convaliis ante eu augue finibus
          maximus. In inperdiet non ex id ultricies. Suspendies ac diam id elit
          loreeet portitior. Proin quis totrotr nisi
        </p>
        <div className="home-ingredient">
          <div className="ingredient-title">Ingredients</div>
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
        <img className="home-burger" src={Burger} alt="" />
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
