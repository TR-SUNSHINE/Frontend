import "./Header.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

function Header() {
    return (
        <Row>
            <Col>
            </Col>
            <Col>
            </Col>
            <Col>
                <Image
                    src="./images/welcomeSunshine.jfif"
                    alt="Info"
                    style={{
                        width: 100,
                    }} fluid
                />
            </Col>
        </Row>
    );
}

export default Header;
