import React, { useContext } from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { AuthContext } from '../store/context/AuthContext';
import logo from '../assets/attachment_15960883.svg';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../store/context/FireContext';

function NavBar() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const logOut = () => {
    auth.signOut();
    localStorage.removeItem('token');
    !user && navigate('/signIn');
  };
  return user ? (
    <Navbar>
      <Container>
        <Navbar.Brand bg='light' href='/home'>
          <img src={logo} alt='link logo display' width={'75px'} />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className='justify-content-end'>
          <Navbar.Text>
            Signed in as: <Link to='/profile'>{user.email}</Link>
          </Navbar.Text>
          <Button variant='outline-primary' className='ms-3' onClick={logOut}>
            LogOut
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  ) : (
    <Navbar bg='light' expand='lg'>
      <Container>
        <Navbar.Brand href='/home'>
          <img src={logo} alt='link logo display' width={'75px'} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ms-auto'>
            <Nav.Link href='/signIn'>SIGN IN</Nav.Link>
            <Nav.Link href='/signUp'>SIGN UP</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
