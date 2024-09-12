import './PeersOnline.css'
import PeersOnlineCarouselTop from './PeersOnlineCarouselTop';
// import PeersOnlineCarouselBottom from './PeersOnlineCarouselBottom';
// import PeersOnlineCarouselTop2 from './PeersOnlineCarouselTop2';



const PeersOnline = () => {
  return (
   <>
   <div className="peersonline">
    <div className="peersonline-header">
        <div className="peersonline-header-top">
            <div className="peersonline-header-top-capsule">
                 members
            </div>
            <div className="peersonline-header-top-capsule">
                 members
            </div>
            <div className="peersonline-header-top-capsule">
                 members
            </div>

        </div>
        <div className="peersonline-header-bottom">
        <p>Your peers online- what are you waiting for?</p>
        </div>

      
    </div>
    <div className="peersonline-carousels-container">
      {/* <PeersOnlineCarouselBottom/> */}
      {/* <PeersOnlineCarouselTop2/> */}
      <PeersOnlineCarouselTop/>

    </div>

   </div>
   </>
  )
}

export default PeersOnline;