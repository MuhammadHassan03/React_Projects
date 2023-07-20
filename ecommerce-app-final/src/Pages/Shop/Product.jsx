import { Link } from 'react-router-dom';
import './Style/Product.css';
import { Context } from '../../Context/Context';
import { useContext } from 'react';

export const Product = (props) => {

    let id = props.pro.id;
    const { addToCart } = useContext(Context);

    const handleAddToCart = () => {
        addToCart(id);
    }

    return (
        <>
            <div className='product'>
                <div className='div1'><img className='imageProduct' src={props.pro.image} alt="" /></div>
                <div className='div2'><h1 className='title'>{props.pro.title}</h1></div>
                <div className='div3'>
                    <div className='Price'>
                        <h4 className='pricePs'>${props.pro.price}</h4>
                    </div>
                </div>
                <div className='div4'>
                    <Link onClick={handleAddToCart} to={"/cart"}>
                        <button type="button" class="btn btn-dark">Add To Cart</button>
                    </Link>
                </div>
                <div className='div5'>
                    <Link to={`/product/${id}`} >
                        <button type="button" class="btn btn-dark">View</button>
                    </Link>
                </div>
            </div>
        </>
    )
}