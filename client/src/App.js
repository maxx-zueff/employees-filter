import logo from "./logo.svg";
import "./App.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSortAmountDownAlt, faSortAmountUp } from '@fortawesome/free-solid-svg-icons'

import React from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'


export const callAPI = function (url, method = "get", data = {}) {
  return axios({
    method: method,
    url: url,
    data: data,
  });
};

const filterByRole = function (employees, param) {
  if (param == "*" ) return employees;
  return employees.filter((doc) => doc.role == param);
};

const filterByArchive = function (employees, param) {
  return employees.filter((doc) => doc.isArchive == param);
};

const getRoleName = function (role) {
  let name = {
    "driver" : "Курьер",
    "waiter" : "Официант",
    "cook" : "Повар",
    "*" : "Все должности"
  }

  return name[role];
}

export const sorter = {

  byName : function (employees) {
     return employees.sort(function (a, b) {
      let first = a.name
      let second = b.name

      if (first > second) return 1
      else if (second > first) return -1
      return 0
    })
  },

  byBirthday : function (employees) {
    return employees.sort(function (a, b) {
      let first = new Date(a.joinedDate)
      let second = new Date(b.joinedDate)
      return first - second;
    })
  },

  byNameReverce : function (employees) {
    return sorter.byName(employees).reverse()
  },

  byBirthdayReverce : function (employees) {
    return sorter.byBirthday(employees).reverse()
  }
}



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      default: [],
      employees: [],
      roles: [],
      selectedRole: "Все должности"
    };
    this.filterByRole = this.filterByRole.bind(this);
  }

  componentDidMount() {
    callAPI("/find-every-employee")
      .then((body) => {
        let roles = [];
        let uniqueRole = []

        body.data.map((employee) => {
          if (employee.role !== undefined) roles.push(employee.role);
          uniqueRole = [...new Set(roles)];
        })

        this.setState({
          employees: body.data,
          default: body.data,
          roles: uniqueRole
        })
      })
      .catch((err) => console.log(err));
  }

  filterByRole(role) {
    let roles = filterByRole(this.state.default, role);

    this.setState({
      default: this.state.default,
      roles: this.state.roles,
      employees: roles,
      selectedRole: getRoleName(role)
    });
  }


  render() {
    return (
      <div className="App">
        <Navbar>
          <Navbar.Brand href="#home">EmployeesTable</Navbar.Brand>
          <NavDropdown title={this.state.selectedRole} id="collasible-nav-dropdown">
            {this.state.roles.map((role) => (
              <NavDropdown.Item onClick={(e) => this.filterByRole(role)}>{getRoleName(role)}</NavDropdown.Item>
            ))}
            <NavDropdown.Divider />
            <NavDropdown.Item onClick={(e) => this.filterByRole("*")}>Все должности</NavDropdown.Item>
          </NavDropdown>
        </Navbar>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>
                <span style={{paddingRight:5+'px'}}>Имя</span>
                <FontAwesomeIcon icon={faSortAmountDownAlt}></FontAwesomeIcon>
              </th>
              <th>
                <span style={{paddingRight:5+'px'}}>Должность</span>
                {/* <FontAwesomeIcon icon={faSortAmountDownAlt}></FontAwesomeIcon> */}
                <FontAwesomeIcon icon={faSortAmountUp}></FontAwesomeIcon>
              </th>
              <th>Телефон</th>
              <th>Дата рождения</th>
              <th>В архиве</th>
            </tr>
          </thead>
          <tbody>
            {this.state.employees.map((employee, index) => (
              <tr>
                <td>{index}</td>
                <td>{employee.name}</td>
                <td>{getRoleName(employee.role)}</td>
                <td>{employee.phone}</td>
                <td>{employee.birthday}</td>
                <td>{(employee.isArchive) ? "+" : ""}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default App;
