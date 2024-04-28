import React from 'react'
import { Container, Row } from 'react-bootstrap'
import Fb from '../assets/img/fb.png'
import Discord from '../assets/img/discord.png'
import X from '../assets/img/X.png'
import Reddit from '../assets/img/reddit.png'

const Community = () => {
  return (
    <section className='community'>
        <Container>
          <Row>
                <div className='commun'>
                    <div className='commun-image'>
                    <img src={Fb} alt=''/>
                    </div>
                    <div className='commun-txt'>
                    <h5>Facebook</h5>
                    </div>
                    <div className='commun-btn-left'>
                    <button>&#8599;</button>
                    </div>
                </div>

                <div className='commun' style={{marginTop: 20}}>
                    <div className='commun-image'>
                    <img src={Discord} alt=''/>
                    </div>
                    <div className='commun-txt'>
                    <h5>Discord</h5>
                    </div>
                    <div className='commun-btn-left'>
                    <button>&#8599;</button>
                    </div>
                </div>

                <div className='commun' style={{marginTop: 20}}>
                    <div className='commun-image'>
                    <img src={X} alt=''/>
                    </div>
                    <div className='commun-txt'>
                    <h5>Twitter</h5>
                    </div>
                    <div className='commun-btn-left'>
                    <button>&#8599;</button>
                    </div>
                </div>

                <div className='commun' style={{marginTop: 20}}>
                    <div className='commun-image'>
                    <img src={Reddit} alt=''/>
                    </div>
                    <div className='commun-txt'>
                    <h5>Reddit</h5>
                    </div>
                    <div className='commun-btn-left'>
                    <button>&#8599;</button>
                    </div>
                </div>
            </Row>
        </Container>
    </section>
  )
}

export default Community
