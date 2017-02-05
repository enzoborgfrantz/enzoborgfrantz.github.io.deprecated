import React, {Component} from 'react'
import styles from './NavigationMenu.scss'

class NavigationMenu extends Component {

    render() {
        return (
            <div className="main-navigation">
                <label className="navigation-label a">About Me</label>
                <label className="navigation-label c">Contact</label>
                <label className="navigation-label s">Skills</label>
            </div>
        );
    };
}

module.exports = NavigationMenu;
