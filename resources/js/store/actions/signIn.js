
export const signIn = (credentials) => {
    return  async (dispatch) => {
        dispatch({type: 'REQUESTING_LOGIN', credentials});
        let config = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials),
        }
        fetch('http://127.0.0.1:8000/api/login', config)
        .then((response) => response.json())
        .then((result) => {
            if(result.token){
                return new Promise((resolve, reject) => {
                    getStatePromise(result.token)
                    .then((res) => {
                        resolve({ user: res.user, token: result.token })
                    })
                    .catch((err) => reject(err))
                })
            }
            throw new Error(result.error);
        })
        .then((mydata) => {
            try {
                window.localStorage.setItem('konecta_token', JSON.stringify(mydata.token));
            } catch (e) {
                console.error(e);
            }
            dispatch({type: 'SUCCES_LOGIN', userData: mydata })
        })
        .catch((err) => dispatch({type: 'ERROR_LOGIN', error: err.message }))
    }
}

const getStatePromise = (token) => {
    return new Promise( async (resolve, reject) =>{
        try {
            let config = {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}}`,
                },
            }
            let res = await fetch('http://127.0.0.1:8000/api/getAuthUser', config);
            let user = await res.json();
            resolve(user);
        } catch (error) {
            reject(error);
        }
    })
}

export const getAuthState = (token) => {
    return  async (dispatch) => {
        try {
            const res = await getStatePromise(token);
            if(res.user){
                dispatch({type: 'SUCCES_LOGIN', userData: { user: res.user, token } })
            }
        } catch(err){
            console.error(err);
        }

    }
}