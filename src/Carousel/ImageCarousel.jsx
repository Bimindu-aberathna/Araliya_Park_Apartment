import Carousel from 'react-bootstrap/Carousel';

// Load all images from the folder using Webpack's require.context
const importAll = (r) => r.keys().map(r);
const images = importAll(require.context('../Assets/Araliya-park/location_images', false, /\.(png|jpe?g|svg)$/));

function ImageCarousel() {
  return (
    <Carousel fade>
      {images.map((image, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100"
            src={image}
            alt={`Slide ${index + 1}`}
            style={{ height: '500px', objectFit: 'cover', borderRadius: '10px' }}
          />
          <Carousel.Caption>
            <h3>Photo {index + 1}</h3>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default ImageCarousel;
