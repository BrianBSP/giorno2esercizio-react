import "bootstrap/dist/css/bootstrap.min.css";

import fantasy from "./data/fantasy.json"
import "./App.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import SingleBook from "./components/SingleBook";
/* import AllMyBooks from "./components/AllTheBooks"; */



function App() {
  return (
    <div className="App">
      <MyNav />
      <Welcome />
      {/* <AllMyBooks /> */}
      <SingleBook bookTitle={fantasy[0]}/>
      <MyFooter />
    </div>
  );
}

export default App;
