import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import GSCornerLogo from '../../assets/GSCornerlogo.png'
import logoutIcon from '../../assets/logout.svg'
import Button from 'react-bootstrap/Button'
import {Link} from 'react-router-dom'
import '../../App.css'
import { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import { Container } from 'react-bootstrap'




const NavbarMenu = () => {

    const {authState: {user: {username}}, logoutUser} = useContext(AuthContext)
    const logout = () => logoutUser()


  return (
    <Navbar expand='lg' variant='dark' sticky='top' className='header'>
        <Container>
        <Navbar.Brand className='font-weight-bolder text-white'>
            <img src={GSCornerLogo} alt="learnItLogo" width='120' height='35' className='mr-2'/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='mr-auto' >
                <Nav.Link className='font-weight-bolder text-white' to='/dashboard' as={Link}>
                    Home
                </Nav.Link>
                <Nav.Link className='font-weight-bolder text-white' to='/posts' as={Link}>
                    Posts
                </Nav.Link>
                <Nav.Link className='font-weight-bolder text-white' to='/games' as={Link}>
                    Games
                </Nav.Link>
            </Nav>
            <Nav className='ms-auto'>
                <Nav.Link className='User text-white' disabled>
                    Welcome {username}
                </Nav.Link>
                <Button variant='secondary' className='font-weight-bolder text-white' onClick={logout}>
                    <img src={logoutIcon} alt="logoutIcon" width='32' height='32' className='mr-2'/>
                    Logout
                </Button>
            </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default NavbarMenu