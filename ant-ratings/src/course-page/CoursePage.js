import React from "react";
import { Container, Row } from "react-bootstrap";
import axios from 'axios';
// import "./CoursePage.css;"


const CoursePage = () => {
    console.log("rendered course page")
    return (
        <>
            <h1>TEST</h1>
            <div id="ratings">
                <div class="rating-holder" id="diff-rating">
                    <p class="number-inside">5</p>
                </div>
                <div class="rating-holder" id="hrs-per-week">
                    <p class="number-inside">5</p>
                </div>
            </div>
        </>
    );
};

export default CoursePage;