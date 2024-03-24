import React, { useState } from 'react';
import axios from 'axios'; 

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
      console.error('Error sending data to Flask:', error);
    }
  };

  return (
    <div>
      <label htmlFor="userInput">Course Name</label>
      <input
        type="text"
        id="userInput"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button onClick={sendDataToFlask}>Search</button>
      <p>{inputValue}</p> 
    </div>
  );
};

export default UserInputComponent;
