import React from 'react';
import Header from './Header';

class HomePage extends React.Component {
    constructor() {
        super();
        this.state = {
            toCreatePost: false
        }
    }

    render() {
        return (
            <div>
                <Header />
            </div>
        )
    }
}

export default HomePage;