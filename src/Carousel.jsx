import { useRef, useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import './Carousel.css';
import stayCurrent_img from './assets/stayCurrent_img.png';
import findYourPlace_img from './assets/findYourPlace_img.png';
import connectWithToast_img from './assets/connectWithToast_img.png';
import earnBadges_img from './assets/earnBadges_img.png';
import shareSuccesses_img from './assets/shareSuccesses_img.png';
import becomeAnAmbassador_img from './assets/becomeAnAmbassador_img.png';

const carouselItems = [
  {
    title: 'Stay current',
    description: 'Be the first to know about new products and features on the Toast product hub.',
    image: stayCurrent_img,
  },
  {
    title: 'Find your place',
    description: 'Looking to connect with other bakery owners? Curious how other pizzerias configured their menu? Join one of our restaurant groups.',
    image: findYourPlace_img,
  },
  {
    title: 'Connect with Toast',
    description: 'Join AMA style events where you can pose questions to Toast leaders and product experts.',
    image: connectWithToast_img,
  },
  {
    title: 'Earn rewards',
    description: 'Get rewarded for being an active community member. The more you participate, the more rewards you can earn!',
    image: earnBadges_img,
  },
  {
    title: 'Share feedback',
    description: 'Your opinion matters. Participate in surveys and beta testing to shape the future of Toast products.',
    image: shareSuccesses_img,
  },
  {
    title: 'Learn and grow',
    description: 'Access exclusive webinars and tutorials to enhance your skills and grow your business.',
    image: becomeAnAmbassador_img,
  },
];

export default function Component() {
  const carouselRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = Math.ceil(carouselItems.length / 3);

  const scroll = (direction) => {
    if (carouselRef.current) {
      const { scrollLeft, clientWidth } = carouselRef.current;
      const newSlide = direction === 'left' ? currentSlide - 1 : currentSlide + 1;
      if (newSlide >= 0 && newSlide < totalSlides) {
        carouselRef.current.scrollTo({ left: clientWidth * newSlide, behavior: 'smooth' });
        setCurrentSlide(newSlide);
      }
    }
  };

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        <div
          ref={carouselRef}
          className="carousel"
        >
          {Array.from({ length: totalSlides }).map((_, slideIndex) => (
            <div key={slideIndex} className="slide">
              {carouselItems.slice(slideIndex * 3.5, slideIndex * 3 + 3.5).map((item, index) => (
                <div key={index} className="card">
                  {/* <div className="card-content">
                    <div className="card-image">
                      <img
                        src={item.image}
                        alt={item.title}
                      />
                    </div>
                    <h3 className="card-title">{item.title}</h3>
                    <p className="card-description">{item.description}</p>
                  </div> */}
                  <div className="carousel-card-image-container">
                    <div className="carousel-card-image">
                      <img src={item.image} alt={item.title} />
                    </div>
                  </div>
                  <div className="carousel-card-body">
                    <div className="carousel-card-body-title">
                      <p>{item.title}</p>

                    </div>
                    <div className="carousel-card-body-description">
                      <p>{item.description}</p>

                    </div>

                  </div>

                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="carousel-controls">
          <button
            className="button"
            onClick={() => scroll('left')}
            disabled={currentSlide === 0}
          >
            <ChevronLeftIcon />
            <span className="sr-only"></span>
          </button>
          <button
            className="button"
            onClick={() => scroll('right')}
            disabled={currentSlide === totalSlides - 1}
          >
            <ChevronRightIcon />
            <span className="sr-only"></span>
          </button>
        </div>
      </div>
    </div>
  );
}
