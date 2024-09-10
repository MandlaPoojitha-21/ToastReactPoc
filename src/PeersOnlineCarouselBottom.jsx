import { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import './PeersOnlineCarouselBottom.css'; 
import { Navigation } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Images
// import card1_img from './assets/card1_img.jpg';
// import card2_img from './assets/card2_img.png';
// import card3_img from './assets/card3_img.png';
import {stayCurrent_img} from './khoros-variables/khoros-variables.js';
import {findYourPlace_img} from './khoros-variables/khoros-variables.js';
import {earnBadges_img} from './khoros-variables/khoros-variables.js'


const carouselItems = [
  {
    title: 'Read success stories and share your own',
    description: 'Share recent win, cheer on industry peers, and join us in fostering community.',
    image: stayCurrent_img,
  },
  {
    title: 'Share your questions, insights, and best pratices',
    description: 'No one knows your concept quite like you. Sort by restaurant type to connect with peers who get it.',
    image: findYourPlace_img,
  },
  {
    title: 'Mentor and learn from other Toast restaurants',
    description: 'Share tips and tricks with restaurants in the Toast community.',
    image: earnBadges_img,
  },

];

export default function PeersOnlineCarouselBottom() {
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
        slidesPerView={3}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        // autoplay={{
        //   delay: 1000, // 3 seconds delay
        //   disableOnInteraction: false,
        //   pauseOnMouseEnter : true // Autoplay won't stop on user interaction
        // }}
        modules={[Navigation]}
        breakpoints={{
          320: {
            slidesPerView: 1.25,
          },
          768: {
            slidesPerView: 2.25,
          },
          1024: {
            slidesPerView: 3,
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
