import React, {Component} from 'react';
import styles from './SkillSet.scss';
import skills from '../../assets/data/skills.json'

class SkillSet extends Component {
    render() {
        return (
            <div>
                <div className="skill-set">
                    {skills.map(m => <div className="skill"> {m} </div>)}
                </div>
            </div>
        );
    }
}

module.exports = SkillSet;
