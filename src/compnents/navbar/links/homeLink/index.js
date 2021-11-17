import { propTypes } from 'react-bootstrap/esm/Image'
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom'

const Homelink = (props) => {
    return(
        <Nav.Item>
            <Nav.Link ref={props.homeRef} className="nav-link" as={Link} to="/">Home</Nav.Link>
        </Nav.Item>
    )
}

export default Homelink