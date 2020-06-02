import React from 'react';
import {Link} from 'react-router-dom';

import '../styles/Header-Styles.css';

class Header extends React.Component {
        render() {
            return (
                <div className="header">
                    <div className='logo'>
                        <Link to='/'>Quotegram</Link>
                    </div>
                    <div className='search-wrapper'>
                        <input type="text" 
                            placeholder="Search people, quotes..."
                            className="search" />
                        <span className="search-fai">
                            <i className="fas fa-search"></i>
                        </span>
                    </div>
                    <nav className="navbar">
                        <Link to='/'>Profile</Link>
                        <Link to='/'>New Post</Link>
                        <Link to='/'>Settings</Link>
                    </nav>
                </div>
            )
        }
}

export default Header;