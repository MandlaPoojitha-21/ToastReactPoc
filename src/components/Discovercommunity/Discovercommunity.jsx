import Component from "./Carousel";
import "./Discovercommunity.css";
import { customdata , loginButton } from "../../khoros-variables/khoros-variables.js";

const Discovercommunity = () => {

  return (
    <>
      {/* {!LITHIUM.CommunityJsonObject.User.isAnonymous ? ( */}
        <section className="discovercommunity-bg-color">
          <div className="discovercommunity">
            <div className="discovercommunity-header">
              <div className="discovercommunity-header-subtitle">
                <h3 className="discovercommunity-header-title">
                  {customdata.discovercommunityheading}
                </h3>
                <p className="discovercommunity-header-paragraph">
                {customdata.discovercommunitydescription}
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
      {/* ) : null} */}
    </>
  );
};

export default Discovercommunity;
