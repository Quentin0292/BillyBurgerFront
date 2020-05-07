import React from "react"
import PropTypes from "prop-types"

const salad = props => {
  // display data via props
  // console.log(props.allBurgers)
  return (
    <div id="burger-menu">
      <div className="all-burgers">
        {props.allSalads.map(burger => (
          <div className="burger-card" key={burger.node.id}>
            <div className="burger-picture">
              <img
                src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimg1.cookinglight.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F4_3_horizontal_-_1200x900%2Fpublic%2Fupdated_main_images%2F1301-fuji-apple-chicken-salad-x.jpg%3Fitok%3DFjTIFthc"
                alt="burger picture"
              />
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
