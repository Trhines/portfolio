
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Container from 'react-bootstrap/Container'

import Header from './compnents/navbar'
import AboutMe from './compnents/aboutMe'
import MyWork from './compnents/myWork'
import Experience from './compnents/experience'
import ContactModal from './compnents/contactModal';


import React, {useState} from 'react'


function App() {

  const [contactState, setContactState] = useState(false)
  const showContactModal = () => {setContactState(true)}
  const closeContactModal = () => {setContactState(false)}

  return (
    <div>
    <Router>

        <Header>
        </Header>

        <Container>
          <ContactModal modalState={contactState} closeModal={closeContactModal}/>
            <Route exact path="/">
              <AboutMe showModal={showContactModal} />
            </Route>
            <Route exact path="/myWork">
              <MyWork/>
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
