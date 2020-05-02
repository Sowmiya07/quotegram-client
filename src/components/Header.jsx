import React from 'react';
import '../styles/Header-Styles.css';
import ModalWindow from './ModalWindow';

class Header extends React.Component {

        constructor() {
            super();
            this.state = {
                showModal: false
            }
        }

        createNewPost = () => {
            this.setState((prevState) => ({showModal: !prevState.showModal}))
        }

        render() {
            return (
            <div className="header">
                <h1>Quotegram</h1>
                <ul className="links">
                    <li>HOME</li>
                    <li className="new-post" onClick={this.createNewPost}>NEW POST</li>
                </ul>
                {this.state.showModal ? <ModalWindow /> : null}
            </div>
        )
    }
}

export default Header;