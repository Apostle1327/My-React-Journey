// eslint-disable-next-line
import React from "react";
import { Button } from "react-bootstrap";

// eslint-disable-next-line
const ProductCart = ({ products = [], onRemove, onUpdateQuantity }) => {
  const finalPrice = products.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  const handleIncreaseQuantity = (productId) => {
    if (onUpdateQuantity) {
      onUpdateQuantity(productId, "increase");
    }
  };

  const handleDecreaseQuantity = (productId) => {
    if (onUpdateQuantity) {
      onUpdateQuantity(productId, "decrease");
    }
  };

  const handleRemove = (productId) => {
    if (onRemove && typeof onRemove === "function") {
      onRemove(productId);
    }
  };

  return (
    <div className="cart-section mt-5">
      <h3>Your Cart</h3>
      <div className="cart-items">
        {products.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          products.map((product) => (
            <div
              key={product.id}
              className="d-flex justify-content-around align-items-center mb-3"
            >
              <div className="d-flex align-items-center">
                <img
                  src={product.image}
                  alt={product.title}
                  style={{
                    width: "50px",
                    height: "50px",
                    objectFit: "cover",
                    marginRight: "10px",
                  }}
                />
                <div>
                  <h5>{product.title}</h5>
                  <p>Price: ${product.price.toFixed(2)}</p>
                  <div className="d-flex align-items-center">
                    <Button
                      variant="outline-secondary"
                      size="sm"
                      onClick={() => handleDecreaseQuantity(product.id)}
                      disabled={product.quantity <= 1} // Disable the minus button when quantity is 1
                    >
                      -
                    </Button>
                    <span className="mx-2">{product.quantity}</span>
                    <Button
                      variant="outline-secondary"
                      size="sm"
                      onClick={() => handleIncreaseQuantity(product.id)}
                    >
                      +
                    </Button>
                  </div>
                </div>
              </div>
              <div>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => handleRemove(product.id)}
                >
                  Remove
                </Button>
              </div>
            </div>
          ))
        )}
      </div>
      <hr />
      <div className="d-flex justify-content-between">
        <h4>Total:</h4>
        <h4>${finalPrice.toFixed(2)}</h4>
      </div>
    </div>
  );
};

export default ProductCart;
