import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Carousel.css";
import { Navigation, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import stayCurrent_img from "../../assets/carosal-img.png";

const carouselItems = [
  {
    title: "Stay current",
    description:
      "Be the first to know about new products and features on the Toast product hub.",
    image: stayCurrent_img,
  },
  {
    title: "Find your place",
    description:
      "Looking to connect with other bakery owners? Curious how other pizzerias configured their menu? Join one of our restaurant groups.",
    image: stayCurrent_img,
  },
  {
    title: "Earn badges",
    description:
      "Get recognized for your community contributions. The more you engage, the more you earn.",
    image: stayCurrent_img,
  },
  {
    title: "Connect with Toast",
    description:
      "Join AMA style events where you can pose questions to Toast leaders and product experts.",
    image: stayCurrent_img,
  },
  {
    title: "Share feedback",
    description:
      "Your opinion matters. Participate in surveys and beta testing to shape the future of Toast products.",
    image: stayCurrent_img,
  },
  {
    title: "Learn and grow",
    description:
      "Access exclusive webinars and tutorials to enhance your skills and grow your business.",
    image: stayCurrent_img,
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
    <div className="discover-carousel-container">
      <div className="discover-carousel">
        <Swiper
          ref={swiperRef}
          slidesPerView={3.25}
          spaceBetween={24}
          centeredSlides={false}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Navigation, Autoplay]}
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
          {carouselItems.map((item, index) => (
            <SwiperSlide key={index}>
              <a href="#" className="carosal-slide" role="button">
                <div className="carosal-card">
                  <div className="card-img">
                    <img src={item.image} alt={item.title} />
                  </div>
                  <div className="card-content">
                    <h4 className="card-title">{item.title}</h4>
                    <p className="card-description">{item.description}</p>
                  </div>
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="prev-next-buttons">
        <button className="prev-button" ref={prevRef}>
          <ChevronLeft />
        </button>
        <button className="next-button" ref={nextRef}>
          <ChevronRight />
        </button>
      </div>
    </div>
  );
}
