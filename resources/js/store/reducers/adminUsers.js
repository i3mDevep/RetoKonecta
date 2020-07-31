const intitState = { users: [] };

const adminUsers = (state = intitState, action) => {
    console.log(action);
  switch (action.type) {
    case 'GET_USERS':
      return {
        ...state,
        users: action.users
      };
    case 'DELETE_USERS':
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default adminUsers;