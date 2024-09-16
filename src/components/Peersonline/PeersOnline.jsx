import './PeersOnline.css'
import PeersOnlineCarouselBottom from './PeersOnlineCarouselBottom';
import PeersOnlineCarouselTop from './PeersOnlineCarouselTop';
// import { totalMembers } from "../../khoros-variables/khoros-variables.js";

const PeersOnline = () => {
  return (
    <>
      <section className="peersonline">
        <div className="peersonline-header" >
          <div className="peersonline-header-top" >
          </div>
          <div className="peersonline-header-bottom">
            <p>Your peers online- what are you waiting for?</p>
          </div>
        </div>
        <PeersOnlineCarouselTop />
        <PeersOnlineCarouselBottom />
      </section>
    </>
  )
}

export default PeersOnline;