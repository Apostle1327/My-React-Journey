// eslint-disable-next-line
import React from "react";

// eslint-disable-next-line
const ProductsCatalogue = ({ products, onAddToCart }) => {
  // eslint-disable-next-line
  if (!Array.isArray(products) || products.length === 0) {
    return <p>No Products Available!</p>;
  }

  const addToCart = (product) => {
    if (onAddToCart && typeof onAddToCart === "function") {
      onAddToCart(product);
    } else {
      console.error("onAddToCart is not defined or not a function.");
    }
  };

  return (
    <div className="row">
      {/* eslint-disable-next-line */}
      {products.map((product) => {
        const { id, title, price, description, image, rating } = product;
        return (
          <div className="col-md-4 mb-4" key={id}>
            <div className="card h-100 shadow-lg border-0 rounded-3">
              <img
                src={image}
                alt={title}
                className="img-fluid card-img-top mx-auto d-block"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body p-4">
                <h4 className="card-title text-primary fw-bold">{title}</h4>
                <div className="d-flex justify-content-center align-items-center mb-3">
                  <span className="badge bg-warning text-dark me-2">
                    {rating.rate} ★
                  </span>
                  <small>({rating.count} reviews)</small>
                </div>
                <p className="card-text text-muted">{description}</p>
                <h5 className="text-success fw-bold">${price.toFixed(2)}</h5>
                <button
                  type="button"
                  className="btn btn-success w-100 mt-3"
                  onClick={() => addToCart(product)}
                >
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductsCatalogue;
