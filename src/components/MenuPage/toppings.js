import React from "react"

const toppings = props => {
  console.log(props.allToppings)
  return (
    <div id="toppings-menu">
      <ul>
        {props.allToppings.map(topping => (
          <li>{topping.node.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default toppings
