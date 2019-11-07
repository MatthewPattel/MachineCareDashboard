import React, { Component } from 'react'
import axios from 'axios'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import withStyles from '@material-ui/core/styles/withStyles';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = (theme) => ({
    ...theme.spreadThis
})

export class servicio extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div>
                <Grid container>
                    <Grid item sm={3}>
                        <Typography variant="h6">
                        Servicio {1222}
                        </Typography>
                    </Grid>
                    <Grid item sm={3}>
                        <Typography variant="h6">
                        {"Mantenimiento correctivo"}
                        </Typography>
                    </Grid>
                    <Grid item sm={3}>
                        <Typography variant="h6">
                        {"Equipo T800"}
                        </Typography>
                    </Grid>
                    <Grid item sm={3}>
                        <Typography variant="h6">
                        {"En Progreso"}
                        </Typography>
                    </Grid>
                    <Grid item sm={4}>
                        Especialista {"Nestor lopez"}
                        <Paper>
                            <Table aria-label="simple table">
                                <TableBody>
                                    <TableRow>
                                        <TableCell>Cliente</TableCell>
                                        <TableCell>{"Otro Nestor"}</TableCell>
                                        <TableCell>Cliente</TableCell>
                                        <TableCell>{"Otro Nestor"}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Empresa</TableCell>
                                        <TableCell>{"Atzimba"}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Empresa</TableCell>
                                        <TableCell>{"Atzimba"}</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </Paper>
                    </Grid>
                    <Grid item sm={4}>
                        
                    </Grid>
                    <Grid item sm={4}>
                        
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default withStyles(styles)(servicio)
