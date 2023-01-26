import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import alarm from '../assets/img/alarm.png'
import web from '../assets/img/web.png'
import automatic from '../assets/img/automatic.png'
import water from '../assets/img/water.png'

function Features() {
  return (
    <section id="features">
      <h1>Features of the Robot</h1>
      <div className="alarm">
        <Container>
          <Row>
            <Col>
              <div className="imgContainer grad">
                <img src={alarm} alt="Alarm System" />
              </div>
            </Col>
            <Col>
              <h2>Alarm System ⏰ </h2>
              <p>
                The Robot has an alarm system which lets the user know when to
                intake the medicine.
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <h2>Web Connectivity 🌐 </h2>
              <p>
                It is connected with this website. The user can enter the name
                of the compartment and medicine, and time at which the medicine
                is to be taken in this website.
              </p>
              <button className='secondAddBtn'>Add new Medicine</button>
            </Col>
            <Col>
              <div className="imgContainer grad">
                <img src={web} alt="Web Connectivity" />
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className='imgContainer' >
                <img src={automatic} alt="Automatic Opening and Closing Compartments" />
              </div>
            </Col>
            <Col>
              <h2>Automatic Opening and Closing Compartments 📥 </h2>
              <p>
                The compartments that store the medicine automatically open and
                close.
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <h2>Inbuilt Water Dispenser 🚰 </h2>
              <p>
                The robot has an inbuilt water dispenser that dispenses water.
              </p>
            </Col>
            <Col>
              <div className="imgContainer grad">
                <img src={water} alt="Inbuilt Water Dispenser" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
}

export default Features