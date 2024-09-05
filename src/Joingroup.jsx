import './Joingroup.css';

const Joingroup = () => {
  return (
    <div className="joingroup toast-container">
      <div className="joingroup-inner-section">
        <div className="joingroup-header-section">
          <div className="joingroup-header-paragraph">
           <p> EXPLORE YOUR CONCEPT</p>

          </div>
          <div className="joingroup-header-paragraph-title">
               <p>Join a restaurant group</p>
          </div>
        </div>
        <div className="joingroup-boards-section">
          <button className='board-button'>Bar-lightclub</button>
          <button className='board-button'>Pizza</button>
          <button className='board-button'>Casual Dining</button>
          <button className='board-button'>Fine Dining</button>
          <button className='board-button'>Enterprise</button>
          <button className='board-button'>Hotel Restaurant</button>
          <button className='board-button'>Cafe & Bakery</button>
          <button className='board-button'>Fast casual</button>

        </div>

      </div>

    </div>
   
  )
}

export default Joingroup