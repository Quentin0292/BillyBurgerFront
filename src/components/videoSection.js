import React from "react"
// TODO : solutionner le problème du JPG (surement en passant par l'interface Gatsby Image)
import BurgerPics from "../images/burger-section-video.jpg"
import { GiCow, GiAnticlockwiseRotation, GiBarn } from "react-icons/gi"
import { FiRefreshCw, FiTruck } from "react-icons/fi"
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
            Morbi sed molesuada leo. Nam quis lectus convallis, interdum lectus
            sit amet, fringillia sem. In imperdiat non ultricies suspendisse ac
            diam id elit.
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
      <div className="pictures">
        <img src={BurgerPics} alt="" />
      </div>
    </div>
  )
}

export default videoSection
