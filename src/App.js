import React, { useState, useEffect } from "react";
import Banner from "./components/Banner";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Book from "./components/Book";
import Footer from "./components/Footer";
import SelectedItemsPopup from "./components/SelectedItemsPopup";

import "../src/css/bootstrap.css";
import "../src/css/style.css";
import "../src/css/responsive.css";
import "../src/css/header.css";

function App() {
  const [products, setProducts] = useState([]); // Lưu sản phẩm từ API
  const [cartItems, setCartItems] = useState([]); // Lưu sản phẩm trong giỏ hàng
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      // dùng fetch để lấy dữ liệu từ API
      try {
        const response = await fetch(
          "https://api-demo-4gqb.onrender.com/products"
        );
        if (!response.ok) {
          throw new Error("Error get data from API");
        }
        const data = await response.json();

        setProducts(data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  const handleAddToCart = (item) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id); // tìm kiếm một mặt hàng đã có trong giỏ hàng có cùng thông tin id với mặt hàng đang được thêm vào.
    if (existingItem) {
      setCartItems(
        cartItems.map(
          (cartItem) =>
            cartItem.id === item.id
              ? { ...cartItem, quantity: cartItem.quantity + 1 }
              : cartItem // False Case: nó chỉ trả về giá trị gốc cartItem mà không có bất kỳ thay đổi nào.
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
    console.log(cartItems);
  };

  const updateQuantity = (itemId, newQuantity) => {
    if (newQuantity === 0) {
      setCartItems(cartItems.filter((item) => item.id !== itemId)); // tạo ra một mảng mới loại trừ mặt hàng có id. khớp.
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === itemId ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };
  console.log("isPopupVisible", isPopupVisible);

  return (
    <div>
      <div className="wrapper-header">
        <Header
          cartCount={cartItems.reduce((acc, item) => acc + item.quantity, 0)}
          togglePopup={togglePopup}
        />
        {isPopupVisible && (
          <SelectedItemsPopup
            cartItems={cartItems}
            updateQuantity={updateQuantity}
            togglePopup={togglePopup}
          />
        )}
      </div>
      <Banner />
      <Menu items={products} onAddToCart={handleAddToCart} />
      <Book />
      <Footer />
    </div>
  );
}

export default App;
