import { BrowserRouter } from "react-router-dom";
import "./App.css";
import MyRoute from "./Route/AppRoute";
import Color from "./Colors";
import Curser from "./Curser";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Curser /> */}
        <Color />
        <MyRoute />
      </BrowserRouter>
    </div>
  );
}

export default App;
