import Component from "./Carousel";
import "./Discovercommunity.css";
import { loginButton } from "../../khoros-variables/khoros-variables.js";

const Discovercommunity = () => {

  return (
    <>
      {!LITHIUM.CommunityJsonObject.User.isAnonymous ? (
        <section className="discovercommunity-bg-color">
          <div className="discovercommunity">
            <div className="discovercommunity-header">
              <div className="discovercommunity-header-subtitle">
                <h3 className="discovercommunity-header-title">
                  Discover what is inside the Toast community
                </h3>
                <p className="discovercommunity-header-paragraph">
                  Toast Community was created to give like-minded restaurant
                  people a place to connect and collaborate. There is plenty to
                  see and do!
                </p>
              </div>
              <div
                className="discovercommunity-button"
                dangerouslySetInnerHTML={{ __html: loginButton }}
              />
            </div>

            <Component />
          </div>
        </section>
      ) : null}
    </>
  );
};

export default Discovercommunity;
