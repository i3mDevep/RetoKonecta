import React from 'react';
import { Table, Button } from 'react-bootstrap';

const TableUser = ({ users= [] }) => (
    <Table striped bordered hover variant="dark">
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {
                users.map((user) =>
                    <tr>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.role?'Admin':'User'}</td>
                        <td><Button  disabled={user.role} variant='danger'>Delete</Button></td>
                    </tr>
                )
            }
        </tbody>
    </Table>
)

export default TableUser;