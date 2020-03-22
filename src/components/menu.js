import React from "react"
import Sandwiches from "../images/sandwiches.png"
import Burger from "../images/burger-menu.png"
import Salad from "../images/salad.png"
import HotDog from "../images/hotdog.png"
import IceCream from "../images/ice-crem.png"

const Menu = () => {
  return (
    <div className="menu-section">
      <div className="first-menu-section">
        <div className="menu-sandwiches">
          <div className="content">
            <h2>
              <span>sand-</span>
              <span>wiches</span>
            </h2>
            <p>
              Morbi sed molesuada leao. Nom quis lectus convallis, interdum,
            </p>
            <p>
              lectus, si atel, fringila sem. In imperdiet non ultricies
              suspendisse ac diam id elit
            </p>
            <button>View Menu</button>
          </div>
          <div className="picture">
            <img src={Sandwiches} alt="" />
          </div>
        </div>
        <div className="menu-burger">
          <div className="content">
            <h2>
              <span>house</span>
              <span>burgers</span>
            </h2>
            <p>
              Consequat lorem, phasellus convallis ante augue finibus maximus.
              In imperdiet non ultricies suspendisse ac diam id elit laoreet.
            </p>
            <p>
              Cras ac metus vel sem mlestie aliquet porta. Mauris ulticies nulla
              ac eros ultriceis.
            </p>
            <button>View Menu</button>
          </div>
          <div className="picture">
            <img src={Burger} alt="" />
          </div>
        </div>
        <div className="menu-salads">
          <div className="content">
            <h2>
              <span>fresh</span>
              <span>salads</span>
            </h2>
            <p>
              Cras a dui congue, ultrices erat id, in imperdiet non ultricies.
            </p>
            <p>
              Susendisse ac diam id elit cursus lectus praesent sit amet
              scelerisque mauris.
            </p>
            <button>View Menu</button>
          </div>
          <div className="picture">
            <img src={Salad} alt="" />
          </div>
        </div>
      </div>
      <div className="second-menu-section">
        <div className="menu-kids">
          <div className="content">
            <h2>
              <span>for all</span>
              <span>kids</span>
            </h2>
            <p>
              Mauris sed nisl at massa vehicula tristique. Integer lorem eros,
              vestibuum ac ante non, consectetur hendrerit locus.
            </p>
            <button>View Menu</button>
          </div>
          <div className="picture">
            <img src={HotDog} alt="" />
          </div>
        </div>
        <div className="menu-desserts">
          <div className="content">
            <h2>
              <span>sweet</span>
              <span>dessert</span>
            </h2>
            <p>
              Sed rhancus dolor a nisl iaculis, eu ullamcorper est pellentesque.
            </p>
            <button>View Menu</button>
          </div>
          <div className="picture">
            <img src={IceCream} alt="" />
          </div>
        </div>
        <div className="menu-more">
          <div className="content">
            <h2>
              <span>and</span>
              <span>much,</span>
              <span>much</span>
              <span>more...</span>
            </h2>

            <button>></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu
