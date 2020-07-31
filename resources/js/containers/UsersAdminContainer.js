import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getUsers } from '../store/actions/getUsers';
import TableUser from '../components/TableUser';

const UsersAdminContainer = ({ token, getUsers, users }) => {
    useEffect(() => {
        getUsers(token);
    },[])
    return (
        <TableUser users={ users }/>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        getUsers: (token) => dispatch(getUsers(token)),
    };
};

const mapStateProps = (state) => {
    console.log(state)
    return {
        token: state.userSign.userData.token,
        users: state.adminUsers.users
    };
};
export default connect(mapStateProps, mapDispatchToProps)(UsersAdminContainer);