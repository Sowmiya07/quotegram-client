import React from 'react';
import FEED_DATA from '../data';
import '../styles/Feeds-Styles.css';

function Feeds() {
    return (
        <div className="feedsContainer">
            {
                FEED_DATA.map( feed => (
                    <div className="feedBox">
                        <h3 className="userName">{feed.userName}</h3>
                        <img src={feed.postLink} className="quote"/>
                        <div className="quoteInfo">
                            <span>{feed.likes} likes</span>
                        </div>
                    </div>
                ))
            }   
        </div>
    )
}

export default Feeds;