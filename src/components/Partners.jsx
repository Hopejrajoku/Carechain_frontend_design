import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Vector1 from '../assets/img/Vector1.svg'
import Stella2 from '../assets/img/Stellar2.svg'
import Vector3 from '../assets/img/Vector3.svg'
import Binance from '../assets/img/Binance4.svg'
import Solana from '../assets/img/Solana5.svg'
import Uniswap from '../assets/img/Uniswap6.svg'
import Group7 from '../assets/img/Group7.svg'
import Group8 from '../assets/img/Group8.svg'
import Filecoin from '../assets/img/Filecoin9.svg'




const Partners = () => {
  return (
    <section className='partners'>
        <Container>
            <Row>
                <Col>
                    <div className='partner'>
                        <div className='parts'> 
                        <div className='partner-image'>
                            <img src={Vector1} alt='' />
                        </div>
                        <div className='partner-image'>
                            <img src={Stella2} alt='' />
                        </div>
                        <div className='partner-image'>
                            <img src={Vector3} alt='' />
                        </div>
                        <div className='partner-image'>
                            <img src={Binance} alt='' />
                        </div>
                        <div className='partner-image'>
                            <img src={Solana} alt='' />
                        </div>
                        <div className='partner-image'>
                            <img src={Uniswap} alt='' />
                        </div>
                        <div className='partner-image'>
                            <img src={Group7} alt='' />
                        </div>
                        <div className='partner-image'>
                            <img src={Group8} alt='' />
                        </div>
                        <div className='partner-image'>
                            <img src={Filecoin} alt='' />
                        </div>
                        </div>
                    </div>
                </Col>
                <Col xs={12} md={6}>
                    <div >
                    <div className='partner-one'>
                    <button className='partner-btn-one'>Leading Partenrship</button>
                    </div>
                    <div  className='partner-txt-left'>
                    <h2>Backed By Industry Leading Experts</h2>
                    <p>Carechain trusted partnerships to foster effective collaborations between companies or platforms that aim to provide secure, worthy and reliable services to users across the ecosystem.</p>
                    </div>
                    <div className='partner-one'><button className='partner-btn-two'>See Partnerships</button></div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Partners
