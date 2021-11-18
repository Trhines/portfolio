import React from 'react'
import './index.css'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

const AboutMe = (props) => {
  return (
      <div className="jumbotron">
        <div>
          <h1 className="display-2">Hi, I'm Trenton Rhines</h1>
          <p className="lead">I'm a full-stack web developer based in Roseville California.</p>
          <div className="btn-container">
            <Button varient="primary" onClick={props.showModal} >Message Me</Button>
            <Button onClick={()=>props.workRef.current.focus()} as={Link} varient="primary" to="/myWork">My Work</Button>
          </div>
        </div>
      </div>
  )
}

export default AboutMe
