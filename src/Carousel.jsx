import { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import './Carousel.css'; 
import { Navigation ,Autoplay} from 'swiper/modules';

// Importing Lucide Icons
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Images
// import stayCurrent_img from './assets/stayCurrent_img.png';
// import findYourPlace_img from './assets/findYourPlace_img.png';
// import connectWithToast_img from './assets/connectWithToast_img.png';
// import earnBadges_img from './assets/earnBadges_img.png';
// import shareSuccesses_img from './assets/shareSuccesses_img.png';
// import becomeAnAmbassador_img from './assets/becomeAnAmbassador_img.png';

import {stayCurrent_img} from './khoros-variables/khoros-variables.js';
import {findYourPlace_img} from './khoros-variables/khoros-variables.js';
import {earnBadges_img} from './khoros-variables/khoros-variables.js'

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
    title: 'Earn rewards',
    description: 'Get rewarded for being an active community member. The more you participate, the more rewards you can earn!',
    image: earnBadges_img,
  },
  {
    title: 'Connect with Toast',
    description: 'Join AMA style events where you can pose questions to Toast leaders and product experts.',
    // image: connectWithToast_img,
  },
  
  {
    title: 'Share feedback',
    description: 'Your opinion matters. Participate in surveys and beta testing to shape the future of Toast products.',
    // image: shareSuccesses_img,
  },
  {
    title: 'Learn and grow',
    description: 'Access exclusive webinars and tutorials to enhance your skills and grow your business.',
    // image: becomeAnAmbassador_img,
  },
];

export default function Carousel() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  const updateButtonState = () => {
    const swiperInstance = swiperRef.current;
    if (swiperInstance) {
      const isBeginning = swiperInstance.isBeginning;
      const isEnd = swiperInstance.isEnd;
      if (prevRef.current && nextRef.current) {
        prevRef.current.disabled = isBeginning;
        nextRef.current.disabled = isEnd;
      }
    }
  };

  useEffect(() => {
    const handleNavigationUpdate = () => {
      const swiperInstance = swiperRef.current;
      if (swiperInstance && swiperInstance.navigation) {
        swiperInstance.params.navigation.prevEl = prevRef.current;
        swiperInstance.params.navigation.nextEl = nextRef.current;

        // Reinitialize navigation after updating the DOM elements
        swiperInstance.navigation.init();
        swiperInstance.navigation.update();
        updateButtonState(); // Update button states on mount
      }
    };

    if (swiperRef.current) {
      handleNavigationUpdate();
    }
  }, [prevRef, nextRef]);

  return (
    <div className="carousel-container">
      <Swiper
        ref={swiperRef}
        slidesPerView={3.25}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        autoplay={{
          delay: 1000, // 3 seconds delay
          disableOnInteraction: false,
          pauseOnMouseEnter : true // Autoplay won't stop on user interaction
        }}
        modules={[Navigation,Autoplay]}
        breakpoints={{
          320: {
            slidesPerView: 1.25,
          },
          768: {
            slidesPerView: 2.25,
          },
          1024: {
            slidesPerView: 3.25,
            
          },
        }}
        className="mySwiper"
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          if (swiper.navigation) {
            swiper.navigation.init();
            swiper.navigation.update();
          }
        }}
        onSlideChange={() => {
          updateButtonState(); // Update button states on slide change
        }}
      >
        {carouselItems.map((item, index) => (
          <SwiperSlide key={index}>
            <a href="#"className="card">

              <img src={item.image} alt={item.title} />
              <div className="card-title">{item.title}</div>
              <div className="card-description">{item.description}</div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="prev-next-buttons">
        <div className="prev-button" ref={prevRef}>
          <button className="prev-button">
            <ChevronLeft />
          </button>
        </div>
        <div className="next-button" ref={nextRef}>
          <button className="next-button">
            <ChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
}