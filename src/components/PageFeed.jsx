import React from 'react';
import FeedContainer from './FeedContainer';

class PageFeed extends React.Component {
    constructor() {
        super();
        this.state = {
            pageFeeds: []
        }
    }

    componentDidMount() {
        fetch('http://localhost:8080/api/v1/user-profile')
            .then(data => data.json(''))
            .then(feeds => this.setState({pageFeeds: feeds}));
    }

    render() {
        return (
            <div>
                {
                    this.state.pageFeeds.map(
                        feed => <FeedContainer key={feed.userId} {...feed} />
                    )
                }
            </div>
        )
    }
}

export default PageFeed;