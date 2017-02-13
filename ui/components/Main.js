import React, {Component} from 'react';
import styles from '../styles/main.scss';
import NavigationMenu from './NavigationMenu/NavigationMenu';
import MenuBar from './MenuBar/MenuBar';
import SkillSet from './SkillSet/SkillSet';
import Heart from './Heart/heart';

require('es6-promise').polyfill();
require('isomorphic-fetch');

class Main extends Component {

    render() {
        return (
            <div id="main" className="main">
                <h1>Enzo Borg Frantz</h1>
                <MenuBar/>
                <Heart/>
                <SkillSet/>
            </div>
        );
    }
}

module.exports = Main;
