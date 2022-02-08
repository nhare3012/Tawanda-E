import "./App.css";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  
} from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";

import Navbar from "./components/Navbar";
import BackDrop from "./components/BackDrop";
import SideDrawer from "./components/SideDrawer";

function App() {
  const [sideToggle, setSideToggle] = useState(false);

  return (
    <Router>
      <Navbar click={() => setSideToggle(true)} />
      <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
      <BackDrop show={sideToggle} click={() => setSideToggle(false)} />
        <Routes>
          <Route  path="/" element={<HomeScreen/>} />
          <Route  path="/product/:id" element={<ProductScreen/>} />
          <Route  path="/cart" element={<CartScreen/>} />
        </Routes>
      
    </Router>
  );
}

export default App;
