export const getArticles = (token) => {
    return  async (dispatch) => {
        try {
            let config = {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}}`,
                },
            }
            let res = await fetch('http://127.0.0.1:8000/api/posts', config);
            let data = await res.json();
            dispatch({type: 'GET_ARTICLES', articles: data })
        } catch (error) {
            console.error(error);
        }
    }
}