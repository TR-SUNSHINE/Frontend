import React from "react";
import "../../index.css";
import "./Walks.css";
import "../Button/Button.css";
import Walk from "../Walk/Walk";

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
