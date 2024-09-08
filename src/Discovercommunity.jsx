import Component from './Carousel';
import './Discovercommunity.css';

const Discovercommunity = () => {
  return (
    <div className="discovercommunity toast-container">
        <div className="discovercommunity-header-section">
            <div className="discovercommunity-header-title">
                 <p>Discover what is inside the Toast community</p>
            </div>
            <div className="discovercommunity-header-paragraph">
            <p>Toast Community was created to give like-minded restaurant people a place to connect and collaborate. There's plenty to see and do!</p>

            </div>
            

        </div>
        <button className='discovercommunity-login-button'>Login via Toast account</button>
        {/* <div className="carousel-container"> */}
          <Component/>
        {/* </div> */}
    </div>
  )
}

export default Discovercommunity