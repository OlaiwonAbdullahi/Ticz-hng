import Header from "./components/Header";
import Container from "./components/Container";
import About from "./components/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Container />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;