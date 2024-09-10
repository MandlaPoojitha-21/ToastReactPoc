import Component from "./Carousel";
import "./Discovercommunity.css";

const Discovercommunity = () => {
  return (
    <section className="discovercommunity-bg-color">
      <div className="discovercommunity">
        <div className="discovercommunity-header">
          <div className="discovercommunity-header-subtitle">
            <h3 className="discovercommunity-header-title">
              Discover what is inside the Toast community
            </h3>
            <p className="discovercommunity-header-paragraph">
              Toast Community was created to give like-minded restaurant people
              a place to connect and collaborate. There is plenty to see and do!
            </p>
          </div>
          <div className="discovercommunity-button">
            <a href="" className="discovercommunity-login-button" role="button">
              Login via Toast account
            </a>
          </div>
        </div>

        <Component />
      </div>
    </section>
  );
};

export default Discovercommunity;
