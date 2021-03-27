import React from "react";
import "../../index.css";
import "./Walks.css";
import "../Button/Button.css";
import Walk from "../Walk/Walk";
import Button from "react-bootstrap/Button";


function Walks({ walks, history }) {
    return (
        <div className="walks__container">
            {
                walks.map(walk =>

                    <Walk
                        key={walk.id}
                        walk={walk}

                    />
                )
            }
        </div>

    );
}

export default Walks;
