import { Link } from 'react-router-dom'

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export default function (props) {
  return (
    <div className="app">
      <header className="primary-header"></header>
      <Navbar className="justify-content-between" bg="primary" variant="dark">
        <Navbar.Brand>List of employees</Navbar.Brand>
        <Nav>
	      <Nav.Link><Link to="/" activeClassName="active"><span style={{ color: 'white' }}>Home</span></Link></Nav.Link>
	    </Nav>
      </Navbar>
      <main>{props.children}</main>
    </div>
  );
}
