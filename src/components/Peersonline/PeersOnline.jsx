import './PeersOnline.css'
import PeersOnlineCarouselBottom from './PeersOnlineCarouselBottom';
import PeersOnlineCarouselTop from './PeersOnlineCarouselTop';
import { customdata } from "../../khoros-variables/khoros-variables.js";

const PeersOnline = () => {
  return (
    <>
      <section className="peersonline">
        <div className="peersonline-header" > 
          <div className="peersonline-header-bottom">
            <p>{customdata.peersonlineheading}</p>
          </div>
        </div>
        <div className='peersonline-carousels-container'>
        <PeersOnlineCarouselTop />
        <PeersOnlineCarouselBottom />
        </div>
        
      </section>
    </>
  )
}

export default PeersOnline;