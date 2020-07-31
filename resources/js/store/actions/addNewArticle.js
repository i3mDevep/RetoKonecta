export const addNewArticle = (data, token) => {
    return  async (dispatch) => {
        try {
            let config = {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token}}`,
                },
                body: data,
            }
            let res = await fetch('http://127.0.0.1:8000/api/posts', config);
            let d = await res.json();
            console.log(d);
            alert('THIS POST WAS CREATED WITH SUCCESS!')
        } catch(error){
            alert('Oppss!! error unknow!')
            console.error(error);
        }
    }
}