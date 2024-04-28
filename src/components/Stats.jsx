import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Impact from '../assets/img/imapct.png';
import Vector1 from '../assets/img/Vector1.png';
import Future from '../assets/img/future.png';
import Infinity from '../assets/img/infinity.png';
import Five from '../assets/img/five.png';
import Eight from '../assets/img/eight.png';
import Sixty from '../assets/img/sixty.png';
import Atem from '../assets/img/atem.png';
import Six from '../assets/img/six.png';
import Fivek from '../assets/img/fivek.png';

const Stats = () => {
  return (
    <section className='stats' id='dao'>
        <Container>
            <Row>
                <Col xs={12} md={6}>
                <h1 className='stats-right-text'>Stats With <img src={Impact} alt=''/> Impact</h1>
                </Col>
                <Col xs={12} md={6}>
                <p className='stats-left-text'>Improving and promoting healthcare through blockchain and Ai.</p>
                <div className='stats-left'>
                <p><img src={Vector1} alt=''/> Now</p>
                <p><img src={Future} alt=''/> The Future</p>
                <p><img src={Infinity} alt=''/> Forever</p>
                </div>
                </Col>
                <Col Col xs={12} md={6}>
                
                </Col>
            </Row>
            
        </Container>
        <div className='group-contain'>
        <img src={Five} alt=''  className='five' />
        <img src={Eight} alt='' className='eight' />
        <img src={Sixty} alt=''  className='five' />
        <img src={Atem} alt=''  className='eight' />
        <img src={Six} alt=''   className='five'/>
        <img src={Fivek} alt='' className='eight'  />
        </div>
                
    </section>
  )
}

export default Stats
