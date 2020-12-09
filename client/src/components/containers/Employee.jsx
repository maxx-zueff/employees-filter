import React from "react";
import { connect } from "react-redux";
import store from "../../store";
import { withRouter} from "react-router-dom";
import callAPI from "../../libs/api";

class EmployeeContainer extends React.Component {

	componentDidMount() {
		const { id } = this.props.match.params;
		callAPI("/get-employee", "post", {id: id}).then((body) => console.log(body.data))
	}

	render() {
		return(
			<div>
				Employee Page
			</div>
		)
	}
}


const mapStateToProps = function(store) {
  return {
    employee: store.employeeState.employee,
    employees: store.employeeState.employees
  };
};

export default withRouter(connect(mapStateToProps)(EmployeeContainer));