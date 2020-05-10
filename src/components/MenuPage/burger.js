import React from "react"
import { useStaticQuery, graphql } from "gatsby"

export default () => {
  const data = useStaticQuery(graphql`
    query {
      allMongodbTestBurgers {
        edges {
          node {
            name
            price
            desc
            imageURL
            vegan
          }
        }
      }
    }
  `)

  const allBurgers = data.allMongodbTestBurgers.edges

  return (
    <div id="burger-menu">
      <div className="all-burgers">
        {allBurgers.map(burger => {
          return (
            <div className="burger-card" key={burger.node.id}>
              <div className="burger-picture">
                <img src={burger.node.imageURL} alt="burger" />
              </div>
              <div className="burger-info">
                <h4>
                  {burger.node.name}{" "}
                  {burger.node.vegan ? <span>vegan</span> : null}
                </h4>
                <p>{burger.node.desc}</p>
              </div>
              <div className="burger-order">
                <span>{burger.node.price} $</span>
                <span className="btn-order">To Order</span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
