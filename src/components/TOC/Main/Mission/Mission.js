import React from 'react';
import './Mission.css';

class Mission extends React.Component {
    render() {
        return (
            <main className='body'>
                <h1>Mission Statement</h1>
                <p>The goal of this web application is to provide a comprehensive free guide for everyone to learn how to become a proficient debater.  I remember when I was in high school, debate was purely taught through the captains or experienced varsity members.  I hope this tool improves the quality of debate all around and helps improve debate education for both the smaller school districts and independent debaters.</p>
                <div className='space'/>
                <h2>Become an Editor</h2>
                <p>There are definitely quite a few gaps in my debate knowledge.  LD was more of a hobby and I never actually learned technical debate, so if you have any new entries or information you would like to add just message me at 'aym2120@columbia.edu' and become an Editor!</p>
            </main>
        )
    }
}
export default Mission;