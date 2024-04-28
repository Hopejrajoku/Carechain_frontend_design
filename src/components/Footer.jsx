import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Log from '../assets/img/logo1.png';
import Fb1 from '../assets/img/Fb1.png';
import Tw from '../assets/img/Tw.png';
import In from '../assets/img/In.png';
import Ln from '../assets/img/Ln.png';


const Footer = () => {
  return (
    <section className='footer'>
        <Container>
            <Row>
                <Col>
                    <div className='footer-tx' style={{marginBottom: 20}}>
                    <h2>Transforming The World Through Blockchain</h2>
                    <h6>Unlocking transformative opportunities one block at a time, as we pioneer the evolution of the world through blockchain technology</h6>
                    </div>
                </Col>
                <Col>
                    <div className='footer-btn' style={{marginBottom: 20}}>
                    <button>Connect Wallet</button>
                    </div>
                </Col>
                <div className='footer-bx'>
                    <div className='footer-image'>
                    <img src={Fb1} alt=''/>
                    <img src={Tw} alt='' style={{marginLeft: 5}}/>
                    <img src={In} alt='' style={{marginLeft: 5}}/>
                    <img src={Ln} alt='' style={{marginLeft: 5}}/>
                    </div>
                    <h5>© 2023 CareChain. All rights reserved.</h5>
                    <div className='footer-image-left'>
                    <img src={Log} alt=''/>
                    </div>
                </div>
            </Row>
        </Container>
    </section>
  )
}

export default Footer
