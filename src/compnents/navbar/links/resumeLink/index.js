import { Tooltip, OverlayTrigger, Nav } from 'react-bootstrap'
import ResumeIcon from '../../../../images/resumesvg'
import Resume from '../../../../images/Resume.pdf'

const resumeLink = (props) => {
    const tooltip = (props) => {
        return(
            <Tooltip className="margin-left" id="resume-tooltip" {...props}>
                Resume
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
                <a className="nav-link" href={Resume}>
                    <ResumeIcon/>
                </a>
            </Nav.Item>
        </OverlayTrigger>
    )
}

export default resumeLink