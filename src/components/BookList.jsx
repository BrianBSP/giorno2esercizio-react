import { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import SingleBook from "./SingleBook";
import { Col, Form } from "react-bootstrap";

class BookList extends Component {
  //console.log(props.books);

  state = {
    searchQuery: "",
  };

  render() {
    return (
      <Container>
        <Row className="justify-content-center mb-3">
          <Col md={6} lg={3} xl={2}>
            <Form.Group>
              <Form.Control
                type="search"
                placeholder="Cerca un libro..."
                value={this.state.searchQuery}
                onChange={(event) => this.setState({ searchQuery: event.target.value })}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          {this.props.books
            .filter((book) => {
              return book.title.toLowerCase().includes(this.state.searchQuery);
            })
            .map((book) => {
              return (
                <Col xs={12} md={4} key={book.asin}>
                  <SingleBook book={book} />
                </Col>
              );
            })}
        </Row>
      </Container>
    );
  }
}
export default BookList;
