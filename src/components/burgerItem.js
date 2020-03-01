import React from "react"

const burgerItem = ({ burger }) => {
  console.log(burger)
  const { Name, description, price, Image } = burger.node
  return (
    <div>
      <h4>{Name}</h4>
      <p>{price}$</p>
      <div>
        <p>{description}</p>
      </div>
      <img src={Image.publicURL} alt="" />
    </div>
  )
}

export default burgerItem
