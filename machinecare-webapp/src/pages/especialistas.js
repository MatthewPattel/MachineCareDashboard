import React, { Component } from 'react'
import axios from 'axios'
import Grid from '@material-ui/core/Grid';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import Button from '@material-ui/core/Button';

import withStyles from '@material-ui/core/styles/withStyles';

import CircularProgress from '@material-ui/core/CircularProgress';
import { Typography } from '@material-ui/core';
import { connect } from 'react-redux';

import Link from 'react-router-dom/Link';

import PropTypes from 'prop-types';

const styles = (theme) => ({
    ...theme.spreadThis
})

export class espec extends Component {

    state = {
        specs: []
    }

    /*
    async componentDidMount() {
        let tabledata = getEspecAll()
        console.log("tabledata");
        console.log(tabledata);
        this.setState({
            specs: tabledata
        });
    }
    */
    
    componentDidMount() {
        console.log(localStorage.getItem('FBAuth'));
        axios.defaults.headers.common['Authorization'] = localStorage.getItem('FBAuth');
        axios.defaults.headers.common['typeuser'] = 'especialistas';
        axios.post('/especialista/getAll', {type: 'Especialista' }, {
            headers: {'Content-Type': 'application/json', 'Accept': 'application/json', "Access-Control-Allow-Origin": "*"}
        }).then((res) => {
            console.log("imprime res desde espec");
            console.log(res);
            this.setState({
                specs: res.data.especialistas
            })}
        );
    }

    //name, celular, email, supervisor, free, status

    render() {
        const { classes, UI: { loading } } = this.props;
        const {specs} = this.state;
        console.log(specs);

        return (
            <Grid container>
                <Grid item xs={10}>
                    <Typography align="left" variant="h4" className={classes.pageTitle}>
                        Especialistas
                    </Typography>
                </Grid>
                <Grid item xs={2}>
                    <Button
                        component={Link} to="/especialistaAdd"
                        type="submit"
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        disabled={loading}
                        >
                        Agregar Especialista
                        {loading && <CircularProgress size={30} className={classes.progress}/> }
                    </Button>
                </Grid>
                <Grid item xs={12}>    
                    <br/><br/>
                </Grid>
                <Grid item xs={12}>
                    <Paper>
                        <Table aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Nombre</TableCell>
                                    <TableCell>Celular</TableCell>
                                    <TableCell>Correo</TableCell>
                                    <TableCell>Supervisor</TableCell>
                                    <TableCell>Tipo</TableCell>
                                    <TableCell>Disponibilidad</TableCell>
                                    <TableCell>Estatus</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {specs && specs !== undefined ? specs.map((spec, key) => (
                                    <TableRow key={key}>
                                        <TableCell>{spec.name}</TableCell>
                                        <TableCell>{spec.celular}</TableCell>
                                        <TableCell>{spec.email}</TableCell>
                                        <TableCell>{spec.supervisor ? spec.supervisor.handle:"Sin supervisor"}</TableCell>
                                        <TableCell>{spec.type}</TableCell>
                                        <TableCell>{spec.free ? "Libre":"Ocupado"}</TableCell>
                                        <TableCell>{spec.status ? "Activo":"Inactivo"}</TableCell>
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

espec.propTypes = {
    classes: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
    UI: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    user: state.user,
    UI: state.UI
});

export default connect(mapStateToProps)(withStyles(styles)(espec))
