import React, { useState } from "react";
import { Link } from "react-router-dom";
import products from "../data/data";
import { useCart } from "../components/cartcontext";

function Home({ filter, searchTerm }) {
  const [productList] = useState(products);
  const { addtoCart } = useCart();

  const filteredProducts = productList.filter((item) => {
    const matchCategory = filter === "all" || item.category.toLowerCase() === filter.toLowerCase();
    const matchSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Bienvenue dans notre Shop</h2>

      <div className="row">
        {filteredProducts.map((item) => (
          <div key={item.id} className="col-md-3 mb-4">
            <div className="card h-100">
              <img 
                src={item.image} 
                alt={item.title} 
                className="card-img-top" 
                style={{ height: "250px", objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.price} DA</p>
                <button 
                  className="btn add-to-cart-button mb-2"
                  onClick={() => addtoCart(item, 1)}
                >
                  Ajouter au panier
                </button>
                <Link 
                  to={`/product/${item.id}`}
                  className="btn view-product-button"
                >
                  Voir le produit
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;