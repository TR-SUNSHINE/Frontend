import "../../index.css";
import "./RatingsBar.css";
import Rating from "@material-ui/lab/Rating";
import { useState } from "react";

const RatingsBar = ({ stars, disabled }) => {
    const [value, setValue] = useState(stars);

    return (
        <Rating
            name="size-large"
            value={value}
            disabled={disabled}
            size="large"
            onChange={(event) => {
                setValue(Number(event.target.value));
            }}

        />
    );

};
export default RatingsBar;