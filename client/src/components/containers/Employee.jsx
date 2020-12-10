import React from "react";
import { connect } from "react-redux";
import store from "../../store";
import { withRouter} from "react-router-dom";
import callAPI from "../../libs/api";
import {getRoles} from "../../action/employee"
import {getId, getName, getRole, getRoleRu, getPhone, getBirthday, getArchive} from "../../action/profile"
import Employee from "../views/Employee"
import getRoleName from "../../libs/utils";

function validate(fields) {
	let empty = fields.filter(element => element.length === 0)
	if (empty.length === 0) return true
		else return false
}

class EmployeeContainer extends React.PureComponent {

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

		if (id) {

			callAPI("/get-employee", "post", {id: id}).then((body) => {

			let employee = body.data;
	        if (employee.role !== undefined) employee.role_ru = getRoleName(employee.role)

			store.dispatch(getId(id))
			store.dispatch(getName(employee.name))
			store.dispatch(getRole(employee.role))
			store.dispatch(getRoleRu(employee.role_ru))
			store.dispatch(getPhone(employee.phone))
			store.dispatch(getBirthday(employee.birthday))
			store.dispatch(getArchive(employee.isArchive))



		}) } else {
				store.dispatch(getRoleRu("Выбрать должность"))
			}

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


	}

	onChangeName(e) {
		let name = e.target.value
		store.dispatch(getName(name))
	}

	onChangeRole(role) {
		let role_ru = getRoleName(role)
		store.dispatch(getRole(role))
		store.dispatch(getRoleRu(role_ru))
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

		console.log('here')

		let employee = {};
		employee.name = this.props.name
		employee.role = this.props.role
		employee.phone = this.props.phone
		employee.birthday = this.props.birthday
		employee.isArchive = this.props.isArchive

		if (this.props.id) {
			employee.id = this.props.id
			callAPI("/update-employee", "post", employee).then((body) => {
				if (body.data) this.props.history.push("/")
			})
		}

		if (!this.props.id) {

			callAPI("/add-employee", "post", employee).then((body) => {
				this.props.history.push("/")
			}).catch((err) => {
		        console.log(err);
		    })
		}

	}

	render() {

		const fields = [
			this.props.name,
			this.props.role,
			this.props.phone,
			this.props.birthday
		]
		const isEnable = validate(fields)
		return(
			<Employee
				isEnable={isEnable}
				state={this.props}
				onChangeName = {this.onChangeName}
				onChangeRole = {this.onChangeRole}
				onChangePhone = {this.onChangePhone}
				onChangeBirtday = {this.onChangeBirtday}
				onChangeArchive = {this.onChangeArchive}
				onSubmit = {this.onSubmit}
				handleSubmit={this.handleSubmit}
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