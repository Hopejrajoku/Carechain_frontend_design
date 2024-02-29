import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Brain from '../assets/img/brain.svg';
import Grow from '../assets/img/grow.svg';
import Pics from '../assets/img/pics.svg';

const Banner = () => {




  return (
    <section className='banner' id='home'>
        <Container className='align-items-center'>
            <Row className='roww' >
            <Col xs={12} md={6}>
                    <span className='blooock'>Blockchain, Changing Lives</span>
                    <p className='blooock-p'>Revolutionising Healthcare with <strong>Blockchain Technology</strong> Integrated with <strong>Ai</strong></p>
            </Col>

            <Col  className='left'>
              <div className='left-div'>
              <div className='right-div'>
                <div className='right-div-div'>
                <h1 className='case'>20K</h1>
                <h2 style={{fontFamily: 'Chakra petch', fontWeight: 500, fontSize: 22, color: '#000', marginBottom:'5px'}}>Lives</h2>
                <p style={{fontFamily: 'Chakra petch', fontWeight: 500, fontSize: 18, color: '#000', marginBottom:'5px'}}>Improved</p>
                <img src={Pics} alt='' style={{marginBottom:'10px'}} />
                </div>
                <div className='brain'><img src={Brain} alt='' className='brain' /></div>
              <div className='growth'>
                <div className='growth-p'>
                <p style={{fontFamily: 'Chakra petch', fontWeight: 500, fontSize: 12, color: '#000', marginBottom: 0}}>Growth</p>
                <p style={{fontFamily: 'Chakra petch', fontWeight: 500, fontSize: 22, color: '#000', marginBottom: 0}}>70%</p>
                <img src={Grow} alt=''height={30} />
                </div>
                
                </div>
              </div>
              
              </div>
              
            </Col>
            </Row>
        </Container>
      
    </section>
  )
}

export default Banner
