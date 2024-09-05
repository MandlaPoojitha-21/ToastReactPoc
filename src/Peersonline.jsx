import './Peersonline.css'
import card1_img from './assets/card1_img.jpg';
import card2_img from './assets/card2_img.png';
import card3_img from './assets/card3_img.png';

const Peersonline = () => {
  return (
   <>
   <div className="peersonline toast-container">
    <div className="peersonline-heading">
      <p>Your peers online- what are you waiting for?</p>
    </div>
    <div className="peersonline-card-tile">
        <div className="peersonline-card">
            <div className="peersonline-card-header">
                 <img src={card1_img} alt="Card 1" className='card_img'></img>
            </div>
            <div className="peersonline-card-body">
                <div className="peersonline-card-body-title">
                    <h4>Read success stories and share your own</h4>

                </div>
                <div className="peersonline-card-body-text">
                     <p>Share recent win, cheer on industry peers, and join us in fostering community.</p>
                </div>
            </div>
        </div>
        <div className="peersonline-card">
            <div className="peersonline-card-header">
                 <img src={card2_img} alt="Card 2" className='card_img'></img>
            </div>
            <div className="peersonline-card-body">
                <div className="peersonline-card-body-title">
                    <h4>Share your questions, insights, and best pratices</h4>

                </div>
                <div className="peersonline-card-body-text">
                     <p>No one knows your concept quite like you. Sort by restaurant type to connect with peers who get it.</p>
                </div>
            </div>
        </div>
        <div className="peersonline-card">
            <div className="peersonline-card-header">
                 <img src={card3_img} alt="Card 3" className='card_img'></img>
            </div>
            <div className="peersonline-card-body">
                <div className="peersonline-card-body-title">
                    <h4>Mentor and learn from other Toast restaurants</h4>

                </div>
                <div className="peersonline-card-body-text">
                     <p>Share tips and tricks with restaurants in the Toast community.</p>
                </div>
            </div>
        </div>

    </div>

   </div>
   </>
  )
}

export default Peersonline