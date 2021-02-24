import "./IndividualWalkPage.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import RatingsBar from "../RatingsBar/RatingsBar";
import Graph from "../Graph/Graph";

const IndividualWalkPage = () => {
    return (
        <Row>
            <Col>
                <h3 className="heading heading--main">Individual Walk</h3>
                <div className="container d-flex justify-content-center align-items-center">
                    <div className="card p-1">
                        <iframe class="iframe--map"
                            src="https://www.google.com/maps/d/embed?mid=1F0OhEou31qd5wCPlKahJ8INJa75su22D"></iframe>
                    </div>
                </div>
                <Row>
                    <Graph />
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

