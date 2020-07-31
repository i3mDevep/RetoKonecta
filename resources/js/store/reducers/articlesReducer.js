const intitState = { articles: [] };

const articlesReducer = (state = intitState, action) => {
  switch (action.type) {
    case 'GET_ARTICLES':
      return {
        ...state,
        articles: action.articles,
      };
      case 'ADD_ARTICLE':
        return {
          ...state,
          articles: [...state.articles, action.data],
        };
      case 'DELETE_ARTICLE':
        return {
          ...state,
          articles: state.articles.filter((article) => article.id != action.id),
        };
    default:
      return state;
  }
};

export default articlesReducer;