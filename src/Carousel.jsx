
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import './Carousel.css'; // Make sure to import your custom styles

// Import required modules
import { Navigation , Autoplay } from 'swiper/modules';

// Image imports
// import stayCurrent_img from './assets/stayCurrent_img.png';
// import findYourPlace_img from './assets/findYourPlace_img.png';
// import connectWithToast_img from './assets/connectWithToast_img.png';
// import earnBadges_img from './assets/earnBadges_img.png';
// import shareSuccesses_img from './assets/shareSuccesses_img.png';
// import becomeAnAmbassador_img from './assets/becomeAnAmbassador_img.png';

// Carousel items array
const carouselItems = [
  {
    title: 'Stay current',
    description: 'Be the first to know about new products and features on the Toast product hub.',
    // image: stayCurrent_img,
  },
  {
    title: 'Find your place',
    description: 'Looking to connect with other bakery owners? Curious how other pizzerias configured their menu? Join one of our restaurant groups.',
    // image: findYourPlace_img,
  },
  {
    title: 'Connect with Toast',
    description: 'Join AMA style events where you can pose questions to Toast leaders and product experts.',
    // image: connectWithToast_img,
  },
  {
    title: 'Earn rewards',
    description: 'Get rewarded for being an active community member. The more you participate, the more rewards you can earn!',
    // image: earnBadges_img,
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
  return (
    <div className="carousel-container">
      <Swiper
        slidesPerView={3.25}
        // spaceBetween={30}
        navigation={true}
        autoplay={{
          delay: 1000, // 3 seconds delay
          disableOnInteraction: false,
          pauseOnMouseEnter : true // Autoplay won't stop on user interaction
        }}
        modules={[Navigation , Autoplay]}
        breakpoints={{
            
            320: {
              slidesPerView: 1.25,
            },
            // When window width is >= 768px
            768: {
              slidesPerView: 2.25,
            },
           
            1024: {
              slidesPerView: 3.25,
            },
          }}
       
         
        className="mySwiper navigation-icons"
      >
        {carouselItems.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="card">
              <img src={item.image} alt={item.title} />
              <div className="card-title">{item.title}</div>
              <div className="card-description">{item.description}</div>
         

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
