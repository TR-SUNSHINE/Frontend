import "../../index.css";
import "./RatingsBar.css";
import Rating from "@material-ui/lab/Rating";
import { useState } from "react";

const RatingsBar = ({ stars, disabled }) => {
    const [value, setValue] = useState(stars);

    return (
        <Rating
            name="simple-controlled"
            value={value}
            disabled={disabled}
            onChange={(event) => {
                setValue(Number(event.target.value));
            }}
        />
    );

};
export default RatingsBar;