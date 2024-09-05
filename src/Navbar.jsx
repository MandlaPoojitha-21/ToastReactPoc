
import ToastIcon from './assets/toast.png';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css'


const Navbar = () => {
    return (
        <nav className="navbar toast-container">
            <div className='navbar-left'>
                <div className="custom-community-header-logo"><img src={ToastIcon} alt="Toast Icon" className="toast-icon" /></div>
                <ul className="custom-community-header-navigation-v3">
                    <li>Discussions</li>
                    <li>Group Hubs</li>
                    <li>Toast Community Hub</li>
                    <li>Advocacy</li>
                    <li>product</li>
                </ul>
            </div>
            <div className='navbar-right'>
                <div className="search-container">
                    <input type="text" className="search-input" placeholder="Search..." />
                   
                </div>
                <button className='login-button'>Login via Toast account</button>
            </div>
        </nav>
    );
};

export default Navbar;
