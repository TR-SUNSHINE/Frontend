
import "../../index.css";
import "./RatingsBar.css";
import React, { Component } from "react";

import Rater from "react-rater";
import "react-rater/lib/react-rater.css";

export default class RatingsBar extends Component {
    constructor(props) {
        super(props);
        this.stars = props.stars;
    }
    render() {
        return (<Rater total={5} rating={this.stars} />);
    }
};


