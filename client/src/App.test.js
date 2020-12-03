import { render, screen } from "@testing-library/react";
import {App, sorter, callAPI} from "./App";

// test("renders learn react link", () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test("сортировка по имени", () => {

	return callAPI("/find-every-employee")
		.then((body)=>{
			let employees = sorter.byName(body.data)
			let employees_rev = sorter.byNameReverce(body.data)
			console.log(employees, employees_rev);
			expect(employees).not.toBe([]);
		})
	// const response = await callAPI("/find-every-employee")
	// const employees = await sorter.byName(response.data)


	// console.log(employees_rev);

})