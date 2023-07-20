import { Link, useParams } from "react-router-dom";
import { useContext } from "react";
import Products from '../../DataBase/Products';
import { useEffect, useState } from "react";
import './Style/ProductDetails.css';
import { Context } from "../../Context/Context";

export const ProductDetail = () => {
    const [product, setProduct] = useState(null);
    const { id } = useParams();
    const findIndex = Products.findIndex((item) => item.id == id);
    const {addToCart} = useContext(Context);

    const handleAddToCart = () => {
        addToCart(id);
    }


    useEffect(() => {
        setProduct((index) => {
            return (
                <div className="PDDiv">
                    <div className="PDdiv1">
                        <img className="PDimage" src={Products[findIndex].image} alt="" />
                    </div>
                    <div className="PDdiv2">
                        <h2>{Products[findIndex].title}</h2>
                        <div className="PDCategorydiv">
                            <b>Category</b> <h5 className="PDps">  {Products[findIndex].category}</h5>
                        </div>
                        <div className="PDRatingDiv">
                            <b>Rating</b> <h5 className="PDps">{Products[findIndex].rating.rate}</h5>
                        </div>
                        <p>{Products[findIndex].description}</p>
                        <Link to={"/cart"} >
                            <button onClick={handleAddToCart} type="button" class="btn btn-dark">Add to Cart</button>
                        </Link>
                    </div>
                </div>
            );
        })
    }, [addToCart, findIndex, id])
    return (
        <>
            {product}
        </>
    );
}