import React, { useState } from 'react';
import axios from 'axios'; 
import 'bootstrap/dist/css/bootstrap.min.css';

const UserInputComponent = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const sendDataToFlask = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:5000/api/data', { //url to flask, will send to http://127.0.0.1:5000
        userInput: inputValue,
      });

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

      <p>{inputValue}</p> 
    </div>
  );
};

export default UserInputComponent;
