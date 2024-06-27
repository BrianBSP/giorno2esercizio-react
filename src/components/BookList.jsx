import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import SingleBook from "./SingleBook";

const BookList = (props) => {
  console.log(props.bookTitle);
  return (
    <Container>
      <Row>
        {props.bookTitle.map((book) => {
          return <SingleBook key={book.asin} />;
        })}
      </Row>
    </Container>
  );
};
export default BookList;
