// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export function NavbarComponent() {
  const whatsappNumber = '62895395316970';
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  const handleNavItemClick = () => {
    setExpanded(false); // Tutup menu setelah item di klik
    scrollToTop(); // Memanggil fungsi untuk mengatur posisi scroll ke atas
  };

  // Fungsi untuk mengatur posisi scroll ke atas
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    // Menutup menu saat komponen dilepas (unmounted)
    return () => {
      setExpanded(false);
    };
  }, []);

  return (
    <Navbar expand="lg" expanded={expanded} className='header fixed-top animate__animated animate__backInDown'>
      <Container>
        <Navbar.Brand as={Link} to="/" onClick={handleNavItemClick}>
          <img src="/img/logodiana.png" alt="logo-igc" style={{ width:'40px' }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle} />

        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="menu mx-auto">
            <Nav.Link as={Link} to="/" onClick={handleNavItemClick}>HOME</Nav.Link>
            <Nav.Link as={Link} to="/paketan" onClick={handleNavItemClick}>PAKETAN</Nav.Link>
            <Nav.Link as={Link} to="/testimoni" onClick={handleNavItemClick}>TESTIMONI</Nav.Link>
            <Nav.Link as={Link} to="/gallery" onClick={handleNavItemClick}>GALLERY</Nav.Link>
            <Nav.Link as={Link} to="/kontak" onClick={handleNavItemClick}>KONTAK</Nav.Link>
          </Nav>

          <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer">
            <button className='daftar'>
              Booking Sekarang
            </button>
          </a>
      
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


export default NavbarComponent;


