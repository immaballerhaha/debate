import React from 'react';
import './Default.css';

class Default extends React.Component {
    render() {
        return (
            <main className='body'>
                <h1>Welcome</h1>
                <p>This web application will teach you the fundamentals of debate.</p>
                <p>First, select the specific debate event you would like to learn on toolbar up top.<br/>Then, use the sidebar to run through tutorials on specific components of the event! </p>
            </main>
        )
    }
}

export default Default;