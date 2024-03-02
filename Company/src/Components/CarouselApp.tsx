import Car1 from "../assets/im.jpg";
import Car2 from "../assets/im2.jpg";
import Car3 from "../assets/im3.jpg";
import Carousel from "react-bootstrap/Carousel";
var CarouselApp = () => {
  return (
    <div className="carousel-container">
      <Carousel>
        <Carousel.Item interval={3000}>
          <img className="d-block w-100 h-200" src={Car1} alt="Image One" />
          <Carousel.Caption>
            <h3>Label for first slide</h3>
            <p>Sample Text for Image One</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img className="d-block w-100 h-200" src={Car2} alt="Image Two" />
          <Carousel.Caption>
            <h3>Label for second slide</h3>
            <p>Sample Text for Image Two</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img className="d-block w-100 h-200" src={Car3} alt="Image Two" />
          <Carousel.Caption>
            <h3>Label for second slide</h3>
            <p>Sample Text for Image Two</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
export default CarouselApp;
