import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';

import UsersAdminContainer from '../containers/UsersAdminContainer';
import HomeNav from '../components/HomeNav';


const AdminUserPage = () => {
    return (
        <Container style={{ padding: '70px' }}>
            <div>
                <HomeNav />
            </div>
            <Row>
                <Col>
                    <h4 style={{ fontSize: '1.5rem', padding: '10px'}} >Manage your users</h4>
                    <UsersAdminContainer />
                </Col>
            </Row>
        </Container>
    )
}
export default AdminUserPage;