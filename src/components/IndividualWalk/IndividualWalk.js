import "./IndividualWalk.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import RatingsBar from "../RatingsBar/RatingsBar";
import Graph from "../Graph/Graph";
import Map from "../Map/Map";
import { useState } from "react";

const IndividualWalk = ({ id }) => {
    const [users, setUser] = useState([
        {
            id: 1,
            firstName: "Alun",
            lastName: "Groome",
            avgRatings:
            {
                Jan: 1,
                Feb: 3,
                Mar: 4,
                Apr: 4,
                May: 5,
                Jun: 1,
                Jul: 5,
                Aug: 3,
                Sep: 5,
                Oct: 4,
                Nov: 5,
                Dec: 2
            }

        },
        {
            id: 2,
            firstName: "David",
            lastName: "Jones",
            avgRatings: [
                {
                    Jan: 1,
                    Feb: 3,
                    Mar: 4,
                    Apr: 4,
                    May: 5,
                    Jun: 1,
                    Jul: 5,
                    Aug: 5,
                    Sep: 4,
                    Oct: 5,
                    Nov: 2,
                    Dec: 3
                }
            ]
        }
    ]);

    //harcode id instead of from props for testing purpose
    id = 1;
    const filteredUser = users.find((user) => user.id === id);

    return (
        <div>
            <h3 className="heading heading--main">Individual Walk</h3>
            <Map />
            <Graph data={filteredUser} />
            <RatingsBar />
            <div className="button__container button__container--center">
                <Button>Add New Rating</Button>
            </div>
        </div>
    );
};
export default IndividualWalk;

