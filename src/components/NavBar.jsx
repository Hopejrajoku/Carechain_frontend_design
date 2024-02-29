import React, { useEffect, useState } from 'react'
import { 
    Container, 
    Nav, 
    NavDropdown, 
    Navbar } 
    from 'react-bootstrap';
import Logo from '../assets/img/logo.svg';

const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () =>  {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else{
                setScrolled(false);
            }
        }
        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);

    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }


  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home" >
            <img src={Logo} alt='logo' height={40} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className='navbar-toggler-icon' ></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#about" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('about')}>About</Nav.Link>
            <Nav.Link href="#dao" className={activeLink === 'dao' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('dao')}>Dao</Nav.Link>
            <Nav.Link href="#team" className={activeLink === 'team' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('team')}>Team</Nav.Link>
            <Nav.Link href="#roadmap" className={activeLink === 'roadmap' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('roadmap')}>RoadMap</Nav.Link>
            <NavDropdown title="Resources" id="basic-nav-dropdown">
            </NavDropdown>
          </Nav>
          <button className='vvd' onClick={() => console.log('connect')}><span>Connect Wallet &#8599;</span></button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavBar
