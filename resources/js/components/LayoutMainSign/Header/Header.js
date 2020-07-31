import React from 'react';
import { NavLink } from 'react-router-dom';

import { BsPeopleCircle, BsCompass } from 'react-icons/bs';
import { Navbar, Nav } from 'react-bootstrap';

import './header.scss';

const Header = () => (
      <header className='container'>
        <Navbar className='Navbar' variant='dark' expand='lg'>
          <Navbar.Brand >
            <img
              alt='logo'
              style= {{width: '200px'}}
              src='https://magv1-prod.s3.amazonaws.com/image_assets/files/89/thumb-logo-konecta_%281%29-.png'
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto'>
              <NavLink to='/login' className='mr-3'>
                <BsPeopleCircle />
                {' '}
                Login
              </NavLink>
              <NavLink className='mr-3' to='/register'>
                <BsCompass />
                {' '}
                Registro
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
    );

export default Header;
