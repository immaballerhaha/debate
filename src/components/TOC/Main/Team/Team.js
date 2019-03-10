import React from 'react';
import './Team.css';
import profile from './profile-pic.jpg'

class Team extends React.Component {
    render() {
        return (
            <main className='body'>
                <h1>Meet the Team</h1>
                <div>
                    <img src={profile} alt="Anthony" width='300' height='400'/>
                    <div className='prof'>
                        <p id='profile'>My name is Anthony Ma and I debated for four years at San Marino High School.  There, I served as the debate captain my junior and senior year.  Currently, I am a student at Columbia SEAS and intend to major in Math and Neuroscience.<br/><br/>My main accomplishments are:<br/>
                        <ul>
                            <li>2018 National Speech and Debate Association Debater of the Year</li>
                            <li>California State Debate Tournament: 1st place (2017), 3rd place (2018)</li>
                            <li>4x State and National Debate Tournament Qualifier (Southern California Debate League)</li>
                            <li>3x District Champion (2016-2018)</li>
                        </ul>
                        </p>
                    </div>
                </div>
            </main>
        )
    }
}

export default Team;