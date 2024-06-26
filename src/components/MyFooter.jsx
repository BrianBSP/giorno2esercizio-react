import { ListGroup, ListGroupItem } from "react-bootstrap"

const MyFooter = () => {
    return(
        <footer className="bg-dark" >
            <p className="text-white mb-0 pt-4">Dove puoi trovare i nostri libri:</p>
            <ListGroup className="text-white mb-0">
                <ListGroupItem className="bg-dark text-white border-0">Rimini via pluto</ListGroupItem>
                <ListGroupItem className="bg-dark text-white border-0">Riccione via pippo</ListGroupItem>
                <ListGroupItem className="bg-dark text-white border-0">Cattolica via topolino</ListGroupItem>
            </ListGroup>
        </footer>
    )
}
export default MyFooter