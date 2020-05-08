import React from "react"

const sauces = props => {
  console.log(props.allSauces)
  return (
    <div id="sauces-menu">
      <ul>
        {props.allSauces.map(sauce => (
          <li>{sauce.node.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default sauces
