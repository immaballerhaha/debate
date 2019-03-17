import React from 'react';
import './IntroductionLD.css';

class IntroductionLD extends React.Component {
    render() {
        return (
            <main className='body'>
                <h1>Lincoln-Douglas Debate</h1>
                <p>The first Lincoln-Douglas Debates were between President Abraham Lincoln and Senator Stephen Douglas.</p>
                <p>Also known as the The Great Debates of 1858, these became a series of seven debates in which both candidates vied for the position of United States Senator of Illinois.  The key issue addressed was that of slavery, specifically the issue of whether slavery should be allowed to expand into the territories.  As a result, concepts such as morality and justice became crucial themes in both parties' positions.</p>
                <img src="https://thumbs-prod.si-cdn.com/FDi_6j66UjdA8GJ5m0DCJXfrOPs=/fit-in/1600x0/https://public-media.si-cdn.com/filer/facethenation_sept08_631.jpg" alt="Lincoln"  width='55%'/>
                <div className='space'></div>
                <p>LD is a single debater event.  That means you don't get a partner, and rounds are also longer with the longest single speech given to the Neg, where you will have to talk for 7 minutes uninterrupted in the negative constructive.  As a result, debaters usually start off in PF first, gain some experience and confidence, then move on to LD.</p>
                <h3>Lincoln-Douglas is a Values Debate:</h3>
                <p>What makes LD debate different is that it includes use of a <u>Value</u> and <u>Value Criterion</u>.  This will be further explained in the "Framework" section.</p>
                <p>Essentially, this means LD is more focused on <strong>philosophical</strong> questions rather than policy.  Before you, as a debater, determine what is good or bad, you will first have to justify what it means to be objectively "good" or "bad" from a philosophical standpoint.  This may initially sound more intimidating that it really is.  In fact, you've probably had this type debate multiple times already with your parents or peers: Do the ends justify the means or does the pursuit of some higher goal and purpose trump the few eggs you crack along the way?</p>
                <p>Here are a few examples of LD topics: </p>
                <div className='row'>
                    <div className='column'>
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3XMGwlkK-4QI1uUJHiy0KJR5nx6A__LEoQ4MAbSf8r49lZc2G5A' alt='top1' width='100%'/>
                    </div>
                    <div className='column'>
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD50tM_XcGiwQPMYpI-IgUty4xK9LcTiIGM_moJblbs_MnOElXNQ' alt='top2' width='100%'/>
                    </div>
                    <div className='column'>
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi33cjfHI81FyAmeSRIUdv-kKX7oJ62URXmCmvvO206xGR_-wU' alt='top2' width='100%'/>
                    </div>
                </div>
            
            </main>
        )
    }
}

export default IntroductionLD;