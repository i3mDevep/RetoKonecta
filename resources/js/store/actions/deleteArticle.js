
export const deleteArticle = (id, token) => {
    return  async (dispatch) => {
        try {
            let config = {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}}`,
                },
            }
            let res = await fetch(`http://127.0.0.1:8000/api/posts/${id}`, config);

            dispatch({type: 'DELETE_ARTICLE', id: id })

            let d = await res.json();
        } catch(error){
            console.error(error);
        }
    }
}