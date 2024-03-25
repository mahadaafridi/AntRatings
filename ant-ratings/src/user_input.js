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
              Select an Item
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item eventKey="Item 1">Item 1</Dropdown.Item>
              <Dropdown.Item eventKey="Item 2">Item 2</Dropdown.Item>
              <Dropdown.Item eventKey="Item 3">Item 3</Dropdown.Item>
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
