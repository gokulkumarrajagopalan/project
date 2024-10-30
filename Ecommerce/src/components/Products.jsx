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

  // Handle payment through Razorpay
  const handlePayment = async (product) => {
    try {
      // Create an order by calling your backend
      const orderRes = await fetch("https://3700-idx-project-1720162691714.cluster-3g4scxt2njdd6uovkqyfcabgo6.cloudworkstations.dev/PaymentRoutes/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: product.price, // Amount to be paid in smallest unit (Razorpay handles it)
          currency: "INR",
          receipt: `receipt#${product.id}`,
        }),
      });

      const orderData = await orderRes.json();

      // Razorpay options for payment
      const options = {
        key: "rzp_test_RNv1714d2JagoD", // Razorpay key from your backend
        amount: orderData.amount, // amount in paise
        currency: orderData.currency,
        name: "Your Store",
        description: product.title,
        order_id: orderData.id, // Razorpay order ID
        handler: async (response) => {
          // Verify payment using your backend
          const verifyRes = await fetch("https://3700-idx-project-1720162691714.cluster-3g4scxt2njdd6uovkqyfcabgo6.cloudworkstations.dev/PaymentRoutes/order/validate", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
            }),
          });

          const verification = await verifyRes.json();
          if (verifyRes.status === 200) {
            toast.success("Payment successful!");
            // Further action after successful payment (e.g., redirect or update cart)
          } else {
            toast.error("Payment verification failed");
          }
        },
        prefill: {
          name: "Customer Name",
          email: "customer@example.com",
          contact: "9999999999",
        },
        theme: {
          color: "#F37254",
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      toast.error("Failed to initiate payment");
      console.error(error);
    }
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
                <button
                  className="btn-primary"
                  onClick={() => handlePayment(product)}
                >
                  Pay Now
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
