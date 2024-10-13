import React from "react";

const Menu = ({ items, onAddToCart }) => {
  return (
    <div>
      <section className="food_section layout_padding-bottom">
        <div className="container">
          <div className="heading_container heading_center">
            <h2>Our Menu</h2>
          </div>

          <ul className="filters_menu">
            <li className="active" data-filter="*">
              All
            </li>
            <li data-filter=".burger">Burger</li>
            <li data-filter=".pizza">Pizza</li>
            <li data-filter=".pasta">Pasta</li>
            <li data-filter=".fries">Fries</li>
          </ul>

          <div className="filters-content">
            <div className="row grid">
              {Array.isArray(items) && items.length > 0 ? (
                items.map((item) => (
                  <div className="col-sm-6 col-lg-4" key={item.id}>
                    <div className="box">
                      <div className="img-box">
                        <img src={item.image} alt={item.title} />
                      </div>
                      <div className="detail-box">
                        <h5>{item.title}</h5>
                        <p>{item.title}</p>
                        <div className="options">
                          {item.salePrice ? (
                            <h6>
                              <span
                                style={{
                                  textDecoration: "line-through",
                                  marginRight: "8px",
                                }}
                              >
                                ${item.price}
                              </span>
                              ${item.salePrice}
                            </h6>
                          ) : (
                            <h6>${item.price}</h6>
                          )}
                          <button
                            className="button-buy"
                            onClick={() => onAddToCart(item)}
                          >
                            <i className="fa fa-shopping-cart"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p>No items available in the menu</p>
              )}
            </div>
          </div>
          <div className="btn-box">
            <a href="#">View More</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Menu;
