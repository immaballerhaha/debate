import React from 'react';
import './CaseConstructionPF.css';
import { Accordion, AccordionItem } from 'react-light-accordion';
import 'react-light-accordion/demo/css/index.css';
import Concise from './Concise.png';
import Efficiency from './Efficiency.png';
import Threat from './Threat.png';
import Tricks1 from './Tricks1.png';
import Tricks2 from './Tricks2.png';

class CaseConstructionPF extends React.Component {
    render() {
        return (
            <main className='body'>
                <h1>Case Construction</h1>
                <h2>Contents</h2>
                <p>Below are the contents of your case</p>
                <Accordion> 
                    <AccordionItem title='Definitions'>
                        <p style={{padding : '1rem'}}>The definitions section defines key terms in the resolution to clarify what arguments are topical.<br/><br/><strong>Example: </strong>Handguns are defined as guns designed for use with one hand.  This means hunting rifles aren’t banned for people who hunt for sport.</p>
                    </AccordionItem>
                    <AccordionItem title='Observations'>
                        <p style={{padding : '1rem'}}>The observation section can be placed after the framework section.  Observations are pretty versatile and can be used to clarify a portion of the resolution, set up burden structures, or set up independent voters.<br/><br/><strong>Example: </strong>“Observation 1: The affirmatives burden is not to provide a concrete plan of action.  Rather our burden is simply to prove that the idea behind the policy is moral.”<br/><br/><strong>Example: </strong>“Observation 1: Passing a universal basic income policy entails cutting from welfare and increasing taxation.  This is the only way to generate an extra annual 3 trillion dollars according to [insert evidence].”<br/><br/><strong>Example: </strong>Topic -The U.S.F.G. ought not restrict any constitutionally protected free speech<br/>“The negative’s burden is simply to prove the resolution false.  This means as long as the neg is able to provide one instance where free speech ought to be restricted we will have fulfilled our burden.”<br/><br/><strong>Example: </strong>“Observation 1: Polls indicate an overwhelming support for X policy.  This is an independent voter -for a government to be democratic it must respect the will of its citizens.”</p>
                    </AccordionItem>
                    <AccordionItem title='Contentions'>
                        <p style={{padding : '1rem'}}>Your contentions are the individual arguments you are making within the round.  They have a…
                        <ul>
                            <li><strong>Claim: </strong>what is it the argument is trying to prove?<br/>Example: “U.S. democracy promotion in the Middle East is inefficient and corrupt”</li>
                            <li><strong>Warrant: </strong>what is the evidence to back up that claim?<br/>Example: “The Fifth Fleet stationed in Bahrain regularly oppresses natives and sides with corrupt leaders to silence political dissent [insert evidence]</li>
                            <li><strong>Impact: </strong>If the claim is true what happens?<br/>Example: “Corruption in the middle east happens because it is backed by U.S. support.  Ending U.S. military support to Bahrain would send a strong signal to the entire region and strengthen movements fighting for reform [insert evidence].”</li>
                        </ul>
                    </p>
                    </AccordionItem>
                    <AccordionItem title='Underview'>
                        <p style={{padding : '1rem'}}>The underview comes at the end of your case and is usually where you offer closing remarks.  This could be the place for a heartfelt speech bloated with pathos to wrap up your case with an inspiring call to action.  Or, it could be a place to add preempts to predictable responses your opponent might make in the next speech.  Although I think reading preempts in the first speech is a gross misuse of time (either they don’t make the response and you wasted your time, or they do make a response, in which case you then have to waste more time explaining how your opponent didn’t answer the preempt) it is something that is done...</p>
                    </AccordionItem>
                </Accordion>
                <h2>Optimization</h2>
                <p>The process of making a case is an an iterative one.  The first draft isn’t going to be perfect.  You’ll test it out, find places that are inefficient or arguments that perform suboptimally in the late game, and either switch them out or alter the argument in some way to boost its effectiveness.  You continue repeating this process over and over again until ideally every single argument in your case is important and every last word serves a purpose.<br/><br/>What does it mean for a case to be optimal?</p>
                <h3>1. Conciseness</h3>
                <p>How concise are all of your arguments?  Is there a shorter, clearer way to explain the argument?  Oftentimes in fact, debaters over explain their argument and make it even more confusing.  Don’t do that -in fact, err on the side of under explaining.  If your opponent drops the argument or the judge shows signs of confusion, you can elaborate in the next speech.  </p>
                <p>It may be helpful to mentally break down each of your arguments into their respective purposes (claim, warrant, impact) and make sure that there is only one of each.  This is usually where you will find you have 1) highlighted multiple warrants in your card when there should only be one (you can elaborate on the other warrants if pressured to or the argument is dropped) 2) repeated the claim multiple times either in the tag or the card (sometimes the card repeats your claim and you don’t notice it because it flows well).</p>
                <Accordion>
                    <AccordionItem title='Example 1: Topic -Standardized Testing Benefits K-12 Education'>
                        <img src={Concise} width='60%' height='60%' alt='efficiency' style={{padding : '1rem 0rem 0rem 0rem'}} />
                        <p style={{padding : '0rem 1rem 1rem 1rem'}}>As you can see in the above image, the claim is repeated in both the tag and card.  A more concise way to read this argument is to have the claim in the tag and the warrant in the card. “The quality of teachers is the most important factor in education” should be the tag, then in the card: “research shows the quality of the teacher can make the difference of a full year’s learning growth.”  We’ve cut down the time it took to read this argument by a few seconds, which isn’t a ton, but keep in mind this was a short argument to begin with and was already pretty efficient too.</p>
                    </AccordionItem>
                </Accordion>
               <h3>2. Efficiency of Argument</h3>
                <p>An argument itself can be efficient independent of its word economy usage.  Have you ever noticed that some parts of an argument just seem “obvious” and don’t need further explanation for a judge to understand.  These are arguments like “government bureaucracy is inefficient, GDP growth helps poverty, and education decreases crime rates.”  None of these arguments are outright false per sey, but they definitely require much less explanation than they should.  GDP growth doesn’t actually mean better living conditions, some bureaucratic organizations are necessary, and different types of education policy have very different effects on crime.  But when you trigger these phrases, the judge somehow instantly knows what you mean -societal conditioning has already taught them to accept these as truths.  As a result, fighting against these types of arguments will always be an uphill battle, and always time inefficient.  You will always spend more time responding to these arguments, because your opponent uses the core assumptions ingrained in your judge to get away with broad generalizations that your judge has already applied for them in the specific scenario based on his or her past experiences.</p>
                <Accordion>
                    <AccordionItem title='Example 1: Topic -The U.S.F.G. should implement an oil tax'>
                        <p style={{padding : '1rem 1rem 0rem 1rem'}}>“Taxing oil simply means that oil companies will charge consumers more to offset the cost, hurting those in the bottom 10% most.”</p>
                        <p style={{padding : '1rem'}}>If you think about it, it’s not actually that straightforward.  Given the competitive nature of the market, it makes more sense for companies to raise prices slightly if at all, since they can potentially be undercut by another company willing to bite into profits but stay alive.  Obviously, this is much harder to explain to a judge and requires hard evidence to back it up.  Even after the ridiculous time tradeoff gamble you have to make, it’s much more intuitive for the judge to simply trust that corporations are always greedy and evil and will do whatever it takes to screw the consumer for more profit.  That’s just what we’re all taught growing up.</p>
                    </AccordionItem>
                    <AccordionItem title='Example 2: Topic -Standardized Testing Benefits K-12 Education'>
                        <img src={Efficiency} width='70%' height='70%' alt='efficiency' style={{padding : '1rem 0rem 0rem 0rem'}}/>
                        <p style={{padding : '0rem 1rem 1rem 1rem'}}>If we look at the above image, the argument makes sense and seems important since our impact is solving the education gap.  However, we don’t actually need to read evidence for it.  We should have the evidence and keep it ready, but saying, “increased quality of teachers will benefit lower income students and help decrease educational inequality” is an argument the judge will understand and buy without the extra push.  Is your opponent really going to challenge the argument that increased education opportunity for lower income students helps equality?  I doubt it -it’s one of those things that are just obvious.</p>
                    </AccordionItem>

                </Accordion>
                <p>There are tons of adages we hear growing up (people want what they can’t have, a man who chases two rabbits catches none, there’s no free lunch) that can boil down complex issues to a single phrase we store in our brains.  I like to imagine that when I am crafting the logic of my arguments, I am attempting to trigger as many of these as possible, and that each successful trigger wins me a ton of time because an entire spectrum of experiences has just been unlocked and now supplements my argument paid for completely by the judge.</p>
                <p><strong>Takeaway: </strong>Incorporate arguments that are strongly based on assumptions that we are taught to accept at an early age.  This will almost always be a time winning move and makes your entire case more logical and intuitive (at least in the eyes of the judge).  Everyone accepts that racism is bad, multilateralism is more efficient, inequality is evil, corporations are greedy, economic prosperity is the same as individual prosperity, etc. </p>
                <h3>3. Threat Level</h3>
                <p>Is the threat level of every argument at max and does every argument do something?  That means if your opponent drops any single argument you make, are you able to win the entire debate on only that dropped argument?  The answer ideally is yes.  This makes it much harder for your opponent to collapse, and makes it much easier for you to punish any little mistake.  Creating arguments that can win the round goes beyond building “strong” arguments though.  It means you have to take the time to map out a winning endgame for each of your contentions, and understand how that argument will evolve all the way to your last speech.</p>
                <Accordion>
                    <AccordionItem title="Example 1: Topic -The U.S. Ought to Gaurantee the Right to Housing">
                        <img src={Threat} width='70%' height='70%' alt='threat'/>
                        <p style={{padding : '1rem'}}>As the negative, my contention 2 about crime is designed to instantly win the round if dropped.  The succeeding speeches have already been mapped out as long as it is conceded that government housing projects inevitably lead to the forceful congregation of impoverished communities.  Depending on how the round progresses, I can talk about crime (crime rates in these areas are always the highest because city planners and businesses purposefully avoid developing the area which leads to 0 opportunities for residents), mass incarceration (aff creates communities that easily become targets of overcriminalization and police brutality and this creates a vicious cycle of intergenerational poverty and hate), or poverty (educational systems in these communities will be ignored by the government leading to children with no hope of social mobility who must turn to crime in order to survive).  Racism, education, poverty, mass incarceration, economic opportunity -all of these issues can be won with this contention making it a high threat level argument.</p>
                    </AccordionItem>
                </Accordion>
                <h2>Contention Tricks - Hide Arguments in Warrants</h2>
                <p>Hiding arguments in warrants is, if you think about it, just another way of maximizing argument efficiency.  We aren’t necessarily hiding an argument in a warrant, rather, we are building the argument so that the warrant itself is potential offense against the opposing case.  This is probably explained best through an example.</p>
                <p><strong>Example: </strong>The U.S.F.G. Ought to Implement a UBI</p>
                <img src={Tricks1} width='70%' height='70%' alt='tricks1' border='2'/>
                <p>As you can see in the above image our claim is that a UBI helps preserve the environment, our warrant is that a UBI hollows out the coal mining industry, and our impact is that this saves hundreds of thousands of lives through decreased pollution.  Notice how the warrant itself functions as not only justification for the impact, but also an independent reason why a UBI is good.  Even if your opponent takes out your impact by proving that destroying the coal mining industry doesn’t solve, you can make new arguments about why the coal mining industry is bad for the economy, a form of labor exploitation, etc.  The key is that as long as your warrant still stands, there are still many different ways it can function as an attack on the opposing case.</p>
                </main>
        )
    }
}

export default CaseConstructionPF;