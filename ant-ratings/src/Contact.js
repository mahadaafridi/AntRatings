import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <div>
        <h3>SPA App - Contact</h3>
        <p>Please feel free to contact us with any questions or inquiries you may have. We are always happy to help!</p>
        <h4>Contact Details:</h4>
        <ul>
        <li><strong>Email:</strong> info@example.com</li>
        <li><strong>Phone:</strong> 1-800-555-1234</li>
        <li><strong>Address:</strong> 123 Main St, Anytown USA</li>
        </ul>
      </div>
    );
  }
}

export default Contact;