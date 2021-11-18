
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom'

const Homelink = () => {
    return(
        <Nav.Item>
            <Nav.Link className="nav-link" as={Link} to="/">Home</Nav.Link>
        </Nav.Item>
    )
}

export default Homelink