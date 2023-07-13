// import logo from "./logo.svg";/
import "./App.css";
import Slides from "./components/image-slide/slides";
import NavBar from "./components/nav/nav-bar";

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
        <Slides />
      </header>
    </div>
  );
}

export default App;
