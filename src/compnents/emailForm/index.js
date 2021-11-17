import React from "react"
import { useState } from "react"
import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import InputGroup from "react-bootstrap/InputGroup"
import "./index.css"
import { CloseButton } from "react-bootstrap"

const EmailForm = (props) => {

    const [emailData, setEmailData] = useState({to:"", subject:"", body:""})

    const handleEmailChange = (event) => {
        const { name, value } = event.target
        setEmailData({...emailData, [name]: value})
    }

    const sendEmail = async (event) => {
        const response = await fetch('https:/safe-savannah-86528.herokuapp.com/send', {
            method: 'POST',
            body: emailData,
            headers: { 
                'Content-Type': 'application/json',
            },
          });
            props.closeModal()
    }

    return (
        <Modal show={props.showStatus} centered>
            <Form>
            <Modal.Header className="custom-inputgroup">
                New Message
                <CloseButton variant="white" onClick={props.closeModal}/>
            </Modal.Header>
            <Modal.Body>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <InputGroup>
                        <InputGroup.Text className="custom-inputgroup">Subject:</InputGroup.Text>
                        <Form.Control className="custom-inputgroup" type="email" name="subject" onChange={(e)=>handleEmailChange(e)} placeholder="name@example.com" />
                    </InputGroup>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Control className="custom-inputgroup" as="textarea" rows={5} name="body" onChange={(e)=>handleEmailChange(e)} />
                </Form.Group>
            </Modal.Body>
            <Modal.Footer className="custom-inputgroup">
                <Button onClick={()=>sendEmail()}>send</Button>
            </Modal.Footer>
            </Form>
        </Modal>
    )
}

export default EmailForm