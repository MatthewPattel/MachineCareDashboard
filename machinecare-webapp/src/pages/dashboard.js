import React, { Component } from 'react';

import Paper from '@material-ui/core/Paper';

import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';

import Chart from '../components/Chart';

//import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';

const styles = (theme) => ({
    ...theme.spreadThis
})

export class dashboard extends Component {
    constructor(){
        super();
        this.state = {
            chartData:{}
        };
    }

    componentDidMount() {
        this.getChartData();
    }

    getChartData() {
        this.setState({
            chartData: {
                labels: [
                    'Boston',
                    'Worcester',
                    'Springfield',
                    'Lowell',
                    'Cambridge',
                    'New Bedford'
                ],
                datasets:[{
                    label:'Population',
                    data:[
                        617594,
                        181045,
                        153060,
                        106519,
                        105162,
                        95072
                    ],
                    backgroundColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                }]
            }
        })
    }

    render() {
        const { classes, UI: { loading } } = this.props;
        console.log(this.state);
        return (
            <Grid container spacing={3}>
                <Grid item xs={4}>
                    <Paper>
                        <Chart chartType="Bar" chartData={this.state.chartData} titleText="Grafica de barras" legendPosition='bottom'/>
                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper>
                        <Chart chartType="Line" chartData={this.state.chartData} titleText="Grafica de lineas" legendPosition='bottom'/>
                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper>
                        <Chart chartType="Pie" chartData={this.state.chartData} titleText="Grafica de pastel" legendPosition='bottom'/>
                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper>
                        <Chart chartType="Bar" chartData={this.state.chartData} titleText="Grafica de barras" legendPosition='bottom'/>
                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper>
                        <Chart chartType="Line" chartData={this.state.chartData} titleText="Grafica de lineas" legendPosition='bottom'/>
                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper>
                        <Chart chartType="Pie" chartData={this.state.chartData} titleText="Grafica de pastel" legendPosition='bottom'/>
                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper>
                        <Chart chartType="Bar" chartData={this.state.chartData} titleText="Grafica de barras" legendPosition='bottom'/>
                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper>
                        <Chart chartType="Line" chartData={this.state.chartData} titleText="Grafica de lineas" legendPosition='bottom'/>
                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper>
                        <Chart chartType="Pie" chartData={this.state.chartData} titleText="Grafica de pastel" legendPosition='bottom'/>
                    </Paper>
                </Grid>
            </Grid>
        );
    }
}

dashboard.propTypes = {
    classes: PropTypes.object.isRequired,
    //createUser: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
    UI: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    user: state.user,
    UI: state.UI
});

/*
const mapActionsToProps = {
    createUser
}
*/
//connect(mapStateToProps, mapActionsToProps)
export default connect(mapStateToProps)(withStyles(styles)(dashboard))

