import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router , Routes, Route, Link } from "react-router-dom";

import Home from "./Component/Home";
import Signin from "./Component/Signin";
import Stock from './Component/Stock';
import Medicine from './Component/Medicine';

function App() {
  return (
  <Router>
    <Routes>
      <Route path="/home" element={<Home />}/>
      <Route path="/" element={<Signin />}/>
      <Route path="/medicine/stock" element={<Stock />} />
      <Route path="/medicine/view" element={<Medicine />} />
    </Routes>
  </Router>
  );
}

export default App;
