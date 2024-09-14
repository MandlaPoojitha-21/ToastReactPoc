import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./PeersOnlineCarouselTop.css";
import "swiper/css";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
// import carosal_img from '../../assets/carosal-img.png';
// import TestimonialLogo01 from '../../assets/TestimonialLogo01.png';
import {customdata} from "../../khoros-variables/khoros-variables.js";




// const carouselItems = [
//   {
//       testimonial: '“For me, it’s about the relationships and the ability to learn from one another. I find real value in learning from different types of businesses.”',
//       testimonial_author_name: 'Shaz Khan',
//       testimonial_author_supporting_text: 'Owner, Tono Pizzeria & Cheesesteaks',
//       testimonial_author_img : carosal_img,
//       testimonial_author_company_logo : TestimonialLogo01

//   },
//   {
//       testimonial: '“For me, it’s about the relationships and the ability to learn from one another. I find real value in learning from different types of businesses.”',
//       testimonial_author_name: 'Shaz Khan',
//       testimonial_author_supporting_text: 'Owner, Tono Pizzeria & Cheesesteaks'
//   }
// ];

export default function PeersOnlineCarouselTop() {
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
    <div className="peersonline-top-carousel-container">

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
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 1,
            },
            1024: {
              slidesPerView: 1,
            },
          }}
          className="peersonline-top-swiper"
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
          {customdata.peersonlineTopCarouselItems.map((item, index) => (
            <SwiperSlide
              className="peersonline-top-swiperslide" key={index}>
              <div className="PeersOnlineCarouselTop-card">

                <div className="PeersOnlineCarouselTop-left">
                  <div className="PeersOnlineCarouselTop-left-testimonial">
                    <p>{item.testimonial}</p>
                  </div>
                  <div className="PeersOnlineCarouselTop-left-testimonial-details">
                    <div className="PeersOnlineCarouselTop-left-testimonial-details-left">
                      <div className="PeersOnlineCarouselTop-left-testimonial-details-logo-container">
                      <img src={item.testimonial_author_company_logo} alt="Testimonial logo" />
                      </div>
                      <div className="PeersOnlineCarouselTop-left-testimonial-details-name-container">
                        <div className="PeersOnlineCarouselTop-left-testimonial-details-name-text">
                          <p>{item.testimonial_author_name}</p>
                        </div>
                        <div className="PeersOnlineCarouselTop-left-testimonial-details-name-supportingtext">
                          <p>{item.testimonial_author_supporting_text}</p>
                        </div>
                      </div>
                    </div>
                   
                  </div>
                </div>
                <div className="PeersOnlineCarouselTop-right">
                  <img src={item.testimonial_author_img} alt="Testimonial" />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
  
      <div className="buttons-container">
        <button className="peersonline-prev-button" ref={prevRef}>
          <ChevronLeft />
        </button>
        <button className="peersonline-next-button" ref={nextRef}>
          <ChevronRight />
        </button>
      </div>
    </div>
  );
}
