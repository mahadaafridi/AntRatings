import React, {useState, useEffect} from "react";
import { useParams } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "react-bootstrap";

import "./CoursePage.css"
import axios from 'axios';
import PlusIcon from "../imgs/add-symbol.svg"

import { scaleSequential } from 'd3-scale';
import { interpolateRdYlGn } from 'd3-scale-chromatic';



const CoursePage = () => {
    const dept = useParams()["dept"]
    const courseId = useParams()["courseId"]
    // http://127.0.0.1:5000/Course/api/data
    

    // Mahad will make a funciton that will return all the reviews 
    const sendDataToFlask = async () => {
        try {
          const response = await axios.post('http://127.0.0.1:5000/Course/api/data', {
            courseid: dept + courseId,
          });
    
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
    const colorScale = scaleSequential(interpolateRdYlGn);
    const diffColor = colorScale(1/5); // REPLACE 1 WITH DIFFICULTY RATING
    const hrsColor = colorScale(1 - 1/50)  // REPLACE DIVISOR WITH HRS PER WEEK
    const diffStyle = {backgroundColor: diffColor};
    const hrsStyle = {backgroundColor: hrsColor};
    const addReviewLink = "/AddReview/" + dept + "/" + courseId;
    return (

        <div>
            <div id="ratings">
                <div className="num-and-title">
                    <h3>Difficulty Rating</h3>
                    <div className="rating-holder" id="diff-rating" style={diffStyle}>
                        <h4 className="number-inside">5</h4>
                    </div>
                </div>
                
                <div className="num-and-title">
                    <h3>Hours Per Week</h3>
                    <div className="rating-holder" id="hrs-per-week" style={hrsStyle} >
                        <h4 className="number-inside">5</h4>
                    </div>
                </div>
            </div>
            <div id="reviews-heading">
                <h2 id="review-h2">Student Reviews</h2>
                <Button variant="outline-secondary" id="add-review" href={addReviewLink}><img id="plus-img" src={PlusIcon} alt="Plus icon"></img></Button>
            </div>
            <hr></hr>

            <div className="reviews">
                {reviews.map((review) => {
                    // display reviews
                })}
            </div>
            
            
        </div>
    );
};

export default CoursePage;