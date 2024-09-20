import './CustomBanner.css';
import { bannercustomdata, globalSearchOutput, globalUsername, globalloginButton, globalstartButton } from '../../khoros-variables/khoros-variables.js';
import { useState } from 'react';

function CustomBanner(props) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => {
        setIsModalOpen(true);
    };
    const closeModal = () => {
        setIsModalOpen(false);
    }; 
    return (
        <>
            {props.isAnonymous && (
                <div className='thumbnail'>
                    <div className='playbutton'>
                        <span onClick={openModal} ><img src={bannercustomdata.logout_urls.icon} alt='playbutton' /></span>
                    </div>
                    <img src={bannercustomdata.logout_urls.thumbnail_url} alt="Thumbnail" className='image-thumbnail' />
                </div>
            )}
            <section className='banner-page'>
                <div className='hero-banner'>
                    {!props.isAnonymous ? (
                        <>
                            <h1>{bannercustomdata.login_text.heading}, {globalUsername}!</h1>
                            <p>{bannercustomdata.login_text.supporting_text}</p>

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
                                <span><span className='product-text'>{bannercustomdata.login_text.product_text}</span><a href={bannercustomdata.login_urls.product_one_url}>{bannercustomdata.login_text.product_one}</a> or <a href={bannercustomdata.login_urls.product_two_url}>{bannercustomdata.login_text.product_two}</a></span>
                            </p>
                        </>
                    ) : (
                        <>
                            <h1>{bannercustomdata.logout_text.heading}</h1>
                            <p>{bannercustomdata.logout_text.supporting_text}</p>

                            <div className="search-login">
                                <div className="search-bar">
                                    <div id='searchContainer' dangerouslySetInnerHTML={{ __html: globalSearchOutput }}>
                                  
                                    </div>
                                </div>
                                <span>or</span>
                                <button className="login-button" id='login-button' dangerouslySetInnerHTML={{ __html: globalloginButton }}>
                              
                                </button>
                            </div>
                            <p className="insight-link">{bannercustomdata.logout_text.conclusion_text}<a href={bannercustomdata.logout_urls.explore_industry}>{bannercustomdata.logout_text.explore_text}</a></p>
                        </>
                    )}
                </div>
            </section>
            {isModalOpen && (
                <div className='modal'>
                    <div className='modal-content'>
                        <span className='close-button' onClick={closeModal}>&times;</span>
                        <iframe
                            src={`${bannercustomdata.logout_urls.youtube_url}?autoplay=1`}
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