import './PeersOnline.css'
import PeersOnlineCarouselBottom from './PeersOnlineCarouselBottom';
import PeersOnlineCarouselTop from './PeersOnlineCarouselTop';
// import PeersOnlineCarouselBottom from './PeersOnlineCarouselBottom';
// import PeersOnlineCarouselTop2 from './PeersOnlineCarouselTop2';
import {totalMembers} from "../../khoros-variables/khoros-variables.js";






const PeersOnline = () => {
  return (
   <>
   <div className="peersonline">
    <div className="peersonline-header" >
        <div className="peersonline-header-bottom">
        <p>Your peers online- what are you waiting for?</p>
        </div>

      
    </div>
 
     
      <PeersOnlineCarouselTop/>
      <PeersOnlineCarouselBottom/>
      

    

   </div>
   </>
  )
}

export default PeersOnline;