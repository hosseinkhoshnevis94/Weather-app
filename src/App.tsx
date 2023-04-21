import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import "./App.css";
import Card from "./component/Card/Card";
import NavBar from "./component/NavBar/NavBar";

const App = (): JSX.Element => {
  return (
    <>
      <Container fluid className=" mt-5">
        <Row>
          <Col xs={12} md={{ span: 8, offset: 2 }}>
            <Card></Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default App;
