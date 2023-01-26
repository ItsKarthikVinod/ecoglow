import React from "react";
import {  Col, Container, Row } from "react-bootstrap";
import robot from '../assets/img/robot-final.png'

function Banner() {
  return (
    <section className="banner md-padding-8%" id="home">
      <Container>
        <Row className="align-items-center row1">
          <Col md={6} xs={12} xl={7} className="col1">
            <h1>{`Fulfilling Patient's Rights`}</h1>
            <p>
              Right Patient, Right Drug, Right Dosage, Right Route, and the
              Right Time
            </p>
            <button className="addNewBtn">Add new Medicine</button>
            <button className="learnBtn">Learn More</button>
          </Col>
          <Col md={6} xs={12} xl={5} className="col1">
            <img src={robot} alt="Robot"  />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Banner;
