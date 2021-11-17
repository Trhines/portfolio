import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Container from 'react-bootstrap/Container'

import Header from './compnents/navbar'
import Homelink from './compnents/navbar/links/homeLink'
import MyWorklink from './compnents/navbar/links/myWorkLink'
import Experiencelink from './compnents/navbar/links/experienceLink'
import EmailForm from './compnents/emailForm'
import AboutMe from './compnents/aboutMe'
import MyWork from './compnents/myWork'
import Experience from './compnents/experience'


import React, {useState, useEffect, useRef} from 'react'


function App() {
  const [show, setShow] = useState(false)

  const handleShow = () => setShow(true)
  const handleClose = () => setShow(false)

  const workNavRef = useRef()

  return (
    <div>
    <Router>
        <Header>
          <Homelink/>
          <MyWorklink workRef={workNavRef}/>
          <Experiencelink/>
        </Header>
        <Container>
          <EmailForm showStatus={show} closeModal={handleClose}/>
            <Route exact path="/">
              <AboutMe showModal={handleShow} workRef={workNavRef}/>
            </Route>
            <Route exact path="/myWork">
              <MyWork workRef={workNavRef}/>
            </Route>
            <Route exact path="/experience">
              <Experience/>
            </Route>
        </Container>
    </Router>
    </div>
  );
}

export default App;
