import React from 'react';

import { Nav, Container, Row, Col, NavItem, NavLink } from 'react-bootstrap';
import './footer.scss';

const Footer = () => (
      <footer className='p-2 footer_home'>
        <Container>
          <Row className='align-items-center justify-content-xl-between'>
            <Col xl='6'>
              <div className='copyright text-center text-xl-left footer_color '>
                © 2020
                <a
                  className='font-weight-bold ml-1 footer_color'
                  target='_blank'
                >
                  Konecta
                </a>
              </div>
            </Col>
            <Col xl='6'>
              <Nav className='nav-footer justify-content-center justify-content-xl-end '>
                <NavItem>
                  <NavLink
                    className='footer_color'
                    target='_blank'
                  >
                    Konecta Website
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className='footer_color'
                    target='_blank'
                  >
                    Blog
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className='footer_color'
                    target='_blank'
                  >
                    Cookies Policy
                  </NavLink>
                </NavItem>
              </Nav>
            </Col>
          </Row>
        </Container>
      </footer>
);

export default Footer;
