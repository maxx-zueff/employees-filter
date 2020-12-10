import React from "react";
import { connect } from "react-redux";
import store from "../../store";
import { withRouter} from "react-router-dom";
import callAPI from "../../libs/api";
import {getEmployee, getRoles} from "../../action/employee"
import {getId, getName, getRole, getRoleRu, getPhone, getBirthday, getArchive} from "../../action/profile"
import Employee from "../views/Employee"
import getRoleName from "../../libs/utils";

class EmployeeContainer extends React.Component {

	constructor(props){  
		super(props)
		this.onChangePhone = this.onChangePhone.bind(this);  
		this.onChangeName = this.onChangeName.bind(this);  
		this.onChangeRole = this.onChangeRole.bind(this);  
		this.onChangeBirtday = this.onChangeBirtday.bind(this);  
		this.onChangeArchive = this.onChangeArchive.bind(this);  
		this.onSubmit = this.onSubmit.bind(this);  
	} 
	componentDidMount() {
		const { id } = this.props.match.params;
		callAPI("/get-employee", "post", {id: id}).then((body) => {

		let employee = body.data;
        if (employee.role !== undefined) employee.role_ru = getRoleName(employee.role)

		store.dispatch(getId(employee._id))
		store.dispatch(getName(employee.name))
		store.dispatch(getRole(employee.role))
		store.dispatch(getRoleRu(employee.role_ru))
		store.dispatch(getPhone(employee.phone))
		store.dispatch(getBirthday(employee.birthday))
		store.dispatch(getArchive(employee.isArchive))
		store.dispatch(getRoles([
			{
				name: "driver",
				ru: "Курьер"
			},
			{
				name: "waiter",
				ru: "Официант"
			},
			{
				name: "cook",
				ru: "Повар"
			}
		]))


		})


	}

	onChangeName(e) {
		let name = e.target.value
		store.dispatch(getName(name))
	}

	onChangeRole(role) {
		let role_ru = getRoleName(role)
		store.dispatch(getRole(role))
		store.dispatch(getRoleRu(role_ru))
		console.log(store.getState())
	}

	onChangePhone(e) {
		let phone = e.target.value
		store.dispatch(getPhone(phone))
	}

	onChangeBirtday(e) {
		let birthday = e.target.value
		store.dispatch(getBirthday(birthday))
	}

	onChangeArchive(e) {
		let isArchive = !this.props.isArchive
		store.dispatch(getArchive(isArchive))
	}

	onSubmit(e) {
		let employee = {};
		employee.id = this.props.id
		employee.name = this.props.name
		employee.role = this.props.role
		employee.phone = this.props.phone
		employee.birthday = this.props.birthday
		employee.isArchive = this.props.isArchive

		callAPI("/update-employee", "post", employee).then((body) => {
			if (body.data) this.props.history.push("/")
		})

	}
	render() {
		return(
			<Employee
				state={this.props}
				onChangeName = {this.onChangeName}
				onChangeRole = {this.onChangeRole}
				onChangePhone = {this.onChangePhone}
				onChangeBirtday = {this.onChangeBirtday}
				onChangeArchive = {this.onChangeArchive}
				onSubmit = {this.onSubmit}
			/>
		)
	}
}


const mapStateToProps = function(store) {
  return {
  	name: store.profileState.name,
  	role: store.profileState.role,
  	role_ru: store.profileState.role_ru,
  	phone: store.profileState.phone,
  	birthday: store.profileState.birthday,
  	isArchive: store.profileState.isArchive,
  	id: store.profileState.id,

  	roles: store.employeeState.roles,
    employee: store.employeeState.employee,
    employees: store.employeeState.employees
  };
};

export default withRouter(connect(mapStateToProps)(EmployeeContainer));