import React, {Component} from 'react';
import styles from '../styles/main.scss';
import NavigationMenu from './NavigationMenu/NavigationMenu';

export default function animate() {

    var floatingHeartLeft = document.createElement('div');
    floatingHeartLeft.className = "basic-heart floating-heart-left";
    document.getElementById("main").appendChild(floatingHeartLeft);

    var floatingHeartMiddle = document.createElement('div');
    floatingHeartMiddle.className = "basic-heart floating-heart-middle";
    document.getElementById("main").appendChild(floatingHeartMiddle);

    var floatingHeartRight = document.createElement('div');
    floatingHeartRight.className = "basic-heart floating-heart-right";
    document.getElementById("main").appendChild(floatingHeartRight);

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
