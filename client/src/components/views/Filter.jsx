import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const FilterEmployees = function (props) {
  return (
    <Navbar>
      <Nav className="mr-auto">
        <NavDropdown
          title={props.state.selected_role_ru}
          id="collasible-nav-dropdown"
        >
          {props.state.roles.map((role) => (
            <NavDropdown.Item onClick={(e) => props.showRole(role)}>
              {role.ru}
            </NavDropdown.Item>
          ))}
        </NavDropdown>
      </Nav>
      <Form inline>
        <div key={`custom-inline`}>
          <Form.Check
            onChange={props.showArchived}
            checked={props.state.archive}
            inline
            label="В архиве"
            type="checkbox"
          />
        </div>
      </Form>
    </Navbar>
  );
};

export default FilterEmployees;
