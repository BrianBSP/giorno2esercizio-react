import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";

const SingleBook = (props) => {
  //console.log(props.bookTitle.title);
  return (
    <Card>
      <Card.Img variant="top" src={props.book.img} />
      <Card.Body>
        <Card.Title>{props.book.title}</Card.Title>
        <Card.Text>Category: {props.book.category}</Card.Text>
        <Badge bg="dark">€ {props.book.price}</Badge>
        <Button variant="primary">Buy</Button>
      </Card.Body>
    </Card>
  );
};
export default SingleBook;
