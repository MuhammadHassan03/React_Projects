import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, ShoppingBag } from "phosphor-react";
import './Style/Navbar.css';


const Navbar = () => {
  return (
    <>
      <ul class="nav justify-content-center btn btn-dark navbar">
        <div className="navDiv1 navDiv">
          <Link className="ShopName" to={"/"}><h2>Hassan Shop</h2></Link>
        </div>
        <div className="navDiv2 navDiv">
          <form class="d-flex">
            <input class="form-control me-2 searchBox" type="search" placeholder="Search Products" aria-label="Search"/>
              <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
        <div className="navDiv3 navDiv">
          <li class="nav-item">
            <Link to={"/"} class="nav-link active" aria-current="page" href="#">
              <ShoppingBag className="shoppingBag" size={32}></ShoppingBag> <p className="ShopText">Shop</p>
            </Link>
          </li>
          <li class="nav-item">
            <Link to={"/cart"} class="nav-link" href="#">
              <ShoppingCart className="shoppingBag" size={32} /> <p className="ShopText">Cart</p>
            </Link>
          </li>
        </div>
      </ul>
    </>
  );
};
export default Navbar;
