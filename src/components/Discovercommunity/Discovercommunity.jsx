
import "./Discovercommunity.css";
import { discovercustomdata , loginButton } from "../../khoros-variables/khoros-variables.js";
import DiscoverCarousel from "./DiscoverCarousel.jsx";

const Discovercommunity = () => {
  return (
    <>
        <section className="discovercommunity-bg-color">
          <div className="discovercommunity">
            <div className="discovercommunity-header">
              <div className="discovercommunity-header-subtitle">
                <h3 className="discovercommunity-header-title">
                  {discovercustomdata.discovercommunityheading}
                </h3>
                <p className="discovercommunity-header-paragraph">
                {discovercustomdata.discovercommunitydescription}
                </p>
              </div>
              <div
                className="discovercommunity-button"
                dangerouslySetInnerHTML={{ __html: loginButton }}
              />
            </div>
            <DiscoverCarousel/>
           
          </div>
        </section>
    </>
  );
};

export default Discovercommunity;
