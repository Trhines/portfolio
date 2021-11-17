import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom'

const MyWorklink = (props) => {
    return(
        <Nav.Item>
            <Nav.Link className="nav-link" ref={props.workRef} as={Link} to="/myWork">My Work</Nav.Link>
        </Nav.Item>
    )
}

export default MyWorklink