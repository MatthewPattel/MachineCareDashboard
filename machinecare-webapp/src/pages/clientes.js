import React, { Component } from 'react'
import axios from 'axios'
import Grid from '@material-ui/core/Grid';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import withStyles from '@material-ui/core/styles/withStyles';
import CircularProgress from '@material-ui/core/CircularProgress';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Link from 'react-router-dom/Link';

import { connect } from 'react-redux';

const styles = (theme) => ({
    ...theme.spreadThis
})

export class clientes extends Component {

    state = {
        clients: []
    }
    
    componentDidMount() {
        console.log(localStorage.getItem('FBAuth'));
        axios.defaults.headers.common['Authorization'] = localStorage.getItem('FBAuth');
        axios.defaults.headers.common['typeuser'] = 'especialistas';
        axios.get('/cliente/getAll', {
            headers: {'Content-Type': 'application/json', 'Accept': 'application/json', "Access-Control-Allow-Origin": "*"}
        }).then((res) => {
            console.log("imprime res desde espec");
            console.log(res);
            this.setState({
                clients: res.data
            })}
        );
    }

    //name, celular, email, supervisor, free, status

    render() {
        const { classes, UI: { loading } } = this.props;
        const {clients} = this.state;
        console.log(clients);

        return (
            <Grid container>
                <Grid item xs={10}>
                    <Typography align="left" variant="h4" className={classes.pageTitle}>
                        Clientes
                    </Typography>
                </Grid>
                <Grid item xs={2}>
                    <Button
                        component={Link} to="/clienteAdd"
                        type="submit"
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        disabled={loading}
                        >
                        Agregar Cliente
                        {loading && <CircularProgress size={30} className={classes.progress}/> }
                    </Button>
                </Grid>
                <Grid item xs={12}>    
                    <br/><br/>
                </Grid>
                <Grid item sm={12}>
                    <Paper>
                        <Table aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Nombre</TableCell>
                                    <TableCell>Celular</TableCell>
                                    <TableCell>Telefono</TableCell>
                                    <TableCell>Correo</TableCell>
                                    <TableCell>Empresa</TableCell>
                                    <TableCell>Estatus</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {clients && clients !== undefined ? clients.map((client, key) => (
                                    <TableRow key={key}>
                                        <TableCell>{client.name}</TableCell>
                                        <TableCell>{client.celular}</TableCell>
                                        <TableCell>{client.telefono}</TableCell>
                                        <TableCell>{client.email}</TableCell>
                                        <TableCell>{client.empresa}</TableCell>
                                        <TableCell>{client.status ? "Activo":"Inactivo"}</TableCell>
                                    </TableRow>
                                )):" . "}
                            </TableBody>
                        </Table>
                        </Paper>
                </Grid>
            </Grid>
        )
    }
}

clientes.propTypes = {
    classes: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
    UI: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    user: state.user,
    UI: state.UI
});

export default connect(mapStateToProps)(withStyles(styles)(clientes))

