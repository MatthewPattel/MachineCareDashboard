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

export class supervisoresClientes extends Component {

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

        const {clients} = this.state;
        console.log(clients);

        return (
            <Grid container>
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

export default supervisoresClientes
