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
                        this.data.find(element => element.monthR === "Jan").monthAveRating,
                        this.data.find(element => element.monthR === "Feb").monthAveRating,
                        this.data.find(element => element.monthR === "Mar").monthAveRating,
                        this.data.find(element => element.monthR === "Apr").monthAveRating,
                        this.data.find(element => element.monthR === "May").monthAveRating,
                        this.data.find(element => element.monthR === "Jun").monthAveRating,
                        this.data.find(element => element.monthR === "Jul").monthAveRating,
                        this.data.find(element => element.monthR === "Aug").monthAveRating,
                        this.data.find(element => element.monthR === "Sep").monthAveRating,
                        this.data.find(element => element.monthR === "Oct").monthAveRating,
                        this.data.find(element => element.monthR === "Nov").monthAveRating,
                        this.data.find(element => element.monthR === "Dec").monthAveRating
                    ],
                    label: "Star Rating Over Time",
                    borderColor: "#296EB4",
                    backgroundColor: "#296EB4",
                    fill: false
                }]
            },
            options: {
                title: {
                    display: true,
                    //text: "Star Rating Over Time",
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
                            //fontStyle: "bold",
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
                            color: "#b8b8b8"
                        }
                    }],
                    xAxes: [{
                        ticks: {
                            fontSize: 20,
                            //fontStyle: "bold",
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
                            color: "#8a8a8a"
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

