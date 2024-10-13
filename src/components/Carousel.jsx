import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const MyCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <div className="overlay"></div>
        <img className="d-block w-100" src="/pizza1.jpg" alt="First slide" />
        <Carousel.Caption>
          <h3>BBQ Chicken Delight</h3>
          <p>
            Savor the smoky BBQ flavor with juicy chicken, onions, and barbecue
            sauce.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={1000}>
        <div className="overlay"></div>
        <img className="d-block w-100" src="/pizza2.jpg" alt="Second slide" />
        <Carousel.Caption>
          <h3>Spicy Hawaiian</h3>
          <p>
            A tropical twist with pineapple, ham, and a hint of spice to kick it
            up a notch!
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={1000}>
        <div className="overlay"></div>
        <img className="d-block w-100" src="/pizza3.jpg" alt="Third slide" />
        <Carousel.Caption>
          <h3>Vegetarian Supreme</h3>
          <p>
            A healthy choice filled with fresh veggies like bell peppers,
            mushrooms, and olives.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={1000}>
        <div className="overlay"></div>
        <img className="d-block w-100" src="/pizza4.jpg" alt="Third slide" />
        <Carousel.Caption>
          <h3>Pepperoni Special</h3>
          <p>
            Try our classic Pepperoni pizza, topped with mozzarella and tangy
            tomato sauce!
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={1000}>
        <div className="overlay"></div>
        <img className="d-block w-100" src="/pizza5.jpg" alt="Third slide" />
        <Carousel.Caption>
          <h3>Cheesy Margherita</h3>
          <p>
            A delicious combination of fresh tomatoes, basil, and melted
            mozzarella cheese.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default MyCarousel;
