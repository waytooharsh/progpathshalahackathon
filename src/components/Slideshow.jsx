import "./style.css";
import { Carousel } from "react-bootstrap";
const Slideshow = () => {
  const images = [
    {
      url: "https://drscdn.500px.org/photo/1062495024/m%3D900/v2?sig=2aa6cd3de2e327917c0ad02b57a64f173cebb8eea04554c9b086b0b3f895f131",
      caption: "Change the way you live",
    },
    {
      url: "https://drscdn.500px.org/photo/1062495090/m%3D900/v2?sig=4cc62f78502a7fe6bf741a13d0ab93204af2c886d3a89e36585c37617b2fa832",
      caption: "Adopt yoga as your new routine",
    },
    {
      url: "https://drscdn.500px.org/photo/1062495105/m%3D900/v2?sig=328f26e91ef69375bde21de03d9c09e64136f43812a6e0b046d7ace25477ddd3",
      caption: "Boost your immunity and health",
    },
  ];

  return (
    <Carousel className="ss">
      {images.map((image, index) => (
        <Carousel.Item className="ssimg" key={index}>
          <img
            className="d-block w-100"
            src={image.url}
            alt={`Slide ${index + 1}`}
          />
          <Carousel.Caption className="carocaption">
            <h3>{image.caption}</h3>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Slideshow;
