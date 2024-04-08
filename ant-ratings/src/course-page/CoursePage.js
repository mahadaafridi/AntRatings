import React, {useState, useEffect} from "react";
import { useParams } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card} from "react-bootstrap";
import Spinner from 'react-bootstrap/Spinner';


import "./CoursePage.css"
import axios from 'axios';
import PlusIcon from "../imgs/add-symbol.svg"

import { scaleSequential } from 'd3-scale';
import { interpolateRdYlGn } from 'd3-scale-chromatic';



const CoursePage = () => {
    const dept = useParams()["dept"]
    const courseId = useParams()["courseId"]
    const [responseData, setresponseData] = useState(null)
    // http://127.0.0.1:5000/Course/api/data
    

    // Mahad will make a funciton that will return all the reviews 
    const sendDataToFlask = async () => {
        try {
          const response = await axios.post('http://127.0.0.1:5000/Course/api/data', {
            courseid: dept + courseId,
          });
        
        // setresponseData(response.data);
        //console.log(response.data); 
        setresponseData(response.data)
        return await response.data;
        
        } catch (error) {
          console.error('Error sending data to Flask: ', error);
        }


      };

    useEffect(() => {
        sendDataToFlask();
      }, []);

      
    console.log(responseData)
    //console.log(response.data); 
    const reviews = [{"id": 0, "review": "test review text"}, {"id": 1}, {"id": 2},]  // temporary element to hold reviews
    const colorScale = scaleSequential(interpolateRdYlGn);
    const addReviewLink = "/AddReview/" + dept + "/" + courseId;
    return (
        <>
            {!(responseData) && (
                <Spinner id="spinner" animation="border" />
            )}
            {responseData && responseData['class_difficulty_avg'] !== null && (

            <div>
                
                <h1 className="text-center">{dept} {courseId}</h1>
                <div id="ratings">
                    <div className="num-and-title">
                        <h3>Difficulty Rating</h3>
                        <div className="rating-holder" id="diff-rating" style={{backgroundColor: colorScale(responseData["class_difficulty_avg"]/5)}}>
                            <h4 className="number-inside">{responseData['class_difficulty_avg']}</h4>
                        </div>
                        
                    </div>
                    
                    <div className="num-and-title">
                        <h3>Hours Per Week</h3>
                        <div className="rating-holder" id="hrs-per-week" style={{backgroundColor: colorScale(1 - responseData["hrs_per_week_avg"]/50)}} >
                            <h4 className="number-inside">{responseData['hrs_per_week_avg']}</h4>
                        </div>
                    </div>
                </div>
                <div id="reviews-heading">
                    <h2 id="review-h2">Student Reviews</h2>
                    <Button variant="outline-secondary" id="add-review" href={addReviewLink}><img id="plus-img" src={PlusIcon} alt="Plus icon"></img></Button>
                </div>
                <hr></hr>

                <div className="reviews">
                    
                    {responseData && reviews.length > 0 && (
                        responseData['all_reviews'].map(review => (
                            <Card className="card-element" key={review.id}>
                                <Card.Body>
                                    <Card.Title>{"Professor " + review.professor_name}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">{"Difficulty: " + review.difficulty}</Card.Subtitle>
                                    <Card.Subtitle className="mb-2 text-muted">{"Hours Per Week: " + review.hrs_per_week}</Card.Subtitle>
                                    <Card.Text>
                                        {review.text}
                                    </Card.Text>
                                    
                                </Card.Body>
                            </Card>
                        ))
                    )}
                </div>
                
                
            </div>
            )}
        </>
        
        
    );
};

export default CoursePage;