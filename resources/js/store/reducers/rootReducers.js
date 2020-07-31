import { combineReducers } from 'redux';
import addCategoryReducer from './addCategoryReducer';
import articlesReducer from './articlesReducer';
import userSign from './userSign';
import adminUsers from './adminUsers';

const rootReducers = combineReducers({
    resultAddCategories: addCategoryReducer,
    articlesReducer: articlesReducer,
    userSign: userSign,
    adminUsers: adminUsers
});

export default rootReducers;
