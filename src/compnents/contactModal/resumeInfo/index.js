import { Tooltip, OverlayTrigger } from 'react-bootstrap'
import ResumeIcon from '../../../images/resumesvg'
import Resume from '../../../images/Resume.pdf'

const ResumeInfo = () => {

    const tooltip = (props) => {
        return (
            <Tooltip id="resume-tooltip" {...props}>
                resume.pdf
            </Tooltip>
        )
    }

    return (
        <OverlayTrigger
            placement="bottom"
            delay={{ show: 50, hide: 50 }}
            overlay={tooltip}
        >
            <a href={Resume}>
                <div className="flex-centered info-style">
                    <ResumeIcon />
                </div>
                <div className="flex-centered info-style">
                    <p>My Resume</p>
                </div>
            </a>
        </OverlayTrigger>
    )
}

export default ResumeInfo



