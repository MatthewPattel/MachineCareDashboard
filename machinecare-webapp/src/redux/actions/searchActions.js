import { SET_USER, SET_ERRORS, CLEAR_ERRORS, LOADING_UI, SET_UNAUTHENTICATED } from '../types';
import React, { Component } from 'react'
import  axios from 'axios';



export class classGetEspecAll extends Component {

    componentDidMount() {
        console.log(localStorage.getItem('FBAuth'));
        axios.defaults.headers.common['Authorization'] = localStorage.getItem('FBAuth');
        axios.defaults.headers.common['typeuser'] = 'especialistas';
        axios.post('/especialista/getAll', {
            headers: {'Content-Type': 'application/json', 'Accept': 'application/json', "Access-Control-Allow-Origin": "*"}
        }).then((res) => {
            console.log("imprime res desde search class");
            console.log(res);
            this.setState({
                specs: res.data.especialistas
            })}
        );
    }
    /*
    async componentDidMount() {
      console.log(localStorage.getItem('FBAuth'));
      axios.defaults.headers.common['Authorization'] = localStorage.getItem('FBAuth');
      axios.defaults.headers.common['typeuser'] = 'especialistas';
      let res = await axios.post('/especialista/getAll', {
        headers: {'Content-Type': 'application/json', 'Accept': 'application/json', "Access-Control-Allow-Origin": "*"}
      });
      console.log("impresion clase");
      console.log(res.data.especialistas);
      return res.data.especialistas;
    }
    */
}

export const getEspecAll = (dispatch) => {

    console.log(localStorage.getItem('FBAuth'));
    axios.defaults.headers.common['Authorization'] = localStorage.getItem('FBAuth');
    axios.defaults.headers.common['typeuser'] = 'especialistas';
    axios.post('/especialista/getAll', {
        headers: {'Content-Type': 'application/json', 'Accept': 'application/json', "Access-Control-Allow-Origin": "*"}
    }).then((res) => {
        console.log("imprime res desde search function");
        console.log(res);
        
        return res.data.especialistas;
    });
}




/*
export const buscarEspecialistas = (dispatch) => {
    axios.post('/especialista/getAll')
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
    const FBToken = `Bearer ${token}`;
    localStorage.setItem('FBAuth', FBToken);
    axios.defaults.headers.common['Authorization'] = FBToken;
    axios.defaults.headers.common['typeUser'] = "especialistas";
}

*/