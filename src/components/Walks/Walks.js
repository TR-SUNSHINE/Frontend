import React from "react";
import "../../index.css";
import "./Walks.css";
import "../Button/Button.css";
import Walk from "../Walk/Walk";


function Walks({ walks }) {
    console.log(typeof walks);
    return (
        <div>
            {
                walks.map(walk =>

                    <Walk
                        walk={walk}

                    />
                )
            }
        </div>

    );
}

export default Walks;
