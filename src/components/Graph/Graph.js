import classes from "./Graph.module.css";
import React, { Component } from "react";
import Chart from "chart.js";

export default class Graph extends Component {
    constructor(props) {
        super(props);
        this.data = props.data;
    }
    chartRef = React.createRef();

    componentDidMount() {
        const myChartRef = this.chartRef.current.getContext("2d");

        //data.avgRatings.Feb
        new Chart(myChartRef, {
            type: "line",
            data: {
                labels: [
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun",
                    "Jul",
                    "Aug",
                    "Sep",
                    "Oct",
                    "Nov",
                    "Dec"],
                datasets: [{
                    data: [
                        this.data.avgRatings.Jan,
                        this.data.avgRatings.Feb,
                        this.data.avgRatings.Mar,
                        this.data.avgRatings.Apr,
                        this.data.avgRatings.May,
                        this.data.avgRatings.Jun,
                        this.data.avgRatings.Jul,
                        this.data.avgRatings.Aug,
                        this.data.avgRatings.Sep,
                        this.data.avgRatings.Oct,
                        this.data.avgRatings.Nov,
                        this.data.avgRatings.Dec
                    ],
                    label: "Star Rating",
                    borderColor: "#296EB4",
                    backgroundColor: "#296EB4",
                    fill: false
                }]
            },
            options: {
                title: {
                    display: true,
                    text: "Star Rating Over Time",
                    fontSize: 16,
                    fontColor: "#296EB4",
                    fontStyle: "bold"

                },
                responsive: true,
                maintainAspectRatio: true,
                scales: {
                    yAxes: [{

                        ticks: {
                            min: 0,
                            max: 5,
                            stepSize: 1,
                            fontSize: 20,
                            fontStyle: "bold",
                            fontColor: "#296EB4"
                        },
                        scaleLabel: {
                            display: true,
                            labelString: "Stars",
                            fontSize: 20,
                            fontColor: "#296EB4",
                            fontStyle: "bold",
                        },
                        gridLines: {
                            display: true,
                            color: "#296EB4"
                        }
                    }],
                    xAxes: [{
                        ticks: {
                            fontSize: 20,
                            fontStyle: "bold",
                            fontColor: "#296EB4"
                        },
                        scaleLabel: {
                            display: true,
                            labelString: "Months",
                            fontSize: 20,
                            fontColor: "#296EB4",
                            fontStyle: "bold",
                        },
                        gridLines: {
                            display: true,
                            color: "#296EB4"
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

