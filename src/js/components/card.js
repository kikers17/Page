import React from 'react'

const Card = props => {
  return(

    <div className="box">
      <div className="title">{props.title}</div>
      <div className="field is-grouped">
        <div className="control">
          <div className="tags has-addons">
            <span className="tag is-black">Type</span>
            <span className="tag">{props.type}</span>
          </div>
        </div>
        <div className="control">
          <div className="tags has-addons">
            <span className="tag is-black">Platform</span>
            <a href={props.link} target="_blank" className="tag">{props.platform}</a>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Card
