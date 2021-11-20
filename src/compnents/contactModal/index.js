import './index.css'
import Modal from 'react-bootstrap/Modal'
import CloseButton from 'react-bootstrap/CloseButton'

import ResumeInfo from './resumeInfo'
import EmailInfo from './emailInfo'
import GithubInfo from './githubInfo'
import LinkedInInfo from './linkedinInfo'

const ContactModal = (props) => {

    return (
        <Modal show={props.modalState} centered>
            <Modal.Header>
                <Modal.Title>My Info</Modal.Title>
                <CloseButton variant="white" onClick={props.closeModal} />
            </Modal.Header>

            <Modal.Body>
                <div className="info-card">
                    <ResumeInfo/>
                </div>
                <div className="info-card">
                    <EmailInfo/>
                </div>
                <div className="info-card">
                    <GithubInfo/>
                </div>
                <div className="info-card">
                    <LinkedInInfo/>
                </div>
            </Modal.Body>
        </Modal>
    )
}

export default ContactModal