import React from 'react';

import { Navbar, Nav, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../store/actions/logout';
import ListOfCategoriesContainer from '../../containers/ListOfCategoriesContainer';

import './index.scss';

const Header = ({ onClickNewCategory, updateCategories, logout }) => (
  <header className='container' >
    <Navbar className='Navbar' variant='light' expand='lg'>
      <Navbar.Brand >
        <img
          alt='logo'
          style={{ width: '200px' }}
          src='https://magv1-prod.s3.amazonaws.com/image_assets/files/89/thumb-logo-konecta_%281%29-.png'
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className="" style={{ alignItems: 'center' }}>
          <Button className='button_nav' onClick={onClickNewCategory} style={{ marginRight: '5px', backgroundColor: '#111d5e' }}>New category</Button>
          <Button className='button_nav' ><NavLink style={{ color: 'white' }} to='/createpost'>New post</NavLink></Button>
          <Button className='button_nav' variant='success' style={{ marginLeft: '5px' }}><NavLink style={{ color: 'white' }} to='/adminUsers'>Users</NavLink></Button>
          <Button className='button_nav' onClick={() => logout()} variant='danger' style={{ marginLeft: '5px' }}>Logout</Button>

          <ListOfCategoriesContainer updateCategories={updateCategories} />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </header>
);
const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
  };
};
export default connect(null, mapDispatchToProps)(Header);