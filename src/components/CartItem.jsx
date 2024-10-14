import React from "react";
import "../css/cartitem.css";

function CartItem({ item, updateQuantity, removeItem }) {
  const handleIncrease = () => {
    updateQuantity(item.id, item.quantity + 1);
  };

  const handleDecrease = () => {
    updateQuantity(item.id, item.quantity - 1);
  };

  return (
    <li className="cart-item">
      <img src={item.image} alt={item.title} className="item-image" />
      <div className="cart-item-info">
        <span className="item-name">{item.title}</span>
        <span className="item-price">
          {item.salePrice ? (
            <>
              <span
                style={{ textDecoration: "line-through", marginRight: "8px" }}
              >
                ${item.price}
              </span>
              ${item.salePrice}
            </>
          ) : (
            `$${item.price}`
          )}
        </span>
      </div>
      <div className="quantity-controls">
        <button className="quantity-btn decrease" onClick={handleDecrease}>
          -
        </button>
        <span className="item-quantity">{item.quantity}</span>
        <button className="quantity-btn increase" onClick={handleIncrease}>
          +
        </button>
        <button className="remove-btn" onClick={() => removeItem(item.id)}>
          Delete
        </button>
      </div>
    </li>
  );
}

export default CartItem;
