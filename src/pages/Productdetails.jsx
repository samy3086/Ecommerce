import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import products from "../data/data";
import { useCart } from "../components/cartcontext";

export const Productdetails = () => {
  const { addtoCart } = useCart();

  const handleAddToCart = () => {
    addtoCart(product, 1);
  };

  const { id } = useParams();
  const [product, setProduct] = useState(null);
  
  useEffect(() => {


    const storedproduct = localStorage.getItem(`product-${id}`);
    let found ;
    if (storedproduct){
      found= JSON.parse(storedproduct);
      found.views+=0.5;
      
    } else{
    const original = products.find((p) => p.id === parseInt(id));
     if (original){
      found = { ...original , views: original.views+0.5};
     }
    }

    if(found){
      setProduct(found);
      localStorage.setItem(`product-${id}`, JSON.stringify(found));
    }


  }
  , [id]);

  if (!product) {
    return <div>Loading...</div>;
  }
  return (
    <div style={{ padding: "20px" }}>
      <div style={{ display: "flex", gap: "20px" }}>
        <div style={{ position: "relative", display: "inline-block" }}>
          <img
            src={product.image}
            alt={product.title}
            style={{
              width: "300px",
              objectFit: "cover",
              marginTop: "20px",
            }}
          />
            {product.views < 10 && (
            <span
              style={{
                position: "absolute",
                top: "10px",
                left: "250px",
                backgroundColor: "black",
                color: "white",
                padding: "5px 10px",
                borderRadius: "10px",
                fontSize: "15px",
                zIndex: 1,
              }}
            >
              New!
            </span>
          )}
        </div>
        <div>
          <h2>{product.title}</h2>
          <p>
            <strong>Price:</strong> {product.price} DA
          </p>
          <p>
            <strong>Category:</strong> {product.category}
          </p>
          <p>
            <strong>Views:</strong> {product.views}
          </p>
          <p>
            <strong>Sold:</strong> {product.sold}
          </p>

          <div>
            <h4>Reviews:</h4>
            {product.reviews.length === 0 ? (
              <p>No reviews yet</p>
            ) : (
              product.reviews.map((review, index) => (
                <div key={index} style={{ marginBottom: "10px" }}>
                  <p>
                    <strong>{review.user}</strong> ⭐️ {review.rating}
                  </p>
                  <p>{review.comment}</p>
                </div>
              ))
            )}
          </div>

          <button
            onClick={handleAddToCart}
            className="add-to-cart"
            type="button"
            disabled={product.sold === 0} // Disable button if sold out
            style={{
              marginTop: "20px",
              padding: "10px 20px",
              backgroundColor: "black",
              color: "white",
              border: "none",
              borderRadius: "5px",
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Productdetails;