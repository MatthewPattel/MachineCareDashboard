import React, { Component } from 'react'

import { Bar, Line, Pie } from 'react-chartjs-2';

class Chart extends Component{
    constructor(props){
        console.log("props constructor")
        console.log(props);
        super(props);
        this.state = {
            chartData: props.chartData
        }
    }

    static defaultProps = {
        displayTitle: true,
        displayLegend: true,
        legendPosition: 'bottom',
        titleText:'City',
        chartType:'Bar'
    }

    render() {
        let hiddenBar = true;
        let hiddenLine = true;
        let hiddenPie = true;

        switch(this.props.chartType) {
            case "Bar":
                hiddenBar = false;
            break;
            case "Line":
                hiddenLine = false;
            break;
            case "Pie":
                hiddenPie = false;
            break;
        }

        this.state.chartData = this.props.chartData;
        return (
            <div className="chart">
                <div hidden={hiddenBar}>
                    <Bar
                        data={this.state.chartData}
                        options={{
                            title:{
                                display:this.props.displayTitle,
                                text:this.props.titleText,
                                fontSize: 25
                            },
                            legend:{
                                display:this.props.displayLegend,
                                position:this.props.legendPosition
                            }
                        }}
                    />
                </div>
                <div hidden={hiddenLine}>
                    <Line
                        data={this.state.chartData}
                        options={{
                            title:{
                                display:this.props.displayTitle,
                                text:this.props.titleText,
                                fontSize: 25
                            },
                            legend:{
                                display:this.props.displayLegend,
                                position:this.props.legendPosition
                            }
                        }}
                    />
                </div>
                <div hidden={hiddenPie}>
                    <Pie
                        data={this.state.chartData}
                        options={{
                            title:{
                                display:this.props.displayTitle,
                                text:this.props.titleText,
                                fontSize: 25
                            },
                            legend:{
                                display:this.props.displayLegend,
                                position:this.props.legendPosition
                            }
                        }}
                    />
                </div>
            </div>
        )
    }
}

export default Chart

