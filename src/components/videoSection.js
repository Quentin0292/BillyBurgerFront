import React from "react"
import { GiCow } from "react-icons/gi"
import { FiRefreshCw } from "react-icons/fi"
import { IoIosLeaf } from "react-icons/io"

const videoSection = () => {
  return (
    <div className="video-section">
      <div className="content">
        <h3>Family</h3>
        <div className="content-description">
          <p>
            is rich with flavor. it's people that surround us with gratiture,
            authenticity & values.<span>that satisfy the soul.</span>
          </p>
          <p>
            Our menu includes carefully selected burger options suitable for
            vegetarians and vegans as well as delicious fresh salads.
          </p>
        </div>
        <div className="content-action">
          <button className="action-video">play video</button>
          <button className="action-about">about us</button>
        </div>
        <div className="content-resume">
          <h6>what is important for us ?</h6>
          <div className="content-resume-card">
            <div className="card-item">
              <GiCow />
              <p>precisely selected meat with the best breeders</p>
            </div>
            <div className="card-item">
              <IoIosLeaf />
              <p>only natural products from local farmes</p>
            </div>
            <div className="card-item">
              <FiRefreshCw />
              <p>we use only biodegradable packaging</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default videoSection
