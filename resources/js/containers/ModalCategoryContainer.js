import React from 'react';
import { connect } from 'react-redux';
import { addNewCategory } from '../store/actions/addNewCategory';
import ModalCategory from '../components/ModalCategory';

const ModalCategoryContainer = ({ show, onHide, addNewCategory, token, userId }) => {

    const handlerOnSubmit = (imagedata, title) => {
        console.log(imagedata);

        var data = new FormData();
        data.append("file", imagedata);
        data.append('title', title.value);
        data.append('user_id', userId);

        addNewCategory(data, token);
    }
    return (
        <ModalCategory show={show} onHide={onHide} onSubmit={handlerOnSubmit} />
    )
}


const mapStateProps = (state) => {
    return {
        token: state.userSign.userData.token,
        userId: state.userSign.userData.user.id
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addNewCategory: (data, token) => dispatch(addNewCategory(data, token))
    };
};
export default connect(mapStateProps, mapDispatchToProps)(ModalCategoryContainer);