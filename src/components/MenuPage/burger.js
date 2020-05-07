import React from "react"
import PropTypes from "prop-types"

const burger = props => {
  console.log(props.allBurgers)
  return (
    <div id="burger-menu">
      <h1>Our Burgers</h1>
      <div className="all-burgers">
        {props.allBurgers.map(burger => (
          <div className="burger-card" key={burger.node.id}>
            <div className="burger-picture">
              <img src={burger.node.imageURL} alt="burger picture" />
            </div>
            <div className="burger-info">
              <h3>{burger.node.name}</h3>
              <p>{burger.node.desc}</p>
            </div>
            <div className="burger-order">
              <span>{burger.node.price} $</span>
              <span>To Order</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default burger
