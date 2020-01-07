import React from 'react'

const Hero = props => {
  return(

    <div className="hero is-fullheight">
      <div className="hero-body">
        <div className="container">
          <div className="columns">
            <div className="column is-2 is-offset-5">
              <div className="title has-text-centered">{props.title}</div>
              <div className="subtitle has-text-centered">{props.subtitle}</div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Hero
