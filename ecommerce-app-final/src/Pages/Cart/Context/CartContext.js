import { useState } from 'react';
import {Context} from '../../../Context/Context';

const Cart = ({children}) => {
    const [cartItems, setcartItems] = useState([]);
    const addToCart = (id) => {
        setcartItems([...cartItems, id])
    }
    
    const removeFromCart = (id) => {
        setcartItems(cartItems.map((item)=> item.id !== id))
    }

    const clearCart = ()=>{
        setcartItems([]);
    }
    return(
        <Context.Provider value={{cartItems, removeFromCart, addToCart, clearCart}}>
            {children}
        </Context.Provider>
    );
}
export default Cart;