import React from 'react';
import { connect } from 'react-redux';
import { signUp } from '../store/actions/signUp';
import SignUp from '../components/SignUp';

const SignUpContainer = ({ signUp, loading, error }) => {
    const handlerSignUp = (data) => {
        signUp(data);
    }
    return (
        <SignUp onSubmit={handlerSignUp} loading={loading} error={error} />
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (data) => dispatch(signUp(data)),
    };
};

const mapStateProps = (state) => {
    return {
        loading: state.userSign.loading,
        error: state.userSign.error
    };
};
export default connect(mapStateProps, mapDispatchToProps)(SignUpContainer);