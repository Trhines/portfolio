import { Tooltip, OverlayTrigger, Nav } from 'react-bootstrap'
import LinkedInIcon from '../../../../images/linkedinsvg'

const linkedInLink = () => {
    const tooltip = (props) => {
        return(
            <Tooltip className="margin-left" id="resume-tooltip" {...props}>
                Linkedin
            </Tooltip>
        )}
    return (
        <OverlayTrigger
            placement="bottom"
            delay={{ show: 50, hide: 50 }}
            overlay={tooltip}
        >
        <Nav.Item>
            <a className="nav-link" href="https://www.linkedin.com/in/trenton-rhines-8060ab1b8">
                <LinkedInIcon/>
            </a>
        </Nav.Item>
        </OverlayTrigger>
    )
}

export default linkedInLink