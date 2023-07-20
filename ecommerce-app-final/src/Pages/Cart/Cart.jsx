import { useContext, useEffect, useState } from "react";
import { Context } from "../../Context/Context";
import products from "../../DataBase/Products";
import './Style/Cart.css';

export const Cart = () => {
  const { cartItems, removeFromCart } = useContext(Context);
  const [quantity, setquantity] = useState(1);
  const [cart, setCart] = useState(null);
  const [subtotal, setSubtotal] = useState(0);

  

  useEffect(()=>{

    const handleQuantityDown = () => {
      if (quantity > 1) {
        setquantity(quantity - 1);
      }
    }
    const handleQuantityUp = () => {
      if (quantity > 0) {
        setquantity(quantity + 1);
      }
    }
    
    setCart(()=>{
      return(
        cartItems.map((index) => {
          return (
            <>
              <div className="cartProducts">
                <div>
                  <img className="imageProductCart" src={products[index - 1].image} alt="" />
                </div>
                <div>
                  <h2 className="titleCart">{products[index - 1].title}</h2>
                </div>
                <div className="quantityControl">
                  <button class="btn btn-dark quantityButtons" onClick={handleQuantityDown}>-</button>
                  <h2 className="Quantity">{quantity}</h2>
                  <button class="btn btn-dark quantityButtons" onClick={handleQuantityUp}>+</button>
                </div>
                <div>
                  <p>${products[index - 1].price * quantity}</p>
                </div>
                <div>
                  <button onClick={()=>removeFromCart(products[index - 1].id)}>Remove</button>
                  
                </div>
              </div>
            </>
          )
        }))
      })
      
  }, [cartItems, quantity, removeFromCart])

return (
  <>
      {cart}
      <div>
        <div><h5>Subtotal {subtotal}</h5></div>
      </div>
  </>
);
};
