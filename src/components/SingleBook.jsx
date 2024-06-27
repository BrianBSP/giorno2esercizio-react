import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import { Component } from "react";

class SingleBook extends Component {
  state = {
    selected: false,
  };

  render() {
    return (
      <Card
        onClick={() => this.setState({ selected: !this.state.selected })}
        style={{ border: this.state.selected ? "2px solid grey" : "none" }}
      >
        <Card.Img variant="top" src={this.props.book.img} />
        <Card.Body>
          <Card.Title>{this.props.book.title}</Card.Title>
          <Card.Text>Category: {this.props.book.category}</Card.Text>
          <Badge bg="dark">€ {this.props.book.price}</Badge>
          <Button variant="primary">Buy</Button>
        </Card.Body>
      </Card>
    );
  }
}
export default SingleBook;
