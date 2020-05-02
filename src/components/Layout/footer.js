import React from "react"
import {
  AiOutlineInstagram,
  AiOutlineGithub,
  AiOutlineMedium,
  AiOutlineFacebook,
  AiOutlineLinkedin,
} from "react-icons/ai"

const footer = () => {
  return (
    <div className="footer-section">
      <div className="footer-left">
        <p>
          Copyright &copy; {new Date().getFullYear()} by{" "}
          <span>GoodBurger.</span> All Rights Reserved.
        </p>
      </div>
      <div className="footer-right">
        <p>
          Website by{" "}
          <span>
            <a
              href="https://www.quentin-lecocq.fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              Quentin Lecocq
            </a>
          </span>
        </p>
        <ul className="footer-social-media">
          <li>
            <a
              href="https://www.facebook.com/quentin.lecocq.142"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiOutlineFacebook />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/quentiinlecocq/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiOutlineInstagram />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/quentin-lecocq-47b354160/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiOutlineLinkedin />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Quentin0292"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiOutlineGithub />
            </a>
          </li>
          <li>
            <a
              href="https://medium.com/@quentinlecocq"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiOutlineMedium />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default footer
