import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Screens/Dashboard/Dashboard";

function App() {
  return (
    <div className="App">
      <Router>
        {/* <ScrollToTop> */}
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
        </Routes>
        {/* </ScrollToTop> */}
      </Router>
    </div>
  );
}

export default App;
