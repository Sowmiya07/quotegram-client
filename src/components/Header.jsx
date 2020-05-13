import React from 'react';
import '../styles/Header-Styles.css';

function Header({handleNewPostClick, handleHomeClick}) {
        return (
        <div className="header">
            <h1>Quotegram</h1>
            <ul className="links">
                <li onClick={handleHomeClick}>HOME</li>
                <li className="new-post" onClick={handleNewPostClick}>NEW POST</li>
            </ul>
        </div>
    )
}

export default Header;