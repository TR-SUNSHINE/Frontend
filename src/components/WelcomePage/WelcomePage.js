import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../../index.css";
import "./WelcomePage.css";
import "../Button/Button.css";


const WelcomePage = (props) => {

    const routeToLogin = () => {

        props.history.push("/RegisterPage");

    };

    const routeToRegister = () => {
        props.history.push("/LoginPage");
    };

    return (
        <Row>
            <Col>
                <Row className="check--title--row">
                    <Col >
                        <h3 className="heading heading--main">Welcome to Sunshine</h3>
                        <Image src="./images/welcomeSunshine.jfif" fluid />
                    </Col>
                </Row>

                <Row>
                    <Col xs={12} sm={6} md={6}>
                        <div className="button__container button__container--left" >
                            <Button variant="double" onClick={routeToRegister}>Register</Button>
                        </div>
                    </Col>

                    <Col xs={12} sm={6} md={6}>
                        <div className="button__container button__container--right" >
                            <Button variant="double" onClick={routeToLogin}>Login</Button>
                        </div>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
};

export default WelcomePage;

