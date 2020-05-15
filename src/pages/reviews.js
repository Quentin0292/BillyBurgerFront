import React from "react"
import Layout from "../components/Layout/layout"

const review = props => {
  return (
    <Layout>
      <section id="review">
        <div className="review-title">
          <h3>Best Burger in San Francisco ?</h3>
          <h1>reviews</h1>
        </div>
        <div className="review-content">
          {/* TODO : faire un component review card qui render automatiquement le contenu d'une review en fonction de ce qui est ajouté dans l'API */}
          <div className="review-card">
            <blockquote>
              <cite>
                It’s hard to fault The Billy Burger: the beautiful restaurant,
                great service and vast amount of choice on the menu generally
                always make for a great meal – and with that number of breads,
                patties, toppings, sauces and sides to choose from, you could
                probably eat there every week of your life and never have
                exactly the same order. Pretty impressive.
              </cite>
            </blockquote>
            <span>- los angeles bites</span>
          </div>
          <div className="review-card">
            <blockquote>
              <cite>
                The meat comes from butcher Ruby and White's; the buns are
                artisan ciabatta; ingredients are locally sourced - no wonder
                this is the best place to eat burgers in Los Angeles.
              </cite>
            </blockquote>
            <span>- the independent</span>
          </div>
          <div className="review-card">
            <blockquote>
              <cite>
                The Billy Burger is, in fact, the burger king when it comes to
                offering the best food of its kind in Los Angeles.
              </cite>
            </blockquote>
            <span>365 losangeles.com</span>
          </div>
          <div className="review-card">
            <blockquote>
              <cite>
                I can't name a better burger in the city ... and with a good
                soundtrack to eat to, always good music in here. We were
                definitely two stuffed and happy customers.
              </cite>
            </blockquote>
            <span>- los angeles eating adventures</span>
          </div>
          <div className="review-card">
            <blockquote>
              <cite>
                There will always be demand for great burgers and the Billy
                Burger serves the best burgers in LA.
              </cite>
            </blockquote>
            <span>la culture</span>
          </div>
          <div className="review-card">
            <blockquote>
              <cite>
                I thought I would start with the best of the best. The Billy
                Burger like getting a McDonals but 100,000,000,000 times better.
              </cite>
            </blockquote>
            <span>- abigail's food blog</span>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default review
