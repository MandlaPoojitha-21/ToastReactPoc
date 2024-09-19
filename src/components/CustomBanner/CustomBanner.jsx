import './CustomBanner.css';
import { bannercustomdata, globalSearchOutput, globalUsername, globalVideoIcon, globalloginButton, globalstartButton } from '../../khoros-variables/khoros-variables.js';
import { useState } from 'react';

function CustomBanner() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    
    return (
        <>
            {LITHIUM.CommunityJsonObject.User.isAnonymous && (
                <div className='thumbnail'>
                    <div className='playbutton'>
                        <span onClick={openModal} ><img src={globalVideoIcon} alt='playbutton' /></span>
                    </div>
                    <img src={bannercustomdata.login_urls.thumbnail_url} alt="Thumbnail" className='image-thumbnail' />
                </div>
            )}
            <section className='banner-page'>
                <div className='hero-banner'>
                    {!LITHIUM.CommunityJsonObject.User.isAnonymous ? (
                        <>
                            <h1>Welcome back, {globalUsername}!</h1>
                            <p>Welcome to Toast Community. Find answers, ask questions, and share <br /> successes with your industry peers.</p>

                            <div className="search-login">
                                <div className="search-bar">
                                    <div id='searchContainer' dangerouslySetInnerHTML={{ __html: globalSearchOutput }}>
                                 
                                    </div>
                                </div>
                                <span>or</span>
                                <div id='conversation-button' dangerouslySetInnerHTML={{ __html: globalstartButton }}>
                                  
                                </div>
                            </div>

                            <p className="product-links">
                                <span><span className='product-text'>Looking for more on our product? </span><a href={bannercustomdata.logout_urls.producthub}>Product Hub</a> or <a href={bannercustomdata.logout_urls.testkitchen}>Test Kitchen</a></span>
                            </p>
                        </>
                    ) : (
                        <>
                            <h1>Connect with restaurants like yours</h1>
                            <p>Learn and network from your industry peers through this exclusive <br /> community for Toast customers.</p>

                            <div className="search-login">
                                <div className="search-bar">
                                    <div id='searchContainer' dangerouslySetInnerHTML={{ __html: globalSearchOutput }}>
                                  
                                    </div>
                                </div>
                                <span>or</span>
                                <button className="login-button" id='login-button' dangerouslySetInnerHTML={{ __html: globalloginButton }}>
                              
                                </button>
                            </div>
                            <p className="insight-link">Not a Toast customer? <a href={bannercustomdata.login_urls.explore_industry}>Explore industry insights →</a></p>
                        </>
                    )}
                </div>
            </section>
            {isModalOpen && (
                <div className='modal'>
                    <div className='modal-content'>
                        <span className='close-button' onClick={closeModal}>&times;</span>
                        <iframe
                            src={`${bannercustomdata.login_urls.youtube_url}?autoplay=1`}
                            title="Video Modal"
                            width="100%"
                            height="100%"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            )}
        </>
    );
}

export default CustomBanner;