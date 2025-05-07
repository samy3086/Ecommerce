import { useState, useContext,createContext,useEffect } from "react";

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
  });
  
  
 const addtoCart = (product,quantity) => {
  setCart(prevCart => {
    const existingProduct = prevCart.find(item => item.id === product.id);
    if (existingProduct) {
      return prevCart.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
      );
    } else {
      return [...prevCart, { ...product, quantity }];
    }
  });
};

 const removeFromCart = (productId) => {
  setCart(prevCart => prevCart.filter(item => item.id !== productId));
 };



 const updateQuantity = (productId, quantity) => {
  setCart(prevCart =>
    prevCart.map(item =>
      item.id === productId ? { ...item, quantity } : item
    )
  );
    };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);
  
 return (
  <CartContext.Provider value={{ cart, addtoCart, removeFromCart, updateQuantity, getTotalPrice }}>
    {children}
  </CartContext.Provider>
 ); 
 };
 export default CartContext;