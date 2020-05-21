import React from "react"
import { Link } from "gatsby"
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
              Thinly sliced Turkey, crunchy apples, tangy parmesan cheese,
              cranberries, almonds, zookz Sweet Heat Mustard Sauce
            </p>
            <Link to="/menu" className="button-menu">
              View Menu
            </Link>
          </div>
          <div className="picture">
            <img src={Sandwiches} alt="sandwiches" />
          </div>
        </div>
        <div className="menu-burger">
          <div className="content">
            <h2>
              <span>house</span>
              <span>burgers</span>
            </h2>
            <p>
              Caramelized onions, tomatoes, pickels, avocado, white cheddar and
              cheese sauce. Bacon, crispy onion ring, american cheese and bbq
              sauce; Homemade chili, melted cheese, BBQ ranch, caramelized
              onions.
            </p>
            <Link className="button-menu" to="/menu">
              View Menu
            </Link>
          </div>
          <div className="picture">
            <img src={Burger} alt="burger" />
          </div>
        </div>
        <div className="menu-salads">
          <div className="content">
            <h2>
              <span>fresh</span>
              <span>salads</span>
            </h2>
            <p>
              Fresh mixed greens, chicken, black beans, sweet corn, sunflower
              seeds, feta cheese, and Zookz Honey Balsamic Vinaigrette
            </p>
            <Link className="button-menu" to="/menu">
              View Menu
            </Link>
          </div>
          <div className="picture">
            <img src={Salad} alt="salad" />
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
              Grilled cheese, fries, fruit juice & toy. Cheeseburger with
              ketchup, fries, fruit juice & toy. All angus beef patty for your
              pet !
            </p>
            <Link className="button-menu" to="/menu">
              View Menu
            </Link>
          </div>
          <div className="picture">
            <img src={HotDog} alt="hot-dog" />
          </div>
        </div>
        <div className="menu-desserts">
          <div className="content">
            <h2>
              <span>sweet</span>
              <span>desserts</span>
            </h2>
            <p>
              Sed rhancus dolor a nisl iaculis, eu ullamcorper est pellentesque.
              Sed rhancus dolor a nisl iaculis, eu ullamcorper est pellentesque.
              Sed rhancus dolor a nisl iaculis, eu ullamcorper est pellentesque.
            </p>
            <Link className="button-menu" to="/menu">
              View Menu
            </Link>
          </div>
          <div className="picture">
            <img src={IceCream} alt="ice-cream" />
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
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu
