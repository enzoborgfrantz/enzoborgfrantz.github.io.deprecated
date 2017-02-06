import React, {Component} from 'react';
import styles from './MenuBar.scss';

class MenuBar extends Component {
    render() {
        return (
            <div className="menu-bar">
                <img className="menu-icon" src="../../ui/assets/icons/google.svg"/>
                <img className="menu-icon" src="../../ui/assets/icons/facebook.svg"/>
                <img className="menu-icon" src="../../ui/assets/icons/github.svg"/>
                <img className="menu-icon" src="../../ui/assets/icons/linkedin.svg"/>
                <img className="menu-icon" src="../../ui/assets/icons/skype.svg"/>
                <img className="menu-icon" src="../../ui/assets/icons/spotify.svg"/>
                <img className="menu-icon" src="../../ui/assets/icons/twitter.svg"/>
                <img className="menu-icon" src="../../ui/assets/icons/whatsapp.svg"/>
            </div>
        );
    };
}

module.exports = MenuBar;
