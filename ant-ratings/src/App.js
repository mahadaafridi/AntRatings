/*
App component
Overarching component at the highest level
*/
import logo from './logo.svg';
import Message from './Message.tsx';
import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import './App.css';



// new imports
import Home from "./homepage/Home";
import AddReview from './add-review/AddReview.js';
import CoursePage from './course-page/CoursePage.js';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

import UserInputComponent from './UserInput.js';

// function App() {
  
//   var flask_url = "http://127.0.0.1:5000"
//   fetch(flask_url + "/hello", {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   })
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     return response.json();
//   })
//   .then(data => {
//     // Handle the data from the API
//     console.log(data);
//   })
//   .catch(error => {
//     console.error('There was a problem with the fetch operation:', error);
//   });

// }

/* Rendering in a component is just <ComponentName/>.
You can pass values into components by adding parameters to the functions. 
*/

export function App() {

  return (
    <>
      <Router>
        <Helmet>
          <style>
            @import url('https://fonts.googleapis.com/css2?family=Rubik+Scribble&display=swap');
            @import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&family=Rubik+Scribble&display=swap')
          </style>
        </Helmet>
        <Navbar className="nav-color" variant='dark' expand="lg">
          <Container fluid>
            <Navbar.Brand className="logo">AntRatings</Navbar.Brand>
          </Container>
        </Navbar>

        <Container>
          <Row>
            <Col md={3} lg={2}>
              <p></p>
            </Col>
            <Col md={6} lg={8}>
              <div className="d-flex justify-content-center">
              <Routes>
                <Route path="/" element={<UserInputComponent />} />
                <Route path="/AddReview/:dept/:courseId" element={<AddReview />} />
                <Route path="/Home" element={<Home />} />
                <Route path="/CoursePage/:dept/:courseId" element={<CoursePage />} />
              </Routes>
              </div>
            </Col>
            <Col md={3} lg={2}>
              <p></p>
            </Col>
          </Row>
        </Container>
      </Router>
    </>
  );

  }

export default App;