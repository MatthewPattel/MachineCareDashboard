import React, { Component } from 'react'
import axios from 'axios'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import withStyles from '@material-ui/core/styles/withStyles';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { createUser } from '../redux/actions/userActions';

const styles = (theme) => ({
    ...theme.spreadThis
})

export class clienteAdd extends Component {

    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            confirmPassword: '',
            name: '',
            type: '',
            empresa: '',
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
            password: this.state.password,
            confirmPassword : this.state.confirmPassword,
            name : this.state.name,
            type: this.state.type,
            empresa: this.state.empresa,
            typeUser: "clientes"
        };
        this.props.createUser(userData, this.props.history, "clientes");
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        console.log("cliente add page");
        const { classes, UI: { loading } } = this.props;
        const { errors } = this.state;
        return (
            <div>
                <Grid container className={classes.form}>
                    <Grid item sm={4}/>
                    <Grid item sm={4}>
                        <Paper>
                            <Table>
                                <TableCell align="center">
                                    <form noValidate onSubmit={this.handleSubmit}>
                                        <Typography align="center" variant="h4">
                                            Registrar nuevo cliente
                                        </Typography>
                                        <TextField
                                            align="center"
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
                                            align="center"
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
                                        <TextField
                                            align="center"
                                            id="confirmPassword"
                                            name="confirmPassword"
                                            type="password"
                                            label="Confirmar contraseña"
                                            className={classes.textField}
                                            helperText={errors.confirmPassword}
                                            error={errors.confirmPassword ? true : false}
                                            value={this.state.confirmPassword}
                                            onChange={this.handleChange}
                                            fullWidth
                                        />
                                        <TextField
                                            align="center"
                                            id="name"
                                            name="name"
                                            type="text"
                                            label="Nombre"
                                            className={classes.textField}
                                            helperText={errors.name}
                                            error={errors.name ? true : false}
                                            value={this.state.name}
                                            onChange={this.handleChange}
                                            fullWidth
                                        />
                                        <InputLabel id="demo-simple-select-label" align="left">Tipo</InputLabel>
                                        <Select name="type"
                                            value={this.state.type}
                                            onChange={this.handleChange}
                                            className={classes.textField}
                                            align="left"
                                            fullWidth>
                                                
                                            <MenuItem value={"Invitado"}>Invitado</MenuItem>
                                            <MenuItem value={"Cliente"}>Cliente</MenuItem>
                                            <MenuItem value={"SupervisorCliente"}>Supervisor Cliente</MenuItem>
                                        </Select>
                                        <InputLabel id="demo-simple-select-label" align="left">Empresa</InputLabel>
                                        <Select name="empresa"
                                            value={this.state.empresa}
                                            onChange={this.handleChange}
                                            className={classes.textField}
                                            align="left"
                                            fullWidth>

                                            <MenuItem value={"Atzimba"}>Atzimba</MenuItem>
                                            <MenuItem value={"Empresa Demo"}>Empresa Demo</MenuItem>
                                            <MenuItem value={"OTConsulting"}>OTConsulting</MenuItem>
                                        </Select>
                                        <Button
                                            type="submit"
                                            variant="contained"
                                            color="primary"
                                            align="center"
                                            className={classes.button}
                                            disabled={loading}
                                            >
                                            Registrar Usuario
                                            {loading && <CircularProgress size={30} className={classes.progress}/> }
                                        </Button>
                                    </form>
                                </TableCell>
                            </Table>
                        </Paper>
                    </Grid>
                    <Grid item sm={4}/>
                </Grid>
            </div>
        )
    }
}

clienteAdd.propTypes = {
    classes: PropTypes.object.isRequired,
    createUser: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
    UI: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    user: state.user,
    UI: state.UI
});

const mapActionsToProps = {
    createUser
}

export default connect(mapStateToProps, mapActionsToProps)(withStyles(styles)(clienteAdd))
