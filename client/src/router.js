import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Layouts
import MainLayout from './components/layouts/Main';

// Pages
import EmployeeContainer from './components/containers/Employee';
import TableContainer from './components/containers/Table';

export default (
	<Router>
		<MainLayout>
				<Route exact path="/">
					<TableContainer/>
				</Route>
				<Route path="/employees/:id">
					<EmployeeContainer />
				</Route>
		</MainLayout>
	</Router>
)
