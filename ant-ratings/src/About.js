/* Temp code */

import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <div>
        <h3>SPA App - About</h3>
        <p>This is a paragraph on the About of the SPA App.</p>
        <p>The Team of SPA App.</p>
        <table>
        <thead>
            <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td>1</td>
            <td>John Doe</td>
            <td>johndoe@example.com</td>
            </tr>
            <tr>
            <td>2</td>
            <td>Jane Doe</td>
            <td>janedoe@example.com</td>
            </tr>
            <tr>
            <td>3</td>
            <td>Bob Smith</td>
            <td>bobsmith@example.com</td>
            </tr>
        </tbody>
        </table>
      </div>
    );
  }
}

export default About;