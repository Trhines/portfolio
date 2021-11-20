import { Tooltip, OverlayTrigger } from 'react-bootstrap'
import GithubIcon from '../../../images/githubsvg'

const GithubInfo = () => {

    const tooltip = (props) => {
        return (
            <Tooltip id="resume-tooltip" {...props}>
                https://github.com/trhines
            </Tooltip>
        )
    }

    return (
        <OverlayTrigger
            placement="bottom"
            delay={{ show: 50, hide: 50 }}
            overlay={tooltip}
        >
            <a href="https://github.com/trhines">
                <div className="flex-centered info-style">
                    <GithubIcon />
                </div>
                <div className="flex-centered info-style">
                    <p>Github</p>
                </div>
            </a>
        </OverlayTrigger>
    )
}

export default GithubInfo