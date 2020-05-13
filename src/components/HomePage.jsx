import React from 'react';
import Header from './Header';
import ModalWindow from './ModalWindow';
import Feeds from './Feeds';

class HomePage extends React.Component {
    constructor() {
        super();
        this.state = {
            showModal: false,
            showFeeds: true
        }
    }

    createNewPost = () => {
        this.setState((prevState) => ({showModal: !prevState.showModal}))
    }

    showHomeFeeds = () => {
        this.setState((prevState) => ({showFeeds: !prevState.showFeeds}))
    }

    render() {
        return (
            <div>
                <Header handleNewPostClick={this.createNewPost} handleHomeClick={this.showHomeFeeds}/>
                {this.state.showModal ? <ModalWindow /> : null}
                {this.state.showFeeds ? <Feeds /> : null}
            </div>
        )
    }
}

export default HomePage;