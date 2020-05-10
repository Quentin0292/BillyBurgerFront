import React from "react"
import Layout from "../components/Layout/layout"
import photo from "../images/shop-photo.jpg"

const shop = props => {
  return (
    <Layout>
      <div id="location">
        <div className="hero-container">
          <div className="hero-title">
            <h1>san francisco</h1>
          </div>
        </div>
        <div className="location-container">
          <div className="location-resume">
            <h2>hours & location</h2>
            <div className="location-information">
              <span>705 Divisadero St,</span>
              <span>San Francisco, CA 94117</span>
              <span>(415) 231-6993</span>
              <span>billy-burger@4505meats.com</span>
            </div>
            <div className="location-text">
              <p>Billy Burger is open 7 days a week.</p>
              <p>open 7 days a week 10:30 AM - 10:00 PM</p>
              <p>
                Come on in and order ath the counter or{" "}
                <span>pre-order online for pick up</span> at a later date or
                give us a call to secure your Q! You can also have our smoked
                meaty deliciousness delivered to your doorstep with one of our
                third-party delivery apps.
              </p>
              <p>Thank you !</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default shop
