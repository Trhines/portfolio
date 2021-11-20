import { Tooltip, OverlayTrigger, Nav } from 'react-bootstrap'
import GithubIcon from  '../../../../images/githubsvg'

const gitHubLink = () => {

    const tooltip = (props) => {
        return(
            <Tooltip className="margin-left" id="resume-tooltip" {...props}>
                Git Hub
            </Tooltip>
        )
    }

    return (
        <OverlayTrigger
        placement="bottom"
        delay={{ show: 50, hide: 50 }}
        overlay={tooltip}
    >
        <Nav.Item>
            <a className="nav-link" href="https://github.com/trhines">
                <GithubIcon/>
            </a>
        </Nav.Item>
        </OverlayTrigger>
    )
}

export default gitHubLink