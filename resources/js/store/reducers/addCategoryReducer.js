const intitState = {
  categories: [], error: '',
};

const addCategoryReducer = (state = intitState, action) => {
  switch (action.type) {
    case 'GET_CATEGORY':
      return {
        ...state,
        categories: action.categories,
        error: '',
      };
    case 'ADD_CATEGORY':
      return {
        ...state,
        categories: [...state.categories, action.category],
        error: '',
      };
    case 'DELETE_CATEGORY':
      return {
        ...state,
        categories: state.categories.filter((category) => category.id != action.id),
        error: '',
      };
    case 'ERROR_CATEGORY':
      return {
        ...state,
        categories: [],
        error: action.error,
      }
    default:
      return state;
  }
};

export default addCategoryReducer;