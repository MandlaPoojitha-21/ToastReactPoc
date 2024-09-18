import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Carousel.css";
import "swiper/css";
import { Navigation} from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {customdata} from "../../khoros-variables/khoros-variables.js";


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

        swiperInstance.navigation.init();
        swiperInstance.navigation.update();
        updateButtonState();
      }
    };

    if (swiperRef.current) {
      handleNavigationUpdate();
    }
  }, [prevRef, nextRef]);

  return (
    <div className="discovercommunity-carousel-container">
      <div className="discovercommunity-carousel">
        <Swiper
          ref={swiperRef}
          slidesPerView={3.25}
          spaceBetween={24}
          centeredSlides={false}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          
          modules={[Navigation]}
          breakpoints={{
            320: {
              slidesPerView: 1.15,
            },
            768: {
              slidesPerView: 2.25,
            },
            1024: {
              slidesPerView: 3.25,
            },
          }}
          className="discovercommunity-swiper"
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            if (swiper.navigation) {
              swiper.navigation.init();
              swiper.navigation.update();
            }
          }}
          onSlideChange={() => {
            updateButtonState();
          }}
        >
          {customdata.discovercommunityCarouselItems.map((item, index) => (
            <SwiperSlide className="discovercommunity-swiperslide" key={index}>
              <a href="#" className="discovercommunity-carousel-slide" role="button">
                <div className="discovercommunity-carousel-card">
                  <div className="discovercommunity-card-img">
                    <img src={item.image} alt={item.title} />
                  </div>
                  <div className="discovercommunity-card-content">
                    <h4 className="discovercommunity-card-title">{item.title}</h4>
                    <p className="discovercommunity-card-description">{item.description}</p>
                  </div>
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="discovercommunity-prev-next-buttons">
        <button className="discovercommunity-prev-button" ref={prevRef}>
          <ChevronLeft />
        </button>
        <button className="discovercommunity-next-button" ref={nextRef}>
          <ChevronRight />
        </button>
      </div>
    </div>
  );
}
