import { Tooltip, OverlayTrigger } from 'react-bootstrap'
import LinkedInIcon from '../../../images/linkedinsvg'

const LinkedInInfo = () => {

    const tooltip = (props) => {
        return (
            <Tooltip id="resume-tooltip" {...props}>
                https://www.linkedin.com/in/trenton-rhines-8060ab1b8
            </Tooltip>
        )
    }

    return (
        <OverlayTrigger
            placement="bottom"
            delay={{ show: 50, hide: 50 }}
            overlay={tooltip}
        >
                    <a href="https://www.linkedin.com/in/trenton-rhines-8060ab1b8">
                        <div className="flex-centered info-style">
                            <LinkedInIcon />
                        </div>
                        <div className="flex-centered info-style">
                            <p>Linked In</p>
                        </div>
                    </a>
        </OverlayTrigger>
    )
}

export default LinkedInInfo