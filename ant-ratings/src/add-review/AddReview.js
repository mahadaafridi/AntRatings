import React, { Component, useEffect, useState } from "react";
import axios from 'axios';
import { useParams } from 'react-router-dom';


const AddReview = () => {
  const dept = useParams()["dept"];
  const courseId = useParams()["courseId"];

  const [class_difficulty, setDifficulty] = useState('');
  const [hrsPerWeek, setHrsPerWeek] = useState('');
  const [review, setReview] = useState('');
  const [prof_name, setProfName] = useState('');
  const [prof_list, setProfList] = useState([]);

  const handleButtonDifficulty = (value) => {
    setDifficulty(value);
  };

  const handleHrsWeekChange = (event) => {
    setHrsPerWeek(event.target.value);
  };

  const handleRevChange = (event) => {
    setReview(event.target.value);
  };

  const handleProfChange = (event) => {
    setProfName(event.target.value);
  };


    
  const sendDataToFlask = async () => {    
    try {
      const response = await axios.post('http://127.0.0.1:5000/AddReview/api/data', {
        class_dif: class_difficulty,
        hrs_week: hrsPerWeek,
        rev: review,
        courseid: courseId,
        course_department : dept,
        professor_name : prof_name

      });
      console.log('ran sendDataToFlask in user_input.js, data is ' + class_difficulty + " " + hrsPerWeek + " " + review);

      // console.log(response.data);
    } catch (error) {
      console.error('Error sending data to Flask: ', error);
    }
  };

  const recieveDataFromFlask = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:5000/AddReview/Professor/api/data', {
        courseid: dept + courseId,
      });
    
    // store these in variables 
    const responseData = response.data;
    console.log(responseData)
    setProfList(responseData['professors'])
    console.log(prof_list)
    } catch (error) {
      console.error('Error sending data to Flask: ', error);
    }
  };    

  // to ensure that the function is only run 1 time when rendering 
  useEffect(() => {
    recieveDataFromFlask();
  }, []);
    

  return (
    <div>
      <h1>Add a review for {dept} {courseId}</h1>
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
        
        {/* dropdown for professors */}
        <p> Professor_name: {prof_name} </p>
        <label>Select a professor:</label>
        <select value={prof_name} onChange={handleProfChange}>
          <option value="">Select...</option>
          {prof_list.map((professor, index) => (
            <option key={index} value={professor}>{professor}</option>
          ))}
        </select>

        <button type="submit">Add Review</button>
      </form>
    </div>
      

          
  );
};
  
  export default AddReview;