import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import Navbar from "../src/components/Navbar";
import Productdetail from './pages/Productdetails';
import Cart from './pages/Cart';

import { CartProvider } from './components/cartcontext'; 
function App() {
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <CartProvider>
    <Router>
      <Navbar setFilter={setFilter} setSearchTerm={setSearchTerm} />
      <Routes>
      <Route path="/" element={<Home filter={filter} searchTerm={searchTerm} />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/product/:id" element={<Productdetail />} />
      </Routes>
    </Router>
    </CartProvider>
  );
}


export default App;
