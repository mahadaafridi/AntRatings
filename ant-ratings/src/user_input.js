import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Dropdown, Button, Form } from 'react-bootstrap'; // Import React Bootstrap components


const UserInputComponent = () => {
  const [inputValue, setInputValue] = useState('');
  const [selectedItem, setSelectedItem] = useState("Select");

  const handleSelect = (eventKey) => {
    setSelectedItem(eventKey);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const sendDataToFlask = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:5000/api/data', {
        userInput: inputValue,
        selected_item: selectedItem
      });
      console.log('ran sendDataToFlask in user_input.js, data is ' + inputValue + " " + selectedItem);

      // console.log(response.data);
    } catch (error) {
      console.error('Error sending data to Flask: ', error);
    }
  };


  return (
    <div>
      <h2>Search for a class:</h2>
      <hr></hr>
      <Form className="row g-3">
        <Form.Group className="col-auto">
          <Form.Label id="nameLabel" htmlFor="userInput">
            Course Name:
          </Form.Label>
        </Form.Group>
        <Form.Group className="col-auto">
          <Dropdown onSelect={handleSelect}>
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
              {selectedItem}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item eventKey="AC ENG">AC ENG</Dropdown.Item>
              <Dropdown.Item eventKey="AFAM">AFAM</Dropdown.Item>
              <Dropdown.Item eventKey="ANATOMY">ANATOMY</Dropdown.Item>
              <Dropdown.Item eventKey="ANESTH">ANESTH</Dropdown.Item>
              <Dropdown.Item eventKey="ANTHRO">ANTHRO</Dropdown.Item>
              <Dropdown.Item eventKey="ARABIC">ARABIC</Dropdown.Item>
              <Dropdown.Item eventKey="ARMN">ARMN</Dropdown.Item>
              <Dropdown.Item eventKey="ART">ART</Dropdown.Item>
              <Dropdown.Item eventKey="ART HIS">ART HIS</Dropdown.Item>
              <Dropdown.Item eventKey="ARTS">ARTS</Dropdown.Item>
              <Dropdown.Item eventKey="ARTSHUM">ARTSHUM</Dropdown.Item>
              <Dropdown.Item eventKey="ASIANAM">ASIANAM</Dropdown.Item>
              <Dropdown.Item eventKey="BANA">BANA</Dropdown.Item>
              <Dropdown.Item eventKey="BATS">BATS</Dropdown.Item>
              <Dropdown.Item eventKey="BIO SCI">BIO SCI</Dropdown.Item>
              <Dropdown.Item eventKey="BIOCHEM">BIOCHEM</Dropdown.Item>
              <Dropdown.Item eventKey="BME">BME</Dropdown.Item>
              <Dropdown.Item eventKey="CAMPREC">CAMPREC</Dropdown.Item>
              <Dropdown.Item eventKey="CEM">CEM</Dropdown.Item>
              <Dropdown.Item eventKey="CHC/LAT">CHC/LAT</Dropdown.Item>
              <Dropdown.Item eventKey="CHEM">CHEM</Dropdown.Item>
              <Dropdown.Item eventKey="CHINESE">CHINESE</Dropdown.Item>
              <Dropdown.Item eventKey="CLASSIC">CLASSIC</Dropdown.Item>
              <Dropdown.Item eventKey="CLT&THY">CLT&THY</Dropdown.Item>
              <Dropdown.Item eventKey="COGS">COGS</Dropdown.Item>
              <Dropdown.Item eventKey="COM LIT">COM LIT</Dropdown.Item>
              <Dropdown.Item eventKey="COMPSCI">COMPSCI</Dropdown.Item>
              <Dropdown.Item eventKey="CRITISM">CRITISM</Dropdown.Item>
              <Dropdown.Item eventKey="CRM/LAW">CRM/LAW</Dropdown.Item>
              <Dropdown.Item eventKey="CSE">CSE</Dropdown.Item>
              <Dropdown.Item eventKey="DANCE">DANCE</Dropdown.Item>
              <Dropdown.Item eventKey="DATA">DATA</Dropdown.Item>
              <Dropdown.Item eventKey="DERM">DERM</Dropdown.Item>
              <Dropdown.Item eventKey="DEV BIO">DEV BIO</Dropdown.Item>
              <Dropdown.Item eventKey="DRAMA">DRAMA</Dropdown.Item>
              <Dropdown.Item eventKey="EARTHSS">EARTHSS</Dropdown.Item>
              <Dropdown.Item eventKey="ECO EVO">ECO EVO</Dropdown.Item>
              <Dropdown.Item eventKey="ECON">ECON</Dropdown.Item>
              <Dropdown.Item eventKey="ECPS">ECPS</Dropdown.Item>
              <Dropdown.Item eventKey="ED AFF">ED AFF</Dropdown.Item>
              <Dropdown.Item eventKey="EDUC">EDUC</Dropdown.Item>
              <Dropdown.Item eventKey="EECS">EECS</Dropdown.Item>
              <Dropdown.Item eventKey="EHS">EHS</Dropdown.Item>
              <Dropdown.Item eventKey="ENGLISH">ENGLISH</Dropdown.Item>
              <Dropdown.Item eventKey="ENGR">ENGR</Dropdown.Item>
              <Dropdown.Item eventKey="ENGRCEE">ENGRCEE</Dropdown.Item>
              <Dropdown.Item eventKey="ENGRMAE">ENGRMAE</Dropdown.Item>
              <Dropdown.Item eventKey="EPIDEM">EPIDEM</Dropdown.Item>
              <Dropdown.Item eventKey="EURO ST">EURO ST</Dropdown.Item>
              <Dropdown.Item eventKey="FIN">FIN</Dropdown.Item>
              <Dropdown.Item eventKey="FLM&MDA">FLM&MDA</Dropdown.Item>
              <Dropdown.Item eventKey="FRENCH">FRENCH</Dropdown.Item>
              <Dropdown.Item eventKey="GDIM">GDIM</Dropdown.Item>
              <Dropdown.Item eventKey="GEN&SEX">GEN&SEX</Dropdown.Item>
              <Dropdown.Item eventKey="GERMAN">GERMAN</Dropdown.Item>
              <Dropdown.Item eventKey="GLBL ME">GLBL ME</Dropdown.Item>
              <Dropdown.Item eventKey="GLBLCLT">GLBLCLT</Dropdown.Item>
              <Dropdown.Item eventKey="GREEK">GREEK</Dropdown.Item>
              <Dropdown.Item eventKey="HEBREW">HEBREW</Dropdown.Item>
              <Dropdown.Item eventKey="HINDI">HINDI</Dropdown.Item>
              <Dropdown.Item eventKey="HISTORY">HISTORY</Dropdown.Item>
              <Dropdown.Item eventKey="HUMAN">HUMAN</Dropdown.Item>
              <Dropdown.Item eventKey="HUMARTS">HUMARTS</Dropdown.Item>
              <Dropdown.Item eventKey="I&C SCI">I&C SCI</Dropdown.Item>
              <Dropdown.Item eventKey="IN4MATX">IN4MATX</Dropdown.Item>
              <Dropdown.Item eventKey="INTL ST">INTL ST</Dropdown.Item>
              <Dropdown.Item eventKey="IRAN">IRAN</Dropdown.Item>
              <Dropdown.Item eventKey="ITALIAN">ITALIAN</Dropdown.Item>
              <Dropdown.Item eventKey="JAPANESE">JAPANESE</Dropdown.Item>
              <Dropdown.Item eventKey="KOREAN">KOREAN</Dropdown.Item>
              <Dropdown.Item eventKey="LATIN">LATIN</Dropdown.Item>
              <Dropdown.Item eventKey="LINGUIS">LINGUIS</Dropdown.Item>
              <Dropdown.Item eventKey="LIT JRN">LIT JRN</Dropdown.Item>
              <Dropdown.Item eventKey="LPS">LPS</Dropdown.Item>
              <Dropdown.Item eventKey="LSCI">LSCI</Dropdown.Item>
              <Dropdown.Item eventKey="M&MG">M&MG</Dropdown.Item>
              <Dropdown.Item eventKey="MATH">MATH</Dropdown.Item>
              <Dropdown.Item eventKey="MED HUM">MED HUM</Dropdown.Item>
              <Dropdown.Item eventKey="MGMT">MGMT</Dropdown.Item>
              <Dropdown.Item eventKey="MGMT EP">MGMT EP</Dropdown.Item>
              <Dropdown.Item eventKey="MGMT FE">MGMT FE</Dropdown.Item>
              <Dropdown.Item eventKey="MGMTMGMT HC">MGMTMGMT HC</Dropdown.Item>
              <Dropdown.Item eventKey="MGMTMBA">MGMTMBA</Dropdown.Item>
              <Dropdown.Item eventKey="MGMTPHD">MGMTPHD</Dropdown.Item>
              <Dropdown.Item eventKey="MOL BIO">MOL BIO</Dropdown.Item>
              <Dropdown.Item eventKey="MPAC">MPAC</Dropdown.Item>
              <Dropdown.Item eventKey="MSE">MSE</Dropdown.Item>
              <Dropdown.Item eventKey="MUSIC">MUSIC</Dropdown.Item>
              <Dropdown.Item eventKey="NET SYS">NET SYS</Dropdown.Item>
              <Dropdown.Item eventKey="NEURBIO">NEURBIO</Dropdown.Item>
              <Dropdown.Item eventKey="NUR SCI">NUR SCI</Dropdown.Item>
              <Dropdown.Item eventKey="PATH">PATH</Dropdown.Item>
              <Dropdown.Item eventKey="PED GEN">PED GEN</Dropdown.Item>
              <Dropdown.Item eventKey="PERSIAN">PERSIAN</Dropdown.Item>
              <Dropdown.Item eventKey="PHARM">PHARM</Dropdown.Item>
              <Dropdown.Item eventKey="PHILOS">PHILOS</Dropdown.Item>
              <Dropdown.Item eventKey="PHMD">PHMD</Dropdown.Item>
              <Dropdown.Item eventKey="PHRMSCI">PHRMSCI</Dropdown.Item>
              <Dropdown.Item eventKey="PHY SCI">PHY SCI</Dropdown.Item>
              <Dropdown.Item eventKey="PHYSICS">PHYSICS</Dropdown.Item>
              <Dropdown.Item eventKey="PHYSIO">PHYSIO</Dropdown.Item>
              <Dropdown.Item eventKey="POL SCI">POL SCI</Dropdown.Item>
              <Dropdown.Item eventKey="PORTUG">PORTUG</Dropdown.Item>
              <Dropdown.Item eventKey="PSCI">PSCI</Dropdown.Item>
              <Dropdown.Item eventKey="PSYCH">PSYCH</Dropdown.Item>
              <Dropdown.Item eventKey="PUBHLTH">PUBHLTH</Dropdown.Item>
              <Dropdown.Item eventKey="REL STD">REL STD</Dropdown.Item>
              <Dropdown.Item eventKey="ROTC">ROTC</Dropdown.Item>
              <Dropdown.Item eventKey="RUSSIAN">RUSSIAN</Dropdown.Item>
              <Dropdown.Item eventKey="SOC SCI">SOC SCI</Dropdown.Item>
              <Dropdown.Item eventKey="SOCECOL">SOCECOL</Dropdown.Item>
              <Dropdown.Item eventKey="SOCIOL">SOCIOL</Dropdown.Item>
              <Dropdown.Item eventKey="SPANISH">SPANISH</Dropdown.Item>
              <Dropdown.Item eventKey="SPPS">SPPS</Dropdown.Item>
              <Dropdown.Item eventKey="STATS">STATS</Dropdown.Item>
              <Dropdown.Item eventKey="SWE">SWE</Dropdown.Item>
              <Dropdown.Item eventKey="UCDC">UCDC</Dropdown.Item>
              <Dropdown.Item eventKey="UNI AFF">UNI AFF</Dropdown.Item>
              <Dropdown.Item eventKey="UNI STU">UNI STU</Dropdown.Item>
              <Dropdown.Item eventKey="UPPP">UPPP</Dropdown.Item>
              <Dropdown.Item eventKey="VIETMSE">VIETMSE</Dropdown.Item>
              <Dropdown.Item eventKey="VIS STD">VIS STD</Dropdown.Item>
              <Dropdown.Item eventKey="WRITING">WRITING</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          {selectedItem && <p>You selected: {selectedItem}</p>}
        </Form.Group>
        <Form.Group className="col-auto">
          <Form.Control
            className="form-control"
            type="text"
            id="userInput"
            value={inputValue}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group className="col-auto">
          <Button className="btn-primary mb-3" onClick={sendDataToFlask} href="/AddReview">
            Search
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
};

export default UserInputComponent;
