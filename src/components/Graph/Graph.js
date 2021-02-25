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
            type: "bar",
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

