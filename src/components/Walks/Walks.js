import React from "react";
import "../../index.css";
import "./Walks.css";
import "../Button/Button.css";
import Walk from "../Walk/Walk";


function Walks({ walks }) {
    console.log(walks);
    return (
        <div className="walks__container">
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
