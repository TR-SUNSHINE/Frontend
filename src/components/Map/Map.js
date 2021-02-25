import "./Map.css";
import React, { Component } from "react";

export default class Map extends Component {
    render() {
        return (
            <div className="container d-flex justify-content-center align-items-center">
                <div className="card p-1">
                    <iframe className="iframe--map"
                        src="https://www.google.com/maps/d/embed?mid=1F0OhEou31qd5wCPlKahJ8INJa75su22D"></iframe>
                </div>
            </div>
        );
    }
};


