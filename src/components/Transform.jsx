import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import VideoImg from '../assets/img/video.png';

const Transform = () => {
  return (
    <section className='transform'>
        <Container>
            <Row>
                <Col xs={12} md={6}>
                    <div className='transforming'>
                        <div style={{marginBottom: 18}}>
                            <button>Revolutionary</button>
                        </div>
                        <h2 style={{marginBottom: 40}}>Empowering Health Through Data and AI</h2>
                        <img src={VideoImg} alt='' />
                    </div>
                </Col>

                <Col>
                    <div className='transform-left-text' style={{ marginTop: 40}}>
                    <h6>Carechain uses biometric data and AI to improve the patient experience. Our goal is to empower individuals with the tools and information they need to take control of their health and well-being.</h6>
                    </div>
                    <Row>
                    <Col>
                        <h5>92% Increase</h5>
                        <p>Over 92% of users reported receiving precise and reliable health diagnoses through Carechain's innovative use of biometric data and AI.</p>
                       
                    </Col>
                    <Col>
                        <h5>50% Growth</h5>
                        <p>A staggering 87% experienced measurable health improvements following personalised recommendations provided by Carechain.</p>
                    </Col>
                    <div className='tranform-btn'><button>Become a partner</button></div>
                    </Row>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Transform
