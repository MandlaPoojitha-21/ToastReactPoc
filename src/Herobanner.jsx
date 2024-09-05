import './Herobanner.css';
import hero_banner_img from './assets/hero_banner_img2.png';
const Herobanner = () => {
    return (
        <>
            <div className="toast-container">
                <div className="loggedin-herobanner">
                    <div className='herobanner-left'>
                        <h1 className='connect-heading'>Connect with restaurants like yours</h1>
                        <p className='learn-sub-heading'>Learn from your industry peers through this exclusive community for Toast customers</p>
                        <div className='navbar-right'>
                            <div className="search-container">
                                <input type="text" className="hero-search-input" placeholder="Search..." />

                            </div>
                            <button className='hero-login-button'>Login via Toast account</button>
                        </div>
                        <span className='conclusion'><p className='looking-paragraph'>Looking for the rules?</p><p className='guidelines-paragraph'>Community guidelines</p></span>
                    </div>
                    <div className='herobanner-right'>
                        <img src={hero_banner_img} alt="Toast Icon" className="toast-icon" />
                    </div>
                </div>
                <div className="loggedout-herobanner">
                    <div className="loggedout-herobanner-inner">
                        
                    </div>

                </div>

            </div>


        </>

    )
}

export default Herobanner