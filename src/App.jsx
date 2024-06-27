import "bootstrap/dist/css/bootstrap.min.css";

import fantasy from "./data/fantasy.json";
import "./App.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import SingleBook from "./components/SingleBook";
import BookList from "./components/BookList";
/* import AllMyBooks from "./components/AllTheBooks"; */

function App() {
  return (
    <div className="App">
      <MyNav />
      <Welcome />
      {/* <AllMyBooks /> */}
      <SingleBook bookTitle={fantasy[0]} />
      <BookList bookTitle={fantasy} />
      <MyFooter />
    </div>
  );
}

export default App;
