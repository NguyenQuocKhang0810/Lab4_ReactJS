import React from "react";
import CartItem from "./CartItem";
import "../css/popup.css";

function SelectedItemsPopup({
  cartItems,
  updateQuantity,
  togglePopup,
  removeItem,
  setCartItems,
}) {
  const totalAmount = cartItems.reduce(
    (acc, item) =>
      acc + (item.salePrice ? item.salePrice : item.price) * item.quantity,
    0
  );

  return (
    <div>
      <div className="popup">
        <button className="close-popup" onClick={togglePopup}>
          Close
        </button>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <ul>
              {cartItems.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  updateQuantity={updateQuantity}
                  removeItem={removeItem}
                />
              ))}
            </ul>
            <div className="total-amount">
              <strong>TOTAL: ${totalAmount.toFixed(2)}</strong>{" "}
              {/* Hiển thị tổng tiền */}
            </div>
            <button className="remove-all-btn" onClick={() => setCartItems([])}>
              Clear All
            </button>
          </>
        )}
      </div>
      <div onClick={togglePopup} className="popup-overlay"></div>
    </div>
  );
}

export default SelectedItemsPopup;
