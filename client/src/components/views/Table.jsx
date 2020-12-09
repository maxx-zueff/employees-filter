import Table from "react-bootstrap/Table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSortAmountDownAlt,
  faSortAmountUp,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom'

const TableEmployees = function (props) {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th onClick={(e) => props.sorter("name")} className="point">
            <span style={{ paddingRight: 5 + "px" }}>Имя</span>
            {props.state.sortedName && (
              <FontAwesomeIcon icon={faSortAmountDownAlt}></FontAwesomeIcon>
            )}
            {!props.state.sortedName && (
              <FontAwesomeIcon icon={faSortAmountUp}></FontAwesomeIcon>
            )}
          </th>
          <th onClick={(e) => props.sorter("birthday")} className="point">
            <span style={{ paddingRight: 5 + "px" }}>Дата рождения</span>
            {props.state.sortedBDay && (
              <FontAwesomeIcon icon={faSortAmountDownAlt}></FontAwesomeIcon>
            )}
            {!props.state.sortedBDay && (
              <FontAwesomeIcon icon={faSortAmountUp}></FontAwesomeIcon>
            )}
          </th>
          <th>
            <span>Должность</span>
          </th>
          <th>Телефон</th>

          <th>В архиве</th>
        </tr>
      </thead>
      <tbody>
        {props.state.filtered.map((employee, index) => (
          <tr className="point " onClick={(e) => props.link(employee._id)}>
            <td>{index}</td>
            <td>{employee.name}</td>
            <td>{employee.birthday}</td>
            <td>{employee.role.ru}</td>
            <td>{employee.phone}</td>
            <td>{employee.isArchive ? "+" : ""}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default TableEmployees;
