import React from "react"

const freeSides = props => {
  console.log(props.allFreeSides)
  return (
    <div id="freesides-menu">
      <ul>
        {props.allFreeSides.map(freeSide => (
          <li>{freeSide.node.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default freeSides
