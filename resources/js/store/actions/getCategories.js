export const getCategories = (token) => {

    return async (dispatch) => {
        try {
            let config = {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}}`,
                },
            }
            let res = await fetch('http://127.0.0.1:8000/api/categories', config);
            let data = await res.json();
            dispatch({ type: 'GET_CATEGORY', categories: data.categories })
        } catch (error) {
            dispatch({ type: 'ERROR_CATEGORY', categories: error })
            console.error(error);
        }
    }
}