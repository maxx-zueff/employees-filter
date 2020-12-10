import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup"
import DropdownButton from "react-bootstrap/DropdownButton"
import Dropdown from "react-bootstrap/Dropdown"
import FormControl from "react-bootstrap/FormControl"
import Button from "react-bootstrap/Button"
import InputMask from 'react-input-mask';

const Employee = function (props) {
  return (
  	<Container fluid="md" style={{paddingTop: 30 + "px"}}>
	  	<Form>
	  		<Form.Row className="formRow">
	  			<Form.Group as={Col}>
	  				<Form.Label>Имя сотрудника</Form.Label>
	  				<Form.Control onChange={props.onChangeName} value={props.state.name} />
	  			</Form.Group>
	  			<Form.Group as={Col}>
				    <DropdownButton
				      as={InputGroup.Append}
				      variant="outline-secondary"
				      title={props.state.role_ru}
				      id="input-group-dropdown-2"
				    >
						{props.state.roles.map((role) => (
							<Dropdown.Item onClick={(e)=> props.onChangeRole(role.name)}>{role.ru}</Dropdown.Item>
						))}
				    </DropdownButton>
	  			</Form.Group>
	  		</Form.Row>
	  		<Form.Row className="formRow">
	  			<Form.Group as={Col}>
	  				<Form.Label>Телефон сотрудника</Form.Label>
	  				<InputMask onChange={props.onChangePhone} value={props.state.phone} className="form-control" mask="+7\ (999) 999-9999"/>
	  			</Form.Group>
	  			<Form.Group as={Col}>
	  				<Form.Label>День рождения</Form.Label>
	  				<InputMask onChange={props.onChangeBirtday} value={props.state.birthday} className="form-control" mask="99.99.9999" />
	  			</Form.Group>
	  		</Form.Row>

	  		<Form.Row className="formRow">

	  			<Form.Group as={Col}>
			      <Form inline>
			          <Form.Check
			            checked={props.state.isArchive}
			            inline
			            onClick={props.onChangeArchive}
			            label={props.state.isArchive ? "Убери галочку, что бы вернуть сотрудника из Архива" : "Нажми на галочку, чтобы поместить сотрудника в Архив"}
			            type="checkbox"
			          />
			      </Form>
	  			</Form.Group>
	  		</Form.Row>

	  		 <Button onClick={props.onSubmit} variant="primary">Обновить данные</Button>
	  	</Form>
  	</Container>
  )
}

export default Employee

	  				// <Form.Control placeholder={props.state.phone} />
