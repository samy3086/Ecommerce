import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "../components/cartcontext";

function Navbar({ setFilter, setSearchTerm }) {
  const [searchText, setSearchText] = useState("");
  const { cart} = useCart();
  const handleSearch = (e) => {
    e.preventDefault();
    setSearchTerm(searchText.toLowerCase());
  };

  const handleCategoryClick = (category) => {
    setFilter(category);
    setSearchTerm(""); // Réinitialise la recherche quand on clique une catégorie
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div className="container-fluid">

        <Link className="navbar-brand fw-bold" to="/" onClick={() => {
          setFilter("all");
          setSearchTerm("");
        }}>
          HS-Shop
        </Link>

        <div className="collapse navbar-collapse" id="navbarContent">
          <div className="mx-auto">
            <ul className="navbar-nav d-flex flex-row gap-3">
              <li className="nav-item">
                <button className="btn nav-link" onClick={() => handleCategoryClick("all")}>
                  Home
                </button>
              </li>
              <li className="nav-item">
                <button className="btn nav-link" onClick={() => handleCategoryClick("Man")}>
                  Man
                </button>
              </li>
              <li className="nav-item">
                <button className="btn nav-link" onClick={() => handleCategoryClick("Women")}>
                  Women
                </button>
              </li>
            </ul>
          </div>

          <form className="d-flex" onSubmit={handleSearch}>
            <input 
              className="form-control me-2"
              type="search"
              placeholder="Search..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <button className="btn search-button" type="submit">
              Search
            </button>
          </form>

          <Link 
            to="/cart" 
            className="btn cart-button ms-3 d-flex align-items-center justify-content-center p-0"
            style={{ width: "40px", height: "40px" }}
         
          >
            <FaShoppingCart size={20} />
            ({cart.length})
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;