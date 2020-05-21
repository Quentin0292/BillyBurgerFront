import React from "react"

const locationAndFranchise = () => {
  return (
    <div id="loc-and-franchise">
      <div className="info-card">
        <div className="info-content">
          <h2>realy faaaaaaast delivery !</h2>
          <p>
            We're thrilled to announce that we NOW DELIVER through Uber Eats,
            Deliveroo and Door Dash! Order today!
          </p>
          <button className="btn-location">find your location</button>
        </div>
      </div>
      <div className="info-card">
        <div className="info-content">
          <h2>Discover local burgers & beers</h2>
          <p>
            Find out more about the local special burgers, beers and more
            serving at Billy Burgers. We love working with small independant
            producers.
          </p>
          <button className="btn-shop">Take me there</button>
        </div>
      </div>
      <div className="info-card">
        <div className="info-content">
          <h2>don't wait become one of us now !</h2>
          <p>
            Not Fast Food! Good Food Fast! A franchise concept so good, your
            customers will always come back for more!
          </p>
          <button className="btn-franchise">franchise opportunity</button>
        </div>
      </div>
    </div>
  )
}

export default locationAndFranchise
