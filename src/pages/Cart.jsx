import React from 'react'
import {useCart} from '../components/cartcontext'
export const Cart = () => {
  const {cart,removeFromCart,updateQuantity,getTotalPrice} = useCart();
  
  if (cart.length === 0) {
    return <div style={{textAlign:'center',fontFamily:'arial',fontWeight:'bold'}}>Your cart is empty!</div>;
  }
  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{textAlign:'center',fontFamily:'arial'}}>Shopping Cart</h2>
      <div>
        {cart.map((item) => (
          <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
            <div>
              <h3>{item.title}</h3>
              <p>Price: {item.price} DA</p>
              <p>Quantity: {item.quantity}</p>
              <button onClick={() => updateQuantity(item.id, item.quantity + 1)} style={{ marginTop: '20px', padding: '10px 20px', backgroundColor: 'black', color: 'white', border: 'none', borderRadius: '5px' }}>+</button>
              <button onClick={() => updateQuantity(item.id, item.quantity - 1)} disabled={item.quantity === 1} style={{ marginTop: '20px', padding: '10px 20px', backgroundColor: 'black', color: 'white', border: 'none', borderRadius: '5px',marginLeft:'5px' }}>
                -
              </button>
              <button onClick={() => removeFromCart(item.id)}
                style={{ marginTop: '20px', padding: '10px 20px', backgroundColor: 'red', color: 'white', border: 'none', borderRadius: '5px',marginLeft:'5px' }}>Remove</button>
            </div>
            <div>
              <img src={item.image} alt={item.title} style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
            </div>
          </div>
        ))}
      </div>
      <h3>Total Price: {getTotalPrice()} DA</h3>
    </div>
  );
};
export default Cart;