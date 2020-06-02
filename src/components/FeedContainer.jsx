import React from 'react';

function FeedContainer({profileName, profileImage, quoteUploaded, likesCount, commentsCount}) {
    return(
        <article className="post">
            <div style={{display: 'flex'}}>
                <img src={profileImage} alt="profile image" height="50px" width="50px" />
                <h4>{profileName}</h4>
            </div>
            <div>
            <img src={quoteUploaded} alt="profile image" width="450px" height="500px"/>
            </div>
            <div>
                <span><i class="fas fa-heart" style={{color: 'red'}}></i></span>
                <span>{likesCount} likes</span>
            </div>
            <div>
                <span>{commentsCount} comments</span>
            </div>
            <hr />
        </article>
    )
}

export default FeedContainer;