import React from "react"
import CardPicture from "../../images/card.jpg"

export default () => {
  return (
    <div id="contact" style={{ marginTop: `110px`, padding: `50px 80px` }}>
      <div className="contact-info">
        <div className="info">
          <span>questions, comments, praise or criticism</span>
          <h3>get in touch</h3>
          <p>
            Drops us a message via the form below and we promise you will
            receive a personal reply. We value all constructive comments and
            acts on them to improve our restaurants
          </p>
          <p>
            Want to book a table ? You can book for any number of people at any
            time. Please use the form below to get in touch. Remember to tell us
            data, time and for how many people you'd like to book. For the same
            day bookins please call the restaurant directly as we can't
            guarantee an immediate reply. Thank you!
          </p>
        </div>
        <div className="form">
          <form action="#">
            <div className="field">
              <label>
                <span>Name</span>
                <div className="input-border">
                  <input
                    type="text"
                    className="field-box"
                    name="name"
                    id="name"
                    required
                  />
                </div>
              </label>
            </div>
            <div className="field">
              <label>
                <span>Lastname</span>
                <div className="input-border">
                  <input
                    type="text"
                    className="field-box"
                    name="lastname"
                    id="lastname"
                    required
                  />
                </div>
              </label>
            </div>
            <div className="field">
              <label>
                <span>Email</span>
                <div className="input-border">
                  <input
                    type="email"
                    className="field-box"
                    name="email"
                    id="email"
                    required
                  />
                </div>
              </label>
            </div>
            <div className="field">
              <label>
                <span>Subject</span>
                <div className="input-border">
                  <input
                    type="text"
                    className="field-box"
                    name="subject"
                    id="subject"
                    required
                  />
                </div>
              </label>
            </div>
            <div className="field">
              <label>
                <span>Message</span>
                <div className="input-border">
                  <textarea
                    className="field-box area"
                    name="message"
                    id="message"
                    required
                  />
                </div>
              </label>
            </div>
            <div className="field">
              <button type="submit" id="submit">
                SEND
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="contact-resume">
        <div className="info-adress">
          <p>705 Divisadero St, San Francisco, CA 94117</p>
          <p>Phone: (415) 231-6993</p>
          <p>billy-burger@4505meats.com</p>
          <p>Pay only $3 for parking next door with validation (1 hr max).</p>
        </div>
        <div className="info-card">
          <img src={CardPicture} alt="" />
        </div>
      </div>
    </div>
  )
}
