import "../../App.css";
import React from "react";
import callAPI from "../../libs/api";
import { filter } from "../../libs/filter";
import {
  byName,
  byBirthday,
  byNameReverce,
  byBirthdayReverce,
} from "../../libs/sorter";
import getRoleName from "../../libs/utils";
import { getEmployees, getRoles } from "../../action/employee";
import { toggleName, toggleBirthday } from "../../action/sorter";
import {
  filterEmployees,
  filterArchive,
  selectRole,
} from "../../action/filter";
import Table from "../views/Table";
import Filter from "../views/Filter";
import Container from "react-bootstrap/Container";
import { connect } from "react-redux";
import store from "../../store";
import { withRouter} from "react-router-dom";

class App extends React.Component {
  constructor() {
    super();
    this.showRole = this.showRole.bind(this);
    this.showArchived = this.showArchived.bind(this);
    this.sorter = this.sorter.bind(this);
    this.link = this.link.bind(this);
  }

  componentDidMount() {
    callAPI("/find-every-employee")
      .then((body) => {
        let uniqueRole = [];

        let Unique = (arr) => {
          let uniques = [];
          let itemsFound = {};
          for (let val of arr) {
            if (itemsFound[val.name]) {
              continue;
            }
            uniques.push(val);
            itemsFound[val.name] = true;
          }
          return uniques;
        };

        let employees = body.data.map((employee) => {
          if (employee.role !== undefined) {
            employee.role = {
              name: employee.role,
              ru: getRoleName(employee.role),
            };
            return employee;
          }
          return employee;
        });

        let roles = employees.map((item) => {
          if (item.role !== undefined) return item.role;
        });

        roles.push({ name: "*", ru: "Все должности" });
        uniqueRole = Unique(roles);

        store.dispatch(getEmployees(employees));
        store.dispatch(getRoles(uniqueRole));
        store.dispatch(filterEmployees(employees));
        store.dispatch(selectRole("*", "Все должности"));
        store.dispatch(filterArchive(true));
      })
      .catch((err) => console.log(err));
  }

  showRole(role) {
    let employees = filter(this.props.employees, role.name, this.props.archive);

    store.dispatch(selectRole(role.name, role.ru));
    store.dispatch(filterEmployees(employees));
  }

  showArchived(e) {
    let archived = filter(
      this.props.employees,
      this.props.selected_role,
      e.target.checked
    );
    store.dispatch(filterEmployees(archived));
    store.dispatch(filterArchive(!this.props.archive));
  }

  sorter(param) {
    let result;
    if (param == "name" && this.props.name === false) {
      result = byName(this.props.filtered);
    }

    if (param == "name" && this.props.name === true) {
      result = byNameReverce(this.props.filtered);
    }

    if (param == "birthday" && this.props.birthday === false) {
      result = byBirthday(this.props.filtered);
    }

    if (param == "birthday" && this.props.birthday === true) {
      result = byBirthdayReverce(this.props.filtered);
    }

    store.dispatch(filterEmployees(result));
    store.dispatch(
      toggleName(param === "name" ? !this.props.name : this.props.name)
    );
    store.dispatch(
      toggleBirthday(
        param === "birthday" ? !this.props.birthday : this.props.birthday
      )
    );
  }

  link(id) {
    this.props.history.push(id)
  }

  render() {
    return (
      <div className="App">
        <Container>
          <Filter
            state={this.props}
            showRole={this.showRole}
            showArchived={this.showArchived}
          />
          <Table state={this.props} sorter={this.sorter} link={this.link}/>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = function (store) {
  return {
    employee: store.employeeState.employee,
    employees: store.employeeState.employees,
    roles: store.employeeState.roles,
    filtered: store.filterState.filtered,
    role: store.filterState.role,
    archive: store.filterState.archive,
    selected_role_ru: store.filterState.selected_role_ru,
    selected_role: store.filterState.selected_role,
    name: store.sorterState.name,
    birthday: store.sorterState.birthday,
  };
};

export default withRouter(connect(mapStateToProps)(App));
