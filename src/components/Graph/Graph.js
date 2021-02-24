import classes from "./Graph.module.css";
import React, { Component } from "react";
import Chart from "chart.js";

export default class Graph extends Component {
    chartRef = React.createRef();

    componentDidMount() {
        const myChartRef = this.chartRef.current.getContext("2d");

        new Chart(myChartRef, {
            type: "bar",
            data: {
                labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                datasets: [{
                    data: [4, 2, 3, 4, 5, 3, 2, 4, 4, 4, 5, 3],
                    label: "Star Rating",
                    borderColor: "yellow",
                    backgroundColor: "#296EB4",
                    fill: true
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    yAxes: [{
                        ticks: {
                            min: 0,
                            max: 5,
                            stepSize: 1,
                        },
                        scaleLabel: {
                            display: true,
                            labelString: "Stars"
                        }
                    }]
                }
            }
        });
    }
    render() {
        return (
            <div className={classes.graphContainer}>
                <canvas
                    id="myChart"
                    ref={this.chartRef}
                />
            </div>
        );
    }
}

