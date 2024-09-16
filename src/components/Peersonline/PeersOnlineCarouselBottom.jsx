import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./PeersOnlineCarouselBottom.css";
import "swiper/css";
import { Navigation} from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
// import carosal_img from '../../assets/carosal-img.png';
import {customdata} from "../../khoros-variables/khoros-variables.js";




// const carouselItems = [
//   {
//     title: "Stay current",
//     description:
//       "Be the first to know about new products and features on the Toast product hub.",
//     image: carosal_img,
//   },
//   {
//     title: "Find your place",
//     description:
//       "Looking to connect with other bakery owners? Curious how other pizzerias configured their menu? Join one of our restaurant groups.",
//       image: carosal_img,
//   },
//   {
//     title: "Earn badges",
//     description:
//       "Get recognized for your community contributions. The more you engage, the more you earn.",
//       image: carosal_img,       
//   }
// ];

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
    <section className="peersonline-bottom-carousel-container">
      <div className="peersonline-carousel">
        <Swiper
          ref={swiperRef}
          slidesPerView={3}
          spaceBetween={24}
          centeredSlides={false}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          
          modules={[Navigation]}
          breakpoints={{
            320: {
              slidesPerView: 1.5,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="peersonline-swiper"
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
          {customdata.peersonlineBottomCarouselItems.map((item, index) => (
            <SwiperSlide className="peersonline-swiperslide" key={index}>
              <a href="#" className="peersonline-carousel-slide" role="button">
                <div className="peersonline-carousel-card">
                  <div className="peersonline-card-img">
                    <img src={item.image} alt={item.title} />
                  </div>
                  <div className="peersonline-card-content">
                    <h4 className="peersonline-card-title">{item.title}</h4>
                    <p className="peersonline-card-description">{item.description}</p>
                  </div>
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="peersonline-prev-next-buttons">
        <button className="peersonline-prev-button" ref={prevRef}>
          <ChevronLeft />
        </button>
        <button className="peersonline-next-button" ref={nextRef}>
          <ChevronRight />
        </button>
      </div>
    </section>
  );
}
