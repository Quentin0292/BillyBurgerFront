import React from "react"
import DeliveryPics from "../images/delivery.png"
import FranchisePics from "../images/franchise.png"

const locationAndFranchise = () => {
  return (
    <div id="loc-and-franchise">
      <div className="info-card">
        <div className="info-content">
          <h2>realy faaaaaaast delivery !</h2>
          <p>
            In imperdiet non ex id ultricies. Suspendisse ac dia id elit looreet
            partitor. Proin quis tarter nisi
          </p>
          <button className="btn-location">find your location</button>
        </div>
        <div className="info-pics">
          <img className="delivery" src={DeliveryPics} alt="" />
        </div>
      </div>
      <div className="info-card">
        <div className="info-pics">
          <img className="franchise" src={FranchisePics} alt="" />
        </div>
        <div className="info-content">
          <h2>don't wait become one of us now !</h2>
          <p>
            Mauris sed nisl at massa vehicula tristrique Integer lorem eros,
            vestibuluti ac ante non, consectetur hendrerit lacus.
          </p>
          <button className="btn-franchise">franchise opportunity</button>
        </div>
      </div>
    </div>
  )
}

export default locationAndFranchise
