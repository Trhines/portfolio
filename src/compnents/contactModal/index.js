import './index.css'
import Modal from 'react-bootstrap/Modal'
import CloseButton from 'react-bootstrap/CloseButton'

const ContactModal = (props) => {

    return (
        <Modal show={props.modalState} centered>
            <Modal.Header>
                <Modal.Title>Modal title</Modal.Title>
                <CloseButton variant="white" onClick={props.closeModal}/>
            </Modal.Header>

            <Modal.Body>
                <p>Modal body text goes here.</p>
            </Modal.Body>
        </Modal>
    )
}

export default ContactModal