import React from "react";

const Footer = () => {
  return (
    <div>
      {" "}
      <footer className="footer_section">
        <div className="container">
          <div className="row">
            <div className="col-md-4 footer-col">
              <div className="footer_contact">
                <h4>Contact Us</h4>
                <div className="contact_link_box">
                  <a href="">
                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                    <span> Location </span>
                  </a>
                  <a href="">
                    <i className="fa fa-phone" aria-hidden="true"></i>
                    <span> Call +84 0336642035 </span>
                  </a>
                  <a href="">
                    <i className="fa fa-envelope" aria-hidden="true"></i>
                    <span> quockhang972@gmail.com </span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 footer-col">
              <div className="footer_detail">
                <a href="" className="footer-logo">
                  {" "}
                  Pizza House{" "}
                </a>
                <p>
                  Discover a world of flavors with our freshly crafted pizzas,
                  made from the finest ingredients to satisfy every craving.
                </p>
                <div className="footer_social">
                  <a href="">
                    <i className="fab fa-facebook" aria-hidden="true"></i>
                  </a>
                  <a href="">
                    <i className="fab fa-twitter" aria-hidden="true"></i>
                  </a>
                  <a href="">
                    <i className="fab fa-linkedin" aria-hidden="true"></i>
                  </a>
                  <a href="">
                    <i className="fab fa-instagram" aria-hidden="true"></i>
                  </a>
                  <a href="">
                    <i className="fab fa-pinterest" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 footer-col">
              <h4>Opening Hours</h4>
              <p>Everyday</p>
              <p>10.00 Am -10.00 Pm</p>
            </div>
          </div>
          <div className="footer-info">
            <p>
              &copy; <span id="displayYear"></span> All Rights Reserved By
              <a href="https://html.design/">Pizza House</a>
              <br />
              <br />
              &copy; <span id="displayYear"></span> Distributed By
              <a href="https://themewagon.com/" target="_blank">
                Khang
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
