import React, { Component } from 'react'

import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';
import AppIcon from '../images/machinecare-small.png';

// MUI Stuff
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

// Redux
import { connect } from 'react-redux';
import { loginUser } from '../redux/actions/userActions';
import { logoutUser } from '../redux/actions/userActions';

const styles = (theme) => ({
    ...theme.spreadThis
})

function eraseToken(props) {
    props.logoutUser();
}

class login extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            errors: {}
        }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.UI.errors) {
            this.setState({ errors: nextProps.UI.errors });
        }
    }
    handleSubmit = (event) => {
        event.preventDefault();
        const userData = {
            email: this.state.email,
            password: this.state.password
        };
        this.props.loginUser(userData, this.props.history);
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    render() {
        const { classes, UI: { loading } } = this.props;
        const { errors } = this.state;
        console.log("errors login");
        console.log(errors);

        let showProxyError = false;
        if (typeof(errors) === 'string') {
            if ((errors.indexOf("proxy") > -1) ||
                (errors.indexOf("Proxy") > -1) ||
                (errors.indexOf("error") > -1) ||
                (errors.indexOf("Error") > -1)) {
                showProxyError = true;
            }
        }

        //eraseToken(this.props);
        return (
            <Grid container className={classes.form}>
                <Grid item sm={12}>
                    <img src={AppIcon} alt="Machine Care"/>
                    <br/><br/><br/>
                </Grid>
                <Grid item sm={4}/>
                <Grid item sm={4}>
                    <Paper>
                        <Table>
                            <TableCell align="center">
                                <form noValidate onSubmit={this.handleSubmit}>
                                    <Typography variant="h3" className={classes.pageTitle}>
                                        Iniciar Sesion
                                    </Typography>
                                    <TextField
                                        id="email"
                                        name="email"
                                        type="email"
                                        label="Correo"
                                        className={classes.textField}
                                        helperText={errors.email}
                                        error={errors.email ? true : false}
                                        value={this.state.email}
                                        onChange={this.handleChange}
                                        fullWidth
                                    />
                                    <TextField
                                        id="password"
                                        name="password"
                                        type="password"
                                        label="Contraseña"
                                        className={classes.textField}
                                        helperText={errors.password}
                                        error={errors.password ? true : false}
                                        value={this.state.password}
                                        onChange={this.handleChange}
                                        fullWidth
                                    />
                                    
                                    {(errors.general) && (
                                        <Typography variant="body2" className={classes.customError}>
                                            {errors.general}
                                        </Typography>
                                    )}

                                    {(showProxyError) && (
                                        <Typography variant="body2" className={classes.customError}>
                                            Posible error de conexión. Intenta de nuevo
                                        </Typography>
                                    )}
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        color="primary"
                                        align="right"
                                        className={classes.button}
                                        disabled={loading}
                                        >
                                        Iniciar Sesion
                                        {loading && <CircularProgress size={30} className={classes.progress}/> }
                                    </Button>
                                </form>
                            </TableCell>
                        </Table>
                    </Paper>
                </Grid>
                <Grid item sm={4}/>
            </Grid>
        )
    }
}

login.propTypes = {
    classes: PropTypes.object.isRequired,
    loginUser: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
    UI: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    user: state.user,
    UI: state.UI
});

const mapActionsToProps = {
    loginUser,
    logoutUser
}

export default connect(mapStateToProps, mapActionsToProps)(withStyles(styles)(login))
