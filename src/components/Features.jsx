import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Frame1 from '../assets/img/Frame1.svg';
import Frame2 from '../assets/img/frame2.svg';
import Frame3 from '../assets/img/frame3.svg';
import Frame4 from '../assets/img/frame4.svg';
import Frame5 from '../assets/img/frame5.svg';
import Frame6 from '../assets/img/frame6.svg';

const Features = () => {
  return (
    <section className='roadmap' id='roadmap'>
        <Container>
            <Row>
                
                <div className='roadmap-text'>
                <h1>Decentralised, Encrypted and User-controlled Security</h1>
                
                <p>These features work together to enhance the security, privacy and control of medical data in the Carechain  ecosystem </p>
                </div>
                
            </Row>

            <Row>
            <div className='products'>
            <div className='product'>
                <div className='product-card'>
                    <div className='product-card-tex'><p>Ensuring highly secure and transparent storage of medical data. Decentralized encryption enhances security and robust data integrity.</p></div>
                    <div className='product-card-img'>
                        <img src={Frame1} alt='' height={120} />
                    </div>
                    <div className='product-card-btn'>
                    <button href='#' className='btn-card-left'>&#x2192;</button> <button href='#' className='btn-card-right'>Data Security</button>
                    </div>
                </div>
            </div>

            <div className='product'>
                <div className='product-card'>
                    <div className='product-card-tex'><p>A tool that enables the real-time observation of the quantifiable impact of collective community efforts.</p></div>
                    <div className='product-card-img2'>
                        <img src={Frame2} alt='' height={120} />
                    </div>
                    <div className='product-card-btn'>
                    <button href='#' className='btn-card-left2'>&#x2192;</button> <button href='#' className='btn-card-right2'>Impact Tracker</button>
                    </div>
                </div>
            </div>

            <div className='product'>
                <div className='product-card'>
                    <div className='product-card-tex'><p>A transformative approach where authority is distributed, providing increased security, transparency, and autonomy</p></div>
                    <div className='product-card-img'>
                        <img src={Frame3} alt='' height={120} />
                    </div>
                    <div className='product-card-btn'>
                    <button href='#' className='btn-card-left'>&#x2192;</button> <button href='#' className='btn-card-right'>Decentralised</button>
                    </div>
                </div>
            </div>

            <div className='product'>
                <div className='product-card'>
                    <div className='product-card-tex'><p>A dynamic integration of future technologies to help facilitates wellbeing and also form a balance in selfcare.</p></div>
                    <div className='product-card-img2'>
                        <img src={Frame4} alt='' height={120} />
                    </div>
                    <div className='product-card-btn'>
                    <button href='#' className='btn-card-left'>&#x2192;</button> <button href='#' className='btn-card-right'>AI Integration</button>
                    </div>
                </div>
            </div>

            <div className='product'>
                <div className='product-card'>
                    <div className='product-card-tex'><p>Experience the advantage of low fees-an economical solution designed to minimize costs for users. Enjoy financial transaction with reduced charges.</p></div>
                    <div className='product-card-img'>
                        <img src={Frame5} alt='' height={120} />
                    </div>
                    <div className='product-card-btn'>
                    <button href='#' className='btn-card-left2'>&#x2192;</button> <button href='#' className='btn-card-right2'>Low Fees</button>
                    </div>
                </div>
            </div>

            <div className='product'>
                <div className='product-card'>
                    <div className='product-card-tex'><p>Elevate your well-being with our Health Reward program-earning enticing perks as you reach fitness milestones. It’s more than a journey.</p></div>
                    <div className='product-card-img2'>
                        <img src={Frame6} alt='' height={120} />
                    </div>
                    <div className='product-card-btn'>
                    <button href='#' className='btn-card-left'>&#x2192;</button> <button href='#' className='btn-card-right'>Health Rewards</button>
                    </div>
                </div>
            </div>

            </div>
            </Row>
        </Container>
        
    </section>
  )
}

export default Features
