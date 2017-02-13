import React, {Component} from 'react';
import styles from './heart.scss';

export default function animate() {
    let main = document.getElementById("main");
    let floatingHearts = [];
    ["left", "middle", "right"].forEach(h => {
        let floatingHeart = document.createElement('div');
        floatingHeart.className = `floating-heart ${h}`;
        main.appendChild(floatingHeart);
        floatingHearts.push(floatingHeart);
    });

    setTimeout(function() {
      floatingHearts.forEach(function(f){
        document.getElementById("main").removeChild(f)
      });
    }, 1500);
}

class Heart extends Component {
    render() {
        return (
            <div className="heart-button" onClick={animate}></div>
        );
    }
}

module.exports = Heart;
