import './PeersOnlineCarouselTop.css';
import testimonial_img from "../../assets/carosal-img.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules'; // Import Navigation from swiper/modules
import 'swiper/css';
import 'swiper/css/navigation';
// import {stayCurrent_img} from './khoros-variables/khoros-variables.js';

const PeersOnlineCarouselTop = () => {
    const carouselItems = [
        {
            testimonial: '“For me, it’s about the relationships and the ability to learn from one another. I find real value in learning from different types of businesses.”',
            testimonial_author_name: 'Shaz Khan',
            testimonial_author_supporting_text: 'Owner, Tono Pizzeria & Cheesesteaks',
            
        },
        {
            testimonial: '“For me, it’s about the relationships and the ability to learn from one another. I find real value in learning from different types of businesses.”',
            testimonial_author_name: 'Shaz Khan',
            testimonial_author_supporting_text: 'Owner, Tono Pizzeria & Cheesesteaks'
        }
    ];

    return (
        <div className="PeersOnlineCarouselTop">
            <Swiper
                slidesPerView={1}
                navigation={true}
                modules={[Navigation]} // Correct module import
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
            >
                {carouselItems.map((item, index) => (
                    <SwiperSlide  key={index}>
                        <div className="PeersOnlineCarouselTop-card">

                        <div className="PeersOnlineCarouselTop-left">
                            <div className="PeersOnlineCarouselTop-left-testimonial">
                                <p>{item.testimonial}</p>
                            </div>
                            <div className="PeersOnlineCarouselTop-left-testimonial-details">
                                <div className="PeersOnlineCarouselTop-left-testimonial-details-left">
                                    <div className="PeersOnlineCarouselTop-left-testimonial-details-logo-container"></div>
                                    <div className="PeersOnlineCarouselTop-left-testimonial-details-name-container">
                                        <div className="PeersOnlineCarouselTop-left-testimonial-details-name-text">
                                            <p>{item.testimonial_author_name}</p>
                                        </div>
                                        <div className="PeersOnlineCarouselTop-left-testimonial-details-name-supportingtext">
                                            <p>{item.testimonial_author_supporting_text}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="PeersOnlineCarouselTop-left-testimonial-details-right">
                                    carousel-controls {/* You can replace this with actual control components */}
                                </div>
                            </div>
                        </div>
                        <div className="PeersOnlineCarouselTop-right">
                            <img src={testimonial_img} alt="Testimonial" />
                        </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default PeersOnlineCarouselTop;