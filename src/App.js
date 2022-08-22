import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About/About";
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
// import List from "./pages/list/List";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/hotels" element={<List/>}/> */}
        <Route path="/hotels/:id" element={<Hotel />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
