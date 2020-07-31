const intitState = { isAuth: false, loading: false, error: '', userData: {} };

const userSign = (state = intitState, action) => {

  switch (action.type) {
    case 'REQUESTING_LOGIN':
      return {
        ...state,
        loading: true,
        error: '',
        userData: {}
      };
    case 'SUCCES_LOGIN':
      return {
        ...state,
        isAuth: true,
        loading: false,
        error: '',
        userData: action.userData
      };
    case 'ERROR_LOGIN':
      return {
        ...state,
        isAuth: false,
        loading: false,
        error: action.error,
        userData: {}
      };
      case 'CLOSE_SESSION':
        return {
          ...state,
          isAuth: false,
          loading: false,
          error: '',
          userData: {}
      };
    default:
      return state;
  }
};

export default userSign;