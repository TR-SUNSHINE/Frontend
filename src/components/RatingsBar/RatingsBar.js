import "../../index.css";
import "./RatingsBar.css";
import Rating from "@material-ui/lab/Rating";
import { useState } from "react";

const RatingsBar = (props) => {
    const [value, setValue] = useState();
    function handleChange(event) {
        //invoke the callback with the new value
        props.onChange(event.target.value);
        setValue(Number(event.target.value));
    }
    return (
        <Rating
            name="size-large"
            value={props.value}
            disabled={props.disabled}
            size="large"
            onChange={handleChange}

        />
    );
};
export default RatingsBar;