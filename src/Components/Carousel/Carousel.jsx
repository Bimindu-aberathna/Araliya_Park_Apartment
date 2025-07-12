import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css';
//Import image folder
const importAll = require.context('../../../src/Assets/Araliya-park/photos', true);
const images = importAll.keys().map(importAll);

function Img_Carousel() {

  return (
    <Carousel fade interval={5000} className='carousel-custom'>
      {images.map((image, index) => (
        <Carousel.Item key={index}>
            <img src={image} alt={`Slide ${index + 1}`} className="c_image" />
          <Carousel.Caption>
            <h4>Araliya Park Apartments</h4>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Img_Carousel;