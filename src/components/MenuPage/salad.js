import React from "react"

const salad = props => {
  // display data via props
  // console.log(props.allBurgers)
  return (
    <div id="burger-menu">
      <div className="all-burgers">
        {props.allSalads.map(burger => (
          <div className="burger-card" key={burger.node.id}>
            <div className="burger-picture">
              <img src={burger.node.imageURL} alt="burger" />
            </div>
            <div className="burger-info">
              <h4>{burger.node.name}</h4>
              <p>{burger.node.description}</p>
            </div>
            <div className="burger-order">
              <span>{burger.node.price} $</span>
              <span className="btn-order">To Order</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default salad
