import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Particles from '../assets/img/particles1.png'

const Newsletter = () => {
  return (
    <section className='newsletter'>
        <Container>
          <Row>
            <Col xs={12} md={6}>
            <div className='news'>
                <img src={Particles} alt='' />
            </div>
            </Col>
    
            <Col>
                <div className='news-left'>
                <h2>Stay informed. Subscribe. <strong>Get Updated.</strong></h2>
                <p>Receive updates and access education resources on Carechain health</p>
                </div>

                <div className='news-email'>
                  <input placeholder='Your Email'></input><button>Done</button>
                  <p style={{marginTop: 10, color: "grey"}}>By signing up you agree to our terms and conditions</p>
                </div>
                
            </Col>
          </Row>
        </Container>
    </section>
  )
}

export default Newsletter
