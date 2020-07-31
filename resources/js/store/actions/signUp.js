export const signUp = (data) => {
    return  async (dispatch) => {
        dispatch({type: 'REQUESTING_LOGIN', data});
        try {
            let config = {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data),
            }
            let res = await fetch('http://127.0.0.1:8000/api/register', config);
            let d = await res.json();

            if(!d.error && d.token){
                try {
                    window.localStorage.setItem('konecta_token', JSON.stringify(d.token));
                } catch (e) {
                    console.error(e);
                }
                dispatch({type: 'SUCCES_LOGIN', userData: d });
            }else{
                let error;
                if(d.message.email){
                    error = d.message.email[0]
                }
                else if(d.message.password){
                    error = d.message.password[0];
                }
                else {
                    error = 'error Unknown !';
                }
                dispatch({type: 'ERROR_LOGIN', error});
            }
        } catch(error){
            dispatch({type: 'ERROR_LOGIN', error })
            console.error(error);
        }
    }
}