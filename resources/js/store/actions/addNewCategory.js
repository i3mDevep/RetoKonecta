export const addNewCategory = (data, token) => {
    return async (dispatch) => {
        fetch("http://127.0.0.1:8000/api/categories", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}}`,
            },
            body: data
        })
            .then((result) => result.json())
            .then((r) => {
                console.log(r)
                dispatch({ type: 'ADD_CATEGORY', category: r.category })
            })
    }
}