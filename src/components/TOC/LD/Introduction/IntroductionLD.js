import React from 'react';
import './IntroductionLD.css';

class IntroductionLD extends React.Component {
    render() {
        return (
            <main className='body'>
                <h1>Lincoln-Douglas Debate</h1>
                <p>The first Lincoln-Douglas Debates were between President Abraham Lincoln and Senator Stephen Douglas.</p>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Lincoln_Douglas.jpg/400px-Lincoln_Douglas.jpg" alt="Lincoln" border='5'/>
                <p>Also known as the The Great Debates of 1858, these became a series of seven debates in which both candidates vied for the position of United States Senator of Illinois.  The key issue addressed was that of slavery, specifically the issue of whether slavery should be allowed to expand into the territories.  As a result, concepts such as morality and justice became crucial themes in both parties' positions.</p>
                <div className='space'></div>
                <h3>Lincoln-Douglas is a Values Debate:</h3>
                <p>What makes LD debate different is that it includes use of a <u>Value</u> and <u>Value Criterion</u>.  This will be further explained in the "Framework" section.</p>
                <p>Essentially, this means LD is more focused on <strong>philosophical</strong> questions rather than policy.  Before you, as a debater, determine what is good or bad, you will first have to justify what it means to be objectively "good" or "bad" from a philosophical standpoint.</p>
            </main>
        )
    }
}

export default IntroductionLD;