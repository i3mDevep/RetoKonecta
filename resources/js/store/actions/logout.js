export const logout = () => {
    return  async (dispatch) => {
        dispatch({type: 'CLOSE_SESSION' });
    }
}