import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import fantasy from "./data/fantasy.json";
import history from "./data/history.json";
import horror from "./data/horror.json";
import romance from "./data/romance.json";
import scifi from "./data/scifi.json";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";


function App() {
  return (
    <div className="App">
      <MyNav />
      <Welcome />
      <Container>
        <Row>
          {fantasy.map((book) => {
            return (
              <Col>
                <Card>
                  <Card.Img variant="top" src={book.img} />
                  <Card.Body>
                    <Card.Title>{book.title}</Card.Title>
                    <Card.Text>
                      Category: {book.category}
                    </Card.Text>
                    <Badge bg="dark">{book.price}</Badge>
                    <Button variant="primary">Buy</Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
      <MyFooter />
    </div>
  );
}

export default App;
