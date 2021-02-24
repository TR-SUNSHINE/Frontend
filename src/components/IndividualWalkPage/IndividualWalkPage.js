import "./IndividualWalkPage.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import RatingsBar from "../RatingsBar/RatingsBar";
import Graph from "../Graph/Graph";
import { useState } from "react";

const IndividualWalkPage = ({ id }) => {
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
        <Row>
            <Col>
                <h3 className="heading heading--main">Individual Walk</h3>
                <div className="container d-flex justify-content-center align-items-center">
                    <div className="card p-1">
                        <iframe className="iframe--map"
                            src="https://www.google.com/maps/d/embed?mid=1F0OhEou31qd5wCPlKahJ8INJa75su22D"></iframe>
                    </div>
                </div>
                <Row>
                    <Graph data={filteredUser} />
                </Row>
                <Row>
                    <RatingsBar />
                </Row>
                <Row>
                    <div className="button__container button__container--center">
                        <Button>Add New Rating</Button>
                    </div>
                </Row>
            </Col>
        </Row>
    );
};
export default IndividualWalkPage;

