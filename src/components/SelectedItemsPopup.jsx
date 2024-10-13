import React from "react";
import CartItem from "./CartItem";
import "../css/popup.css";

function SelectedItemsPopup({ cartItems, updateQuantity, togglePopup }) {
  return (
    <div>
      <div className="popup">
        <button className="close-popup" onClick={togglePopup}>
          Close
        </button>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cartItems.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                updateQuantity={updateQuantity}
              />
            ))}
          </ul>
        )}
      </div>
      <div onClick={togglePopup} className="popup-overlay"></div>
    </div>
  );
}

export default SelectedItemsPopup;
