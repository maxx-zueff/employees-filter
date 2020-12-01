import logo from "./logo.svg";
import "./App.css";

import React from "react";
import axios from "axios";

const callAPI = function (url, method = "get", data = {}) {
  return axios({
    method: method,
    url: url,
    data: data,
  });
};

const filterByRole = function (docs, param) {
  return docs.filter((doc) => doc.role == param);
};

const filterByArchive = function (docs, param) {
  return docs.filter((doc) => doc.isArchive == param);
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [],
    };
    this.filterByDriver = this.filterByDriver.bind(this);
  }

  componentDidMount() {
    callAPI("/find-every-employee")
      .then((body) => this.setState({ employees: body.data }))
      .catch((err) => console.log(err));
  }

  filterByDriver() {
    let drivers = filterByRole(this.state.employees, "driver");
    this.setState({ employees: drivers });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <ul>
            {this.state.employees.map((employee) => (
              <li>{employee.name}</li>
            ))}
          </ul>
          <button onClick={this.filterByDriver}>Activate Lasers</button>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Изучай React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
