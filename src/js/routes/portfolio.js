import React from "react"
import Hero from "./../components/hero"
import Card from "./../components/card"

const Portfolio = () => {
  return(
  <div id="portfolio">
    <Hero title="kikers17" subtitle="Portfolio" />
    <section className="section">
      <div className="container">
        <div className="columns">
          <div className="column is-6 is-offset-3">
            <Card title="Cómo convertir HTML a Javascript usando Redom.JS" platform="Medium" type="Post" link="https://medium.com/@kikers17/c%C3%B3mo-convertir-html-a-javascript-usando-redom-js-6b96c52afb81" />
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Portfolio
