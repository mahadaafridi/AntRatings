import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Form } from "react-bootstrap";

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

  const sendDataToFlask = async (event) => {
    event.preventDefault(); 
    try {
      const response = await axios.post('http://127.0.0.1:5000/AddReview/api/data', {
        class_dif: class_difficulty,
        hrs_week: hrsPerWeek,
        rev: review,
        courseid: courseId,
        course_department: dept,
        professor_name: prof_name
      });
      console.log('ran sendDataToFlask in user_input.js, data is ' + class_difficulty + " " + hrsPerWeek + " " + review);
    } catch (error) {
      console.error('Error sending data to Flask: ', error);
    }
  };

  const recieveDataFromFlask = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:5000/AddReview/Professor/api/data', {
        courseid: dept + courseId,
      });
      const responseData = response.data;
      setProfList(responseData['professors']);
    } catch (error) {
      console.error('Error sending data to Flask: ', error);
    }
  };

  // To ensure that the function is only run 1 time when rendering
  useEffect(() => {
    recieveDataFromFlask();
  }, []);

  return (
    <div className="container">
      {/* header with class name */}
      <h1 className="text-center">Add a review for {dept} {courseId}</h1>
      {/* centers content in row horizontally */}
      <div className="row justify-content-center">
        {/* class difficulty div */}
        <div className="col-md-8">
          <Card className="mb-3"> 
            <Card.Body>
              <h5>Class Difficulty</h5>
              <div>
                {[1, 2, 3, 4, 5].map((num) => (
                  <Button key={num} variant="primary" className="mr-2" onClick={() => handleButtonDifficulty(num)}>
                    {num}
                  </Button>
                ))}
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-8">
          {/* component for hrs per week */}
          <Card className="mb-3">
            <Card.Body>
              <Form.Group controlId="formHrsPerWeek">
                <Form.Label>Hours Per Week</Form.Label>
                <Form.Control type="text" value={hrsPerWeek} onChange={handleHrsWeekChange} />
              </Form.Group>
            </Card.Body>
          </Card>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-8">
          {/* component for class review  */}
          <Card className="mb-3">
            <Card.Body>
              <Form.Group controlId="formClassReview">
                <Form.Label>Class Review</Form.Label>
                {/* row = 3 makes it larger in comparison to the hours per week compoenent */}
                <Form.Control as="textarea" rows={3} value={review} onChange={handleRevChange} />
              </Form.Group>
            </Card.Body>
          </Card>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <Card>
            <Card.Body>
              <Form.Group controlId="formProfSelect">
                <Form.Label>Select a professor</Form.Label>
                <Form.Control as="select" value={prof_name} onChange={handleProfChange}>
                  <option value="">Select...</option>
                  {/* drop down box iterates through the prof list and displays the professor  */}
                  {prof_list.map((professor, index) => (
                    <option key={index} value={professor}>{professor}</option>
                  ))}
                </Form.Control>
              </Form.Group>
            </Card.Body>
          </Card>
        </div>
      </div>
      <div className="row justify-content-center mt-3">
        <div className="col-md-8">
          <Button type="submit" variant="primary" onClick={sendDataToFlask}>Add Review</Button>

        </div>
      </div>
    </div>
  );
};

export default AddReview;



