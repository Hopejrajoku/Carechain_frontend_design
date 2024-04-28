import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Frame from '../assets/img/Frame.png';
import Pic from '../assets/img/Pics.png';

const About = () => {
  return (
      <section className='about-page' id='about'>
        <Container className='align-items-center'>
            <Row  >
            <Col xs={12} md={6}>
              <div className='left-card'><img src={Frame} alt='' /></div>
  
              <div className='right-card'>
                   <img src={Pic} alt='' />
                   <div className='right-card-text'><p><strong>Innovating</strong> Healthcare Through Blockchain Technology</p></div>
              </div>
                    
            </Col>
            <Col className='left-card-header'>
            <span>Carechain</span>
            <p style={{marginBottom: 20}}>Carechain is a revolutionary crypto medical product that leverages the power of biometric data and AI to provide accurate diagnosis of health conditions and personalized health recommendations.</p>
            <p>Carechain uses blockchain technology to provide secure and transparent storage of medical data, making it easy for users to access their medical records. With gamification, Stake, swap, Dao’s features and access to educational resources on various health topics, Carechain encourages healthy habits and lifestyle changes in web3 and web2 industries generally.</p>
            <button className='card-btn' onClick={() => console.log('home')}>&#8599;</button>
            </Col>
            </Row>
        </Container>
     </section>
  )
}

export default About
