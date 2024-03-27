import React, { Component, useState } from "react";
import axios from 'axios';

const AddReview = () => {
    const [class_difficulty, setDifficulty] = useState('');
    const [hrsPerWeek, setHrsPerWeek] = useState('');
    const [review, setReview] = useState('');

    const handleButtonDifficulty = (value) => {
        setDifficulty(value);
    };

    const handleHrsWeekChange = (event) => {
        setHrsPerWeek(event.target.value);
    };

    const handleRevChange = (event) => {
        setReview(event.target.value);
    };
      
    const sendDataToFlask = async () => {
        
        try {
          const response = await axios.post('http://127.0.0.1:5000/AddReview/api/data', {
            class_dif: class_difficulty,
            hrs_week: hrsPerWeek,
            rev: review

          });
          console.log('ran sendDataToFlask in user_input.js, data is ' + class_difficulty + " " + hrsPerWeek + " " + review);
    
          // console.log(response.data);
        } catch (error) {
          console.error('Error sending data to Flask: ', error);
        }
      };
      
  
    return (
      <div>
        
            <p>Class Difficulty: {class_difficulty}</p>
            <div>
            {[1, 2, 3, 4, 5].map((num) => (
                <button key={num} onClick={() => handleButtonDifficulty(num)}>
                {num}
                </button>
            ))}
            </div>
            {/* had to move it here because if I put it above when i click the class difficulty button it will sumbit */}
            <form onSubmit={sendDataToFlask}>
            
            <div>
            <p> Hours Per Week: {hrsPerWeek} </p>

            <textarea
            id="hrsTextArea"
            value={hrsPerWeek}
            onChange={handleHrsWeekChange}
            />
                
            </div>

            <p> Class Review: {review} </p>
            <textarea
                id="reviewTextArea"
                value={review}
                onChange={handleRevChange}
                />
            <button type="submit">Add Review</button>
        </form>
      </div>
      

            
    );
  };
  
  export default AddReview;