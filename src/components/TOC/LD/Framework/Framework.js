import React from 'react';
import './Framework.css';
import deont from './deont.docx';
import contractarianism from './contractarianism.docx';
import util from './util.docx';
import masterfile from './masterfile.docx';
import fwk from './fwk.png';
import fwk2 from './fwk2.png';

/*const DATA = {
    title: "Framework",
    body: [{
        title: "What is Framework?",
        body: "body"
    }, {
        title: "What is Framework?",
        body: "body"
    }]
}
*/

class Framework extends React.Component {
    _renderSubsections = (sections) => {
        return sections.map(function(s) {
            return (
                <div>
                    <h3>{s.title}</h3>
                    <p>{s.body}</p>
                </div>
            )
        })
    }
    render() {
        return (
            <main className='body'>
                <h1>Framework</h1>
                {/* this._renderSubsections(DATA.body) */}
                <h3>What is Framework?</h3>
                <p>Framework is literally just how you decide to frame the round (what <strong>type</strong> of arguments matter and <strong>why?</strong>).<br />  It will (and arguably should) usually appear at the beginning of your case, and acts almost like a thesis statement that wraps your individual arguments.  <br />There is no set definition to what constitutes a “framework.”  The test is, by the end of your speech, can the judge easily see how all your arguments are connected and answer WHY your arguments SPECIFICALLY matter.</p>
                <h3>In LD, Framework usually refers to the <u>Value</u> and <u>Value Criterion:</u></h3>
                <p>The <u>value</u>, for the most part is purely semantic.  Both sides are saying “I value what is right” but that usually doesn’t become clear until later in the round.  
                <br />The most common values are usually “justice” or “morality” since LD is a philosophical debate, and it is fairly intuitive that whichever side is proven to be most “just” by the end of the round ought to win.
                </p>
                <p>The <u>value criterion</u> is where there will usually be clash.  The value criterion is HOW you achieve your value.  This part answers the question of HOW are you upholding justice or morality and WHY is this the best method of upholding those values?</p>
                <p><strong>Example: </strong>The value is justice and the value criterion is maximizing expected wellbeing.  Maximizing expected wellbeing is the best way to achieve justice because the state has a moral obligation to provide for its citizens.
                <br />[*insert a piece of evidence explaining why the state has a moral obligation to provide for its citizens*]
                </p>
                <p>Notice how we explicitly state what the value is (justice), then state the value criterion (maximizing expected wellbeing) and then explain why the value criterion is the best way of achieving the value (because a state is only just if it fulfills its obligation to provide for its citizens).  <br />Easy peasy lemon squeezy.  </p>
                <h3>Let's Try it Out:</h3>
                <p>As you can see, Framework is your tool to exclude and include certain arguments (ideally including your own and excluding your opponents).  A simple example would be:</p>
                <ol>
                    <li>Your opponent reads two arguments about why negating the resolution is bad for our freedoms.</li>
                    <li>You read a framework that says the ends justify the means (who cares about rights?)</li>
                    <li>Now even if your opponent wins the argument that negating is bad for freedom, it doesn’t matter.  Those aren’t important under your framework.</li>
                </ol>
                <h1>Common Frameworks</h1>
                <p>The links below will show you past frameworks written for different topics.  They are much longer than normally expected, but I included the lengthy versions so that you could have a better understanding of the framework in its entirety.</p>
                <ul>
                    <li><a href={util}><strong>Utilitarianism</strong></a> <br/><p>By far the most common, a Util framework establishes that justice is achieved when we maximize the greatest good for the greatest number of people.  There are different ways to word this so that it sounds more appealing like “minimizing structural violence,” “maximizing happiness,” or “saving the greatest number of lives.”  The giveaway is that you are usually calculating or maximizing something.</p></li>
                    <li><a href={deont}><strong>Deontology</strong></a> <br/><p>Deontology is an ethical theory that uses rules to distinguish right from wrong.  Unlike consequentialism, which judges actions by their results, deontology doesn’t require weighing the costs and benefits of a situation. This avoids subjectivity and uncertainty because you only have to follow set rules</p></li>
                    <li><a href={contractarianism}><strong>Contractarianism</strong></a> <br/><p>The moral theory of contractarianism claims that morality derives its normative force from a contract or mutual agreement.  The contractarian principles of mutual restraint are defined as those principles rational agents would constrain their actions by in the belief that doing so would serve their self-interest.</p></li>
                </ul>
                <p>I wanted to include discussions on all the different types of philosophy frameworks and how to respond and defend against them, but that would take way too much space.  So, here’s a link to a framework masterfile.  <a href={masterfile}>Happy Readings!</a></p>
                <p></p>
                <h1>Framework Strategys (Traditional)</h1>
                <p>In general keep your frameworks short, especially when they aren’t something intuitive like constitutionality or utilitarianism.  Remember, there is a finite limit to how much new information you can teach your judge.  Save you judges brain cells for your individual arguments and rebuttals.  If you judge becomes non receptive to your case from the get-go your gonna be fighting an uphill battle for the rest of the round.</p>
                <h3>Keep Your Framework Broad</h3>
                <p>The last thing you want to do is have your framework pinned down by your opponent with either a nasty example where your framework fails, or a logical inconsistency. </p>
                <p>Therefore, don't overshow your hand and keep your framework broad and flexible.  This way if your opponent is confused about it, you can feel out their strategic thought during cross-examination and provide the best interpretation of your framework given the circumstance.  If your opponent isn’t confused, then develop your framework throughout the round depending on how the arguments play out so you're always using it at the highest efficiency.  This lets you target and zone out arguments much more precisely because you choose when and where to reveal different parts of your framework.</p>
                <h3>Running Framework on Aff</h3>
                <p>As the Affirmative you need to read a solid framework (1 - 1.5 minutes) that really forces the Neg to commit in their 1 minute 1NC.  Otherwise there’s a big chance you get completely overwhelmed in your 4 minute 1AR. A strategic framework means that in your last speech, you can effectively zone out a lot of individual arguments that your opponent might be winning (which is likely to happen if they’re decent) and focus on big picture weighing and analysis. </p>
                <p>If you know that your opponent is running the same framework as you, you might also just bite the bullet, shorten your framework to bare bones, zoom through it, and read 6 minutes of offense.  If your assumption is correct, and both you and your opponent are equally researched, you will probably come out on top, given that you have the first and, most importantly, last speeches.</p>
                <p><strong>Example:</strong> I like to start with a simple framework like “fulfilling governmental obligations” then as the round progresses I start explaining what those obligations are depending on which arguments are winning/losing.</p>
                <h3>Running Framework on Neg</h3>
                <p>As the Negative I think it is most strategic to read a short framework (20 - 40 seconds) as a time suck, then collapse to the Aff framework in the 1NR.  The Aff is at an extreme time disadvantage in the 4 minute 1AR in which they have to respond to your 7 minute 1NC.  You want to make it harder for them to collapse and group arguments whenever possible, and a good way to do this is to present a framework of your own.  Remember, don’t over establish the framework.  Just set it up.  Once it’s set up, any additional buff you add is a diminishing return and trades off with more contention level offense.</p>
                <p>The trick to this working is that the contentions under your framework need to be multipurpose.  This means your contentions need to work under both your and your opponent’s frameworks.  An easy example would be to read a framework about preserving negative rights, and you have a contention about cybertheft.  Cybertheft is certainly a violation of your negative rights, but if your opponent is reading a util framework, it’s also bad under their framework too.  This way, even if they adequately take out your framework, your contention level offense is still just as strong.</p>
                <p>The exception to this is when you realize the Aff has the same framework as you.  It is your privilege as the Neg to get to see beforehand what the Aff is reading, so if the Aff has the same framework as you, don’t read your own framework, and get right into your case.  Now you have an extra minute or so to respond to the Aff case.</p>
                <p><strong>Example:</strong></p>
                <p>1AR - opponent spends half his time arguing framework <br/>1NC - you say “Even if you prioritize my opponent’s framework, it is very clear that the Negative upholds that framework better” (5 seconds to your opponent few minutes)</p>
                <h3>Framework Tricks: Disguising Offense as Framework Warrants</h3>
                <p>Sometimes, framework justifications can actually function as independent arguments.  This is the most optimal way to use of framework, because you not only set up a viable framework with good justifications, those justifications also directly attack your opponents case.  Generic framework responses won’t cut it anymore, your opponent needs to individually dissect each of your warrants or it could become an independent voter or cross application to their case.</p>
                <p><strong>Example:</strong> We are negating the 2017 Nationals Topic “A just government ought to prioritize civil liberties over national security”</p>
                <img src={fwk} alt='fwk' height='90%' width='90%' border='3'/>
                <p></p>
                <img src={fwk2} alt='fwk2' height='90%' width='90%' border='3'/>
                <ol>In the above we not only justify our VC well but also establish that:
                    <li>security is a PRECONDITION to state legitimacy which means that for a government to be just it must prioritize security (can be an independent voter or a topicality issue)</li>
                    <li>The world where everyone has absolute liberty is a world of chaos (can be cross-applied to case as a turn)</li>
                    <li>Even if we prioritize freedoms, the freedom from physical injury is a trump to other liberties which means we prioritize security (can be an independent voter and case turn)</li>
                </ol>
             </main>
        )
    }
}
export default Framework;