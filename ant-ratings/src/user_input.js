import React, { useState } from 'react';
import axios from 'axios'; 
import 'bootstrap/dist/css/bootstrap.min.css';

const UserInputComponent = () => {
  const [inputValue, setInputValue] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);

  const handleSelect = (event) => {
    setSelectedItem(event.target.innerText);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const sendDataToFlask = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:5000/api/data', { //url to flask, will send to http://127.0.0.1:5000
        userInput: inputValue,
      });
      console.log("ran sendDataToFlask in user_input.js, data is ");

      // console.log(response.data); 
    } catch (error) {
      console.error('Error sending data to Flask: ', error);
    }
  };


  return (
    <div>
      <form class="row g-3">
        <div className='col-auto'>
          <label className="nameLabel" htmlFor="userInput">Course Name:</label>
        </div>
        <div className='col-auto'>
        <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Select an Item
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a className="dropdown-item" href="#" onClick={handleSelect}>Item 1</a>
          <a className="dropdown-item" href="#" onClick={handleSelect}>Item 2</a>
          <a className="dropdown-item" href="#" onClick={handleSelect}>Item 3</a>
        </div>
        {selectedItem && <p>You selected: {selectedItem}</p>}
    </div>
        </div>
        <div className='col-auto'>
          <input
            className="form-control"
            type="text"
            id="userInput"
            value={inputValue}
            onChange={handleInputChange}
          />
        </div>
        <div className='col-auto'>
          <button className='btn btn-primary mb-3' onClick={sendDataToFlask}>Search</button>
        </div>
      </form>

    </div>
  );
};

export default UserInputComponent;
