import React from 'react';
import '../styles/Header-Styles.css';

const createNewPost = (event) => {
    console.log(event.target);
}

function Header() {
    return (
        <div className="header">
            <h1>Quotegram</h1>
            <ul className="links">
                <li>HOME</li>
                <li className="new-post" onClick={createNewPost}>NEW POST</li>
            </ul>
        </div>
    )
}

export default Header;