import React, { Component } from 'react'
import axios from 'axios'
import Grid from '@material-ui/core/Grid';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { getEspecAll } from '../redux/actions/searchActions';

export class espec extends Component {

    state = {
        specs: []
    }

    componentDidMount() {
        console.log(localStorage.getItem('FBAuth'));
        axios.defaults.headers.common['Authorization'] = localStorage.getItem('FBAuth');
        axios.defaults.headers.common['typeuser'] = 'especialistas';
        axios.post('/especialista/getAll', {type: 'Gerente' }, {
            headers: {'Content-Type': 'application/json', 'Accept': 'application/json', "Access-Control-Allow-Origin": "*"}
        }).then((res) => {
            console.log("imprime res desde geren");
            console.log(res);
            this.setState({
                specs: res.data.especialistas
            })}
        );
    }

    //name, celular, email, supervisor, free, status

    render() {

        const {specs} = this.state;
        console.log(specs);

        return (
            <Grid container>
                <Grid item sm={12}>
                    <Paper>
                        <Table aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Nombre</TableCell>
                                    <TableCell>Celular</TableCell>
                                    <TableCell>Correo</TableCell>
                                    <TableCell>Supervisor</TableCell>
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

export default espec
