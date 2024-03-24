/*
App component
Overarching component at the highest level
*/
import logo from './logo.svg';
import './App.css';
import Message from './Message.tsx';
import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

// new imports
import { Routes, Route, NavLink, HashRouter } from "react-router-dom";
import Home from "./homepage/Home";


import UserInputComponent from './user_input.js';

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
// class App extends Component {
//   render () {
//     return (
//       <HashRouter>
//         <div className="App">
//           <h1>A Simple SPA made using React</h1>
//           <ul className="header">
//             <li><NavLink to="/">Home</NavLink></li>
//             <li><NavLink to="/about">About</NavLink></li>
//             <li><NavLink to="/contact">Contact</NavLink></li>
//           </ul>
//           <div className="content">
//             <Routes>
//               <Route exact path="/" element={<Home />}></Route>
//               <Route exact path="/about" element={<About />}></Route>
//               <Route exact path="/contact" element={<Contact />}></Route>
//             </Routes>
//           </div>
//         </div>
//       </HashRouter>
//     );
//   }
// }


export function App() {
  //MAHAD ADDED THIS STUFF
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-3">
            <p></p>
          </div>
          <div className="col-6">
            <h1>AntRatings</h1>
            <UserInputComponent /> {/* Include your UserInputComponent here */}
          </div>
          <div className="col-3">
            <p></p>
          </div>

        </div>
      </div>
    </div>
  );


  return (
    <nav class="navbar-container container"> </nav>


  );
}

export default App;
