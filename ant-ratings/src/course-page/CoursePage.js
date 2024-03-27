import React, {useState, useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {  } from "react-bootstrap";
import axios from 'axios';
import { useParams } from 'react-router-dom';
import "./CoursePage.css"




const CoursePage = () => {
    const courseId = useParams()["courseId"]

    const [inputValue, setInputValue] = useState('sadfsads');
    const [selectedItem, setSelectedItem] = useState("Sdddelect");
    // http://127.0.0.1:5000/Course/api/data
    

    // Mahad will make a funciton that will return all the reviews 
    const sendDataToFlask = async () => {
        try {
          const response = await axios.post('http://127.0.0.1:5000/Course/api/data', {
            courseid: courseId,
          });
          console.log('ran sendDataToFlask in user_input.js, data is ' + inputValue + " " + selectedItem);
    
          console.log(response.data);
        } catch (error) {
          console.error('Error sending data to Flask: ', error);
        }
      };
    sendDataToFlask()
    
    // const sendDataToFlask = async () => {
    //     try {
    //       const response = await axios.post('http://127.0.0.1:5000/Course/api/data', {
    //         courseid: courseId
    //       });
    //       console.log('ran sendDataToFlask in user_input.js, data is ' + inputValue);
    
    //     } catch (error) {
    //       console.error('Error sending data to Flask: ', error);
    //     }
    
    //  }
    // console.log(sendDataToFlask())
    
    const reviews = []  // temporary element to hold reviews
    return (
        <>
            <div id="ratings">
                <div className="num-and-title">
                    <h3>Difficulty Rating</h3>
                    <div className="rating-holder" id="diff-rating">
                        <h4 className="number-inside">5</h4>
                    </div>
                </div>
                
                <div className="num-and-title">
                    <h3>Hours Per Week</h3>
                    <div className="rating-holder" id="hrs-per-week">
                        <h4 className="number-inside">5</h4>
                    </div>
                </div>
            </div>
            <hr></hr>
            <div className="reviews">
                {reviews.map((review) => {
                    
                })}
            </div>
            
            
        </>
    );
};

export default CoursePage;