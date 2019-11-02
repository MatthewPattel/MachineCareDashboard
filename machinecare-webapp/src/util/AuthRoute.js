import React from 'react'
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

const AuthRoute = ({component: Component, authenticated, ...rest}) => (
    <Route
        {...rest}
        
        render={ (props) =>
            authenticated === true ? <Redirect to='/'/> : /*<Redirect to='/login'/> // */<Component {...props}/>
        }
    />
    
);

const mapStateToProps = (state) => ({
    authenticate: state.user.authenticated
});

AuthRoute.propTypes = {
    user: PropTypes.object
}

export default connect(mapStateToProps)(AuthRoute);