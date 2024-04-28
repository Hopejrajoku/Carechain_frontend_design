import React from 'react'
import { Container } from 'react-bootstrap';
import Video from '../assets/videos/video.mp4';

const Team = () => {
    
  return (
    <section className='team' id='team'>
        <Container className='align-items-center'>
            <video  playsInline autoPlay controls>
                <source src={Video} type='video/mp4'/>
            </video>
        </Container>
    </section>
  )
}

export default Team
