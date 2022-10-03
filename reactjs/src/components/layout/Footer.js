import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import '../../App.css'
import { Container } from 'react-bootstrap'




const Footer = () => {

  return (
    <Navbar expand='lg' variant='dark' sticky='top' className='header'>
        <Container>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='mr-auto' >
                <a href='https://coreui.io'>Core UI</a>
                <span>© 2022 MSIS207.N12.CTTT</span>
            </Nav>
            <Nav className='ms-auto'>
                <span>Powered by </span>
                <a href='https://www.facebook.com/LeThanhowo'>© Me</a>
            </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default Footer