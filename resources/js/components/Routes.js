import React, { useEffect, useState } from 'react';

import SignInPage from '../pages/SignInPage';
import SignUpPage from '../pages/SignUpPage';
import BlogPage from '../pages/BlogPage';
import NewPostPage from '../pages/NewPostPage';
import AdminUserPage from '../pages/AdminUserPage';
import PostPage from '../pages/PostPage';

import { connect } from 'react-redux';
import { getAuthState } from '../store/actions/signIn';

import { ScreenLoading } from '../components/ScreenLoading';

import { useLocalStorage } from '../hooks/useLocalStorage';

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

const Routes = ({ isAuth, getAuthState }) => {
    const [iniLoading, setIniLoading] = useState(true);
    const [ storedValueToken, setLocalStorageToken ] = useLocalStorage('konecta_token', '');

    useEffect(() => {
        getAuthState(storedValueToken)
            .finally(() => setIniLoading(false))
    }, []);
    return (
        <div>
            {
                iniLoading ? <ScreenLoading />:
                    <BrowserRouter>
                        <Switch>
                            {
                                !isAuth && NotAccess
                            }
                            {
                                isAuth && AllowAccess
                            }
                        </Switch>
                    </BrowserRouter>
            }
        </div>
    )
};

const NotAccess = [
    <Route path='/' exact={true} component={() => <Redirect to='/login' />} />,
    <Route path='/login' exact={true} component={() => <SignInPage />} />,
    <Route path='/register' exact={true} component={() => <SignUpPage />} />,
    <Route path='/blog' component={() => <Redirect to='/login' />} />,
    <Route path='/createpost' exact={true} component={() => <Redirect to='/login' />} />,
    <Route path='/adminUsers' exact={true} component={() => <Redirect to='/login' />} />,
    <Route path='/post/:id' exact={true} component={() => <Redirect to='/login' />} />,
];

const AllowAccess = [
    <Route path='/' exact={true} component={() => <Redirect to='/login' />} />,
    <Route path='/login' exact={true} component={() => <Redirect to='/blog' />} />,
    <Route path='/register' exact={true} component={() => <Redirect to='/blog' />} />,
    <Route path='/blog' component={() => <BlogPage />} />,
    <Route path='/createpost' exact={true} component={() => <NewPostPage />} />,
    <Route path='/adminUsers' exact={true} component={() => <AdminUserPage />} />,
    <Route path='/post/:post_id' component={PostPage} />,

];

const mapStateProps = (state) => {
    return {
        isAuth: state.userSign.isAuth
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getAuthState: (token) => dispatch(getAuthState(token)),
    };
};

export default connect(mapStateProps, mapDispatchToProps)(Routes);
