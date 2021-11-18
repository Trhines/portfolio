import React, { useState } from 'react'
import './index.css'

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

import fitnessTracker from '../../images/fitnessTracker.png'
import techBlog from '../../images/techBlog.jpg'
import noteTaker from '../../images/noteTaker.jpg'
import weatherApp from '../../images/weatherApp.png'

const MyWork = () => {
    const projects = [
        {img: fitnessTracker, title:"Fitness Tracker", description:"A way to co create workouts and track your fitness progress.", webLink:"https://frozen-brook-08177.herokuapp.com/", github:"https:github.com/Trhines/Fitness-Tracker"},
        {img: techBlog, title:"Tech Blog", description:"A simple blog website where you can create and edit posts and comments.", webLink:"https://techblogwebsite.herokuapp.com/", github:"https://github.com/Trhines/Tech-Blog"},
        {img: noteTaker, title:"Note Taker", description:"A simple tool to create and keep track of notes.", webLink:"https://obscure-savannah-02455.herokuapp.com/", github:"https://github.com/Trhines/Note-taker.git"},
        {img: weatherApp, title:"Weather Dashboard", description:"This app displays weather forcasts form cities around the world.", webLink:"https://trhines.github.io/weather-dashboard/", github:"https://github.com/Trhines/weather-dashboard"},
        // {img:, title:, description:, webLink:, github:},
    ]

    const [projectState] = useState(projects.map((project)=>{
        return(
            <Card key = {project.title} style={{ width: '18rem' }}>
            <a className="imgLink" href={project.webLink}>
                <Card.Img variant="top" src={project.img}/>
            </a>
                <Card.Body>
                    <Card.Title>{project.title}</Card.Title>
                    <Card.Text>{project.description}</Card.Text>
                    <Button variant="secondary" size="sm" href={project.github}>GitHub</Button>
                    {/* <div className="linkContainer">
                        <Button variant="primary" href={project.github}>GitHub</Button>
                    </div> */}
                </Card.Body>
            </Card>
        )
    }))
    return (
        <div className="cardContainer">{projectState}</div>
    )
}

export default MyWork


