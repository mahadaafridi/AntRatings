import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Dropdown, Button, Form } from 'react-bootstrap'; // Import React Bootstrap components


const UserInputComponent = () => {
  const [inputValue, setInputValue] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);

  const handleSelect = (eventKey) => {
    setSelectedItem(eventKey);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const sendDataToFlask = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:5000/api/data', {
        userInput: inputValue,
      });
      console.log('ran sendDataToFlask in user_input.js, data is ' + inputValue);

      // console.log(response.data);
    } catch (error) {
      console.error('Error sending data to Flask: ', error);
    }
  };


  return (
    <div>
      <Form className="row g-3">
        <Form.Group className="col-auto">
          <Form.Label id="nameLabel" htmlFor="userInput">
            Course Name:
          </Form.Label>
        </Form.Group>
        <Form.Group className="col-auto">
          <Dropdown onSelect={handleSelect}>
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
              {selectedItem}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item eventKey="AC ENG">AC ENG</Dropdown.Item>
              <Dropdown.Item eventKey="AFAM">AFAM</Dropdown.Item>
              <Dropdown.Item eventKey="ANATOMY">ANATOMY</Dropdown.Item>
              <Dropdown.Item eventKey="ANESTH">ANESTH</Dropdown.Item>
              <Dropdown.Item eventKey="ANTHRO">ANTHRO</Dropdown.Item>
              <Dropdown.Item eventKey="ARABIC">ARABIC</Dropdown.Item>
              <Dropdown.Item eventKey="ARMN">ARMN</Dropdown.Item>
              <Dropdown.Item eventKey="ART">ART</Dropdown.Item>
              <Dropdown.Item eventKey="ART HIS">ART HIS</Dropdown.Item>
              <Dropdown.Item eventKey="ARTS">ARTS</Dropdown.Item>
              <Dropdown.Item eventKey="ARTSHUM">ARTSHUM</Dropdown.Item>
              <Dropdown.Item eventKey="ASIANAM">ASIANAM</Dropdown.Item>
              <Dropdown.Item eventKey="BANA">BANA</Dropdown.Item>
              <Dropdown.Item eventKey="BATS">BATS</Dropdown.Item>
              <Dropdown.Item eventKey="BIO SCI">BIO SCI</Dropdown.Item>
              <Dropdown.Item eventKey="BIOCHEM">BIOCHEM</Dropdown.Item>
              <Dropdown.Item eventKey="BME">BME</Dropdown.Item>
              <Dropdown.Item eventKey="CAMPREC">CAMPREC</Dropdown.Item>
              <Dropdown.Item eventKey="CEM">CEM</Dropdown.Item>
              <Dropdown.Item eventKey="CHC/LAT">CHC/LAT</Dropdown.Item>
              <Dropdown.Item eventKey="CHEM">CHEM</Dropdown.Item>
              <Dropdown.Item eventKey="CHINESE">CHINESE</Dropdown.Item>
              <Dropdown.Item eventKey="CLASSIC">CLASSIC</Dropdown.Item>
              <Dropdown.Item eventKey="CLT&THY">CLT&THY</Dropdown.Item>
              <Dropdown.Item eventKey="COGS">COGS</Dropdown.Item>
              <Dropdown.Item eventKey="COM LIT">COM LIT</Dropdown.Item>
              <Dropdown.Item eventKey="COMPSCI">COMPSCI</Dropdown.Item>
              <Dropdown.Item eventKey="CRITISM">CRITISM</Dropdown.Item>
              <Dropdown.Item eventKey="CRM/LAW">CRM/LAW</Dropdown.Item>
              <Dropdown.Item eventKey="CSE">CSE</Dropdown.Item>
              <Dropdown.Item eventKey="DANCE">DANCE</Dropdown.Item>
              <Dropdown.Item eventKey="DATA">DATA</Dropdown.Item>
              <Dropdown.Item eventKey="DERM">DERM</Dropdown.Item>
              <Dropdown.Item eventKey="DEV BIO">DEV BIO</Dropdown.Item>
              <Dropdown.Item eventKey="DRAMA">DRAMA</Dropdown.Item>
              <Dropdown.Item eventKey="EARTHSS">EARTHSS</Dropdown.Item>
              <Dropdown.Item eventKey="ECO EVO">ECO EVO</Dropdown.Item>
              <Dropdown.Item eventKey="ECON">ECON</Dropdown.Item>
              <Dropdown.Item eventKey="ECPS">ECPS</Dropdown.Item>
              <Dropdown.Item eventKey="ED AFF">ED AFF</Dropdown.Item>
              <Dropdown.Item eventKey="EDUC">EDUC</Dropdown.Item>
              <Dropdown.Item eventKey="EECS">EECS</Dropdown.Item>
              <Dropdown.Item eventKey="Item">Select</Dropdown.Item>
              <Dropdown.Item eventKey="Item">Select</Dropdown.Item>
              <Dropdown.Item eventKey="Item">Select</Dropdown.Item>
              <Dropdown.Item eventKey="Item">Select</Dropdown.Item>
              <Dropdown.Item eventKey="Item">Select</Dropdown.Item>
              <Dropdown.Item eventKey="Item">Select</Dropdown.Item>
              <Dropdown.Item eventKey="Item">Select</Dropdown.Item>
              <Dropdown.Item eventKey="Item">Select</Dropdown.Item>
              <Dropdown.Item eventKey="Item">Select</Dropdown.Item>
              <Dropdown.Item eventKey="Item">Select</Dropdown.Item>
              <Dropdown.Item eventKey="Item">Select</Dropdown.Item>
              <Dropdown.Item eventKey="Item">Select</Dropdown.Item>
              <Dropdown.Item eventKey="Item">Select</Dropdown.Item>
              <Dropdown.Item eventKey="Item">Select</Dropdown.Item>
              <Dropdown.Item eventKey="Item">Select</Dropdown.Item>
              <Dropdown.Item eventKey="Item">Select</Dropdown.Item>
              <Dropdown.Item eventKey="Item">Select</Dropdown.Item>
              <Dropdown.Item eventKey="Item">Select</Dropdown.Item>
              <Dropdown.Item eventKey="Item">Select</Dropdown.Item>
              <Dropdown.Item eventKey="Item">Select</Dropdown.Item>
              <Dropdown.Item eventKey="Item">Select</Dropdown.Item>
              <Dropdown.Item eventKey="Item">Select</Dropdown.Item>
              <Dropdown.Item eventKey="Item">Select</Dropdown.Item>
              <Dropdown.Item eventKey="Item">Select</Dropdown.Item>
              <Dropdown.Item eventKey="Item">Select</Dropdown.Item>
              <Dropdown.Item eventKey="Item">Select</Dropdown.Item>
              <Dropdown.Item eventKey="Item">Select</Dropdown.Item>

            </Dropdown.Menu>
          </Dropdown>
          {selectedItem && <p>You selected: {selectedItem}</p>}
        </Form.Group>
        <Form.Group className="col-auto">
          <Form.Control
            className="form-control"
            type="text"
            id="userInput"
            value={inputValue}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group className="col-auto">
          <Button className="btn-primary mb-3" onClick={sendDataToFlask}>
            Search
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
};

export default UserInputComponent;
