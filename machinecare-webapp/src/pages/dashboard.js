import React, { Component } from 'react'

//import axios from 'axios';
import Grid from '@material-ui/core/Grid';

export class dashboard extends Component {
    componentDidMount() {   }
    render() {
        return (
            <Grid container spaciing={16}>
                <Grid item sm={8} xs={12}>
                    <p>Contenido</p>
                </Grid>
                <Grid item sm={4} xs={12}>
                    <p>Dashboard</p>
                </Grid>
            </Grid>
        );
    }
}

export default dashboard
