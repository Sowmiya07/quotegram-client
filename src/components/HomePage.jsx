import React from 'react';
import FeedContainer from './FeedContainer';

class HomePage extends React.Component {

    render() {

        const posts = [
            {
                id: 1,
                profileImage: './profile-image.png',
                profileName: 'Sarah',
                quoteUploaded: './quote.png',
                likesCount: 10,
                commentsCount: 3
            },
            {
                id: 2,
                profileImage: './profile-image.png',
                profileName: 'Preethi',
                quoteUploaded: './quote.png',
                likesCount: 100,
                commentsCount: 7
            }, 
            {
                id: 3,
                profileImage: './profile-image.png',
                profileName: 'Sam Julien',
                quoteUploaded: './quote.png',
                likesCount: 50,
                commentsCount: 5
            }
        ]

        return (
            <section className='home' style={{width: '800px', margin: '0 auto'}}>
                {
                    posts.map(post => <FeedContainer key={post.id} {...post} />)
                }
            </section>
        )
    }
}

export default HomePage;