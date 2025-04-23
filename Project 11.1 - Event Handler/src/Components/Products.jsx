// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import ProductsCatalogue from "./ProductsCatalogue";
import ProductCart from "./ProductCart";

const ProductData = () => [
  {
    id: 1,
    title: "Product 1",
    price: 578.44,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quisquam error debitis laboriosam ut provident, harum nulla. Impedit, veniam asperiores.",
    image: "https://picsum.photos/500?random=1",
    rating: {
      rate: 2.9,
      count: 18101,
    },
  },

  {
    id: 2,
    title: "Product - 2",
    price: 166.89,
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam atque vel molestias eveniet distinctio, ratione placeat provident minus adipisci fugiat?",
    image: "https://picsum.photos/500?random=2",
    rating: {
      rate: 4.1,
      count: 12887,
    },
  },

  {
    id: 3,
    title: "Product - 3",
    price: 723.83,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit totam sunt, quidem ipsam quisquam vitae recusandae omnis quibusdam consequuntur eos.",
    image: "https://picsum.photos/500?random=3",
    rating: {
      rate: 3.2,
      count: 11372,
    },
  },

  {
    id: 4,
    title: "Product - 4",
    price: 92.71,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, facilis! Minus eveniet dolorem suscipit consequatur hic impedit est iste aperiam?",
    image: "https://picsum.photos/500?random=4",
    rating: {
      rate: 3.6,
      count: 6576,
    },
  },

  {
    id: 5,
    title: "Product - 5",
    price: 493.03,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum nam, totam autem reprehenderit facere quidem! Commodi ad fuga rerum quibusdam.",
    image: "https://picsum.photos/500?random=5",
    rating: {
      rate: 4.2,
      count: 62259,
    },
  },

  {
    id: 6,
    title: "Product - 6",
    price: 658.88,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, odio voluptatem voluptates quasi amet ratione iste sapiente aperiam quaerat fugit?",
    image: "https://picsum.photos/500?random=6",
    rating: {
      rate: 4.8,
      count: 33628,
    },
  },

  {
    id: 7,
    title: "Product - 7",
    price: 160.18,
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. In quod adipisci quasi recusandae eaque sit voluptates voluptas qui doloremque accusamus.",
    image: "https://picsum.photos/500?random=7",
    rating: {
      rate: 2.4,
      count: 74059,
    },
  },

  {
    id: 8,
    title: "Product - 8",
    price: 441.2,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa eos officia dicta necessitatibus commodi porro earum magni quasi sint omnis.",
    image: "https://picsum.photos/500?random=8",
    rating: {
      rate: 3.6,
      count: 36298,
    },
  },

  {
    id: 9,
    title: "Product - 9",
    price: 423.57,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo labore quo minus est inventore expedita, similique laboriosam nihil placeat fuga?",
    image: "https://picsum.photos/500?random=9",
    rating: {
      rate: 4.2,
      count: 89500,
    },
  },

  {
    id: 10,
    title: "Product - 10",
    price: 71.04,
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis aliquid quos nobis sit tempora natus a harum eveniet fugiat exercitationem.",
    image: "https://picsum.photos/500?random=10",
    rating: {
      rate: 4.1,
      count: 71634,
    },
  },

  {
    id: 11,
    title: "Product - 11",
    price: 82.23,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis at quos inventore ex dignissimos necessitatibus quia, beatae nisi a est.",
    image: "https://picsum.photos/500?random=11",
    rating: {
      rate: 2.9,
      count: 75292,
    },
  },

  {
    id: 12,
    title: "Product - 12",
    price: 837.51,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi hic quibusdam repellat at placeat accusantium, dolorem ab eos in porro.",
    image: "https://picsum.photos/500?random=12",
    rating: {
      rate: 3.5,
      count: 93688,
    },
  },
];

const Products = () => {
  const [cartItems, setCartItems] = useState(() => {
    const savedItems = localStorage.getItem("cartItems");
    return savedItems ? JSON.parse(savedItems) : [];
  });

  const updateStorage = (items) => {
    localStorage.setItem("cartItems", JSON.stringify(items));
  };

  const handleCart = (product) => {
    setCartItems((cartBefore) => {
      const existingItem = cartBefore.find((item) => item.id === product.id);

      if (existingItem) {
        const updatedCart = cartBefore.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        updateStorage(updatedCart);
        return updatedCart;
      }

      const newCart = [...cartBefore, { ...product, quantity: 1 }];
      updateStorage(newCart);
      return newCart;
    });
  };

  const handleRemoveFromCart = (productId) => {
    setCartItems((cartBefore) => {
      const updatedCart = cartBefore.filter((item) => item.id !== productId);
      updateStorage(updatedCart);
      return updatedCart;
    });
  };

  const handleUpdateQuantity = (productId, action) => {
    setCartItems((cartBefore) => {
      const updatedCart = cartBefore.map((item) => {
        if (item.id === productId) {
          let newQuantity = item.quantity;
          if (action === "increase") {
            newQuantity += 1;
          } else if (action === "decrease" && item.quantity > 1) {
            newQuantity -= 1;
          }
          return { ...item, quantity: newQuantity };
        }
        return item;
      });
      updateStorage(updatedCart);
      return updatedCart;
    });
  };

  return (
    <>
      <div className="row">
        <ProductsCatalogue products={ProductData()} onAddToCart={handleCart} />
      </div>
      <ProductCart
        products={cartItems}
        onRemove={handleRemoveFromCart}
        onUpdateQuantity={handleUpdateQuantity}
      />
    </>
  );
};

export default Products;
