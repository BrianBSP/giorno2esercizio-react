import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";

const SingleBook = (props) => {
  //console.log(props.bookTitle.title);
  return (
    <Container>
      <Row>
        <Col>
          <Card>
            <Card.Img variant="top" src={props.bookTitle.img} />
            <Card.Body>
              <Card.Title>{props.bookTitle.title}</Card.Title>
              <Card.Text>Category: {props.bookTitle.category}</Card.Text>
              <Badge bg="dark">{props.bookTitle.price}</Badge>
              <Button variant="primary">Buy</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
export default SingleBook;
