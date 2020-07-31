import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { deleteArticle } from '../store/actions/deleteArticle';
import { getArticles } from '../store/actions/getArticles';


import ListCardArticles from '../components/ListCardArticles';

const ListCardArticlesContainer = ( { deleteArticle, getArticles, token, categories } ) => {

    useEffect(() => {
        getArticles(token);
    },[categories]);

    const authResult = new URLSearchParams(window.location.search);
    const code = authResult.get('id')

    const handlerDeleteArticle = (id) => {
        const result = confirm('are you sure to delete this ?');
        if(result){
            deleteArticle(id, token);
        }
    }
    return (
        <ListCardArticles idFilter = {code} deleteArticle={handlerDeleteArticle} />
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteArticle: (id, token) => dispatch(deleteArticle(id, token)),
        getArticles: (token) => dispatch(getArticles(token))
    };
  };

  const mapStateProps = (state) => {
    return {
        token: state.userSign.userData.token,
        categories:  state.resultAddCategories.categories,
    };
  };
export default connect(mapStateProps, mapDispatchToProps)(ListCardArticlesContainer);