import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom'

const Experiencelink = (props) => {
    return(
        <Nav.Item>
            <Nav.Link ref={props.experienceRef} className="nav-link" as={Link} to="/experience">Experience</Nav.Link>
        </Nav.Item>
    )
}

export default Experiencelink