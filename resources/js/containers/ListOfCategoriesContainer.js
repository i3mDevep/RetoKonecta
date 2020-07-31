import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getCategories } from '../store/actions/getCategories';
import { deleteCategory } from '../store/actions/deleteCategory';

import { ListOfCategories } from '../components/ListOfCategories';

const ListOfCategoriesContainer = ( { getCategories, categories, deleteCategory, token } ) => {

    const handlerDeleteCategory = (id) => {
        const result = confirm('are you sure to delete? this action will delete all article belong itself');
        if(result) {
            deleteCategory(id, token);
        }
    }
    useEffect(() => {
        getCategories(token);
    }, [])
    return (
        <ListOfCategories categories={categories} deleteCategory={handlerDeleteCategory}/>
    )
};


const mapDispatchToProps = (dispatch) => {
    return {
        getCategories: (token) => dispatch(getCategories(token)),
        deleteCategory: (id, token) => dispatch(deleteCategory(id, token))
    };
  };

  const mapStateProps = (state) => {
    return {
        categories:  state.resultAddCategories.categories,
        token: state.userSign.userData.token,
    };
  };
export default connect(mapStateProps, mapDispatchToProps)(ListOfCategoriesContainer);