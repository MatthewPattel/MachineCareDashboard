import { SET_USER, SET_ERRORS, CLEAR_ERRORS, LOADING_UI, SET_UNAUTHENTICATED } from '../types';
import  axios from 'axios';

export const loginUser = (userData, history) => (dispatch) => {
    dispatch({ type: LOADING_UI});
    axios.post('/login', userData, {
        headers: {'Content-Type': 'application/json', 'Accept': 'application/json', "Access-Control-Allow-Origin": "*"}
    })
    .then(res => {
        console.log(res.data);
        setAuthorizationHeader(res.data.token);
        dispatch(getUserData());
        dispatch({ type: CLEAR_ERRORS});
        history.push('/');
    })
    .catch(err => {
        console.log(err.response);
        dispatch({
            type: SET_ERRORS,
            payload: err.response.data
        });
    });
}

export const logoutUser = () => (dispatch) => {
    localStorage.removeItem('FBAuth');
    delete axios.defaults.headers.common['Authorization'];
    dispatch({ type: SET_UNAUTHENTICATED});
}

export const getUserData = () => (dispatch) => {
    axios.get('/user')
    .then(res => {
        dispatch({
            type: SET_USER,
            payload: res.data
        })
    })
    .catch(err => console.log(err));
}

const setAuthorizationHeader = (token) => {
    const FBToken = 'Bearer '+token;
    localStorage.setItem('FBAuth', FBToken);
    axios.defaults.headers.common['Authorization'] = FBToken;
}
