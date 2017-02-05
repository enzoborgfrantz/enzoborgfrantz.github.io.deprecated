import React, {Component} from 'react';
import styles from '../styles/main.scss';
import NavigationMenu from './NavigationMenu/NavigationMenu';

export default function animate(event) {

    var floatingHeart = document.createElement('div');
    floatingHeart.className = "basic-heart floating-heart";
    document.getElementById("main").appendChild(floatingHeart);

}

class Main extends Component {

    render() {
        return (
            <div id="main" className="main">
                <NavigationMenu/>
                <div className="heart-button" onClick={animate}></div>
            </div>
        );
    }
}

module.exports = Main;
