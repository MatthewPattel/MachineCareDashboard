import React, { Component } from 'react'
import axios from 'axios'
import Grid from '@material-ui/core/Grid';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';

//import { DatePicker } from '@material-ui/pickers';
import Button from '@material-ui/core/Button';

import withStyles from '@material-ui/core/styles/withStyles';

import CircularProgress from '@material-ui/core/CircularProgress';
import { Typography } from '@material-ui/core';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';

const styles = (theme) => ({
    ...theme.spreadThis
})

export class servicios extends Component {

    state = {
        servs: [],
        servicio: '',
        status: '',
        tipo: '',
        fechaServicio: ''
    }

    componentDidMount() {
        console.log(localStorage.getItem('FBAuth'));
        axios.defaults.headers.common['Authorization'] = localStorage.getItem('FBAuth');
        axios.defaults.headers.common['typeuser'] = 'especialistas';
        console.log("component");
        console.log(this.state);
        axios.post('/servicio/getAll', this.state, {
            headers: {'Content-Type': 'application/json', 'Accept': 'application/json', "Access-Control-Allow-Origin": "*"}
        }).then((res) => {
            console.log("imprime res desde servs");
            console.log(res);
            this.setState({
                servs: res.data
            })}
        );
    }

    //name, celular, email, supervisor, free, status

    handleChange = (event) => {
        console.log("estado");
        console.log(this.state);
        console.log(event.target)
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        const { classes, UI: { loading } } = this.props;
        const { servs } = this.state;
        console.log("servs");
        console.log(servs);

        return (
            <Grid container>
                <Grid item xs={12}>
                    <Typography align="left" variant="h4" className={classes.pageTitle}>
                        Servicios
                    </Typography>
                </Grid>
                <Grid item xs={12}>    
                    <br/><br/>
                </Grid>
                <Grid item xs={2}/>
                <Grid item xs={8}>
                    <Paper>
                        <Table>
                            <TableRow>
                                <TableCell>
                                    <Grid container spacing={3}>
                                        <Grid item xs={3}>
                                            <TextField
                                                align="center"
                                                id="servicio"
                                                name="servicio"
                                                type="number"
                                                label="Numero de servicio"
                                                className={classes.textField}
                                                //helperText={errors.name}
                                                //error={errors.name ? true : false}
                                                value={this.state.servicio}
                                                onChange={this.handleChange}
                                                fullWidth
                                            />
                                        </Grid>
                                        <Grid item xs={3}>
                                            <InputLabel id="statusLabel"align="left">Status</InputLabel>
                                                <Select name="status"
                                                    className={classes.textField}
                                                    value={this.state.status}
                                                    onChange={this.handleChange}
                                                    fullWidth
                                                    align="left"
                                                    >
                                                <MenuItem value={"Nuevo"}>Nuevo</MenuItem>
                                                <MenuItem value={"En Ruta"}>En Ruta</MenuItem>
                                                <MenuItem value={"En Progreso"}>En Progreso</MenuItem>
                                                <MenuItem value={"Finalizado"}>Finalizado</MenuItem>
                                                <MenuItem value={"Cerrado"}>Cerrado</MenuItem>
                                            </Select>
                                        </Grid>
                                        <Grid item xs={3}>
                                            <InputLabel id="tipoLabel"align="left">Tipo</InputLabel>
                                                <Select name="tipo"
                                                    className={classes.textField}
                                                    value={this.state.tipo}
                                                    onChange={this.handleChange}
                                                    fullWidth
                                                    align="left"
                                                    >

                                                <MenuItem value={"Mantenimiento Correctivo"}>Mantenimiento Correctivo</MenuItem>
                                                <MenuItem value={"Mantenimiento Preventivo"}>Mantenimiento Preventivo</MenuItem>
                                                <MenuItem value={"Soporte Técnico"}>Soporte Técnico</MenuItem>
                                            </Select>
                                        </Grid>
                                        {/*
                                        <TableCell>
                                            <DatePicker
                                                variant="inline"
                                                format="MM/dd/yyyy"
                                                margin="normal"
                                                id="fechaServicio"
                                                label="Fecha de servicio"
                                                value={this.state.fechaServicio}
                                                onChange={this.handleChange}
                                            />
                                        </TableCell>
                                        */}
                                        <Grid item xs={3}>
                                            <form noValidate onSubmit={this.componentDidMount}>
                                                <Button
                                                    className={classes.button}
                                                    type="submit"
                                                    variant="contained"
                                                    color="primary"
                                                    disabled={loading}
                                                    >
                                                Buscar Servicios
                                                {loading && <CircularProgress size={30} className={classes.progress}/> }
                                                </Button>
                                            </form>
                                        </Grid>
                                    </Grid>
                                </TableCell>
                            </TableRow>
                        </Table>
                    </Paper>
                </Grid>
                <Grid item xs={2}/>
                <Grid item xs={12}>
                    <br/><br/>
                    <Paper>
                        <Table aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Servicio</TableCell>
                                    <TableCell>Tipo</TableCell>
                                    <TableCell>Empresa</TableCell>
                                    <TableCell>Plataforma</TableCell>
                                    <TableCell>Especialista</TableCell>
                                    <TableCell>Estatus</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {servs && servs !== undefined ? servs.map((serv, key) => (
                                    <TableRow key={key}>
                                        <TableCell>{serv.servicio}</TableCell>
                                        <TableCell>{serv.tipo}</TableCell>
                                        <TableCell>{serv.cliente ? serv.cliente.empresa:"Sin empresa"}</TableCell>
                                        <TableCell>{serv.plataforma}</TableCell>
                                        <TableCell>{serv.especialista ? serv.especialista.name:"Sin especialista"}</TableCell>
                                        <TableCell>{serv.status}</TableCell>
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

servicios.propTypes = {
    classes: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
    UI: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    user: state.user,
    UI: state.UI
});

export default connect(mapStateToProps)(withStyles(styles)(servicios))
