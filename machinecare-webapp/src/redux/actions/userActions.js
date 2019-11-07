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
    let usertypeURL;
    usertypeURL = '/especialista';
    axios.get(usertypeURL)
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

export const createUser = (userData, history, redireccion) => (dispatch) => {
    dispatch({ type: LOADING_UI});
    axios.post('/signup', userData, {
        headers: {'Content-Type': 'application/json', 'Accept': 'application/json', "Access-Control-Allow-Origin": "*"}
    })
    .then(res => {
        console.log("impresion data");
        console.log(userData);
        console.log(res.data);
        setAuthorizationHeader(res.data.token);
        dispatch(getUserData());
        dispatch({ type: CLEAR_ERRORS});
        history.push('/'+redireccion);
    })
    .catch(err => {
        console.log("imprime errores desde useractions");
        console.log(err);
        console.log(err.response);
        dispatch({
            type: SET_ERRORS,
            payload: err.response.data
        });
    });
}
