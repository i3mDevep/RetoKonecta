import React from 'react';
import { connect } from 'react-redux';
import { signIn } from '../store/actions/signIn';
import SignIn from '../components/SignIn';

const SignInContainer = ({ signIn, loading, error }) => {

    const handlerLogin = (credentials) => {
        signIn(credentials);
    }
    return (
        <SignIn onSubmit={handlerLogin} loading={loading} error={error} />
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (crendentials) => dispatch(signIn(crendentials)),
    };
  };

  const mapStateProps = (state) => {
    return {
        loading:  state.userSign.loading,
        error: state.userSign.error

    };
  };
export default connect(mapStateProps, mapDispatchToProps)(SignInContainer);