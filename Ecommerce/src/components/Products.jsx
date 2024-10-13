import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "../Styles/Products.css"; 

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products/");
      const products = await response.json();
      setData(products);
      setFilter(products);
      setLoading(false);
    };

    getProducts();
  }, []);

  const filterProduct = (category) => {
    const updatedList = data.filter((product) => product.category === category);
    setFilter(updatedList);
  };

  const ShowProducts = () => {
    return (
      <>
        <div className="filter-buttons">
          <button className="filter-btn" onClick={() => setFilter(data)}>
            All
          </button>
          <button
            className="filter-btn"
            onClick={() => filterProduct("men's clothing")}
          >
            Men's Clothing
          </button>
          <button
            className="filter-btn"
            onClick={() => filterProduct("women's clothing")}
          >
            Women's Clothing
          </button>
          <button className="filter-btn" onClick={() => filterProduct("jewelery")}>
            Jewelery
          </button>
          <button
            className="filter-btn"
            onClick={() => filterProduct("electronics")}
          >
            Electronics
          </button>
        </div>

        <div className="products-grid">
          {filter.map((product) => (
            <div className="product-card" key={product.id}>
              <img
                className="product-image"
                src={product.image}
                alt={product.title}
                loading="lazy"
              />
              <div className="product-info">
                <h5 className="product-title">
                  {product.title.substring(0, 15)}...
                </h5>
                <p className="product-description">
                  {product.description.substring(0, 60)}...
                </p>
                <div className="product-price">$ {product.price}</div>
              </div>
              <div className="product-actions">
                <Link to={`/product/${product.id}`} className="btn-primary">
                  Buy Now
                </Link>
                <button
                  className="btn-secondary"
                  onClick={() => {
                    toast.success("Added to cart");
                    addProduct(product);
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  };

  const Loading = () => {
    return (
      <div className="loading-grid">
        {[...Array(8)].map((_, index) => (
          <div key={index} className="loading-card">
            <Skeleton height={350} />
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="products-container">
      <h2 className="products-title">Latest Products</h2>
      <hr />
      {loading ? <Loading /> : <ShowProducts />}
    </div>
  );
};

export default Products;
