import React, { useState } from 'react';
import CreatePost from '../components/CreatePost';
import { connect } from 'react-redux';
import { addNewArticle } from '../store/actions/addNewArticle';

const CreateArticleContainer = ({ createNewArticle, token, userId }) => {

    const handlerAddArticle = (result) => {
        var data = new FormData();
        data.append('title', result.title);
        data.append('user_id', result.user_id);
        data.append('category_id', result.category_id);
        data.append('content_long', result.content_long);
        data.append('content_short', result.content_short);
        data.append('file', result.image);
        data.append('user_id', userId);

        createNewArticle(data, token);
    }
    return (
        <CreatePost onSubmit={handlerAddArticle} />
    );
}
const mapDispatchToProps = (dispatch) => {
    return {
        createNewArticle: (data, token) => dispatch(addNewArticle(data, token)),
    };
};
const mapStateProps = (state) => {
    return {
        token: state.userSign.userData.token,
        userId: state.userSign.userData.user.id
    };
};
export default connect(mapStateProps, mapDispatchToProps)(CreateArticleContainer);