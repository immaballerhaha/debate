import React from 'react';
import './Research.css';
import Card from './Card.png';
import Card2 from './Card2.png';
import Cite from './Cite.png';
import Tree from './Tree.png';
import meta from './meta.png';
import {Accordion, AccordionItem} from 'react-light-accordion';

class Research extends React.Component {
    render() {
        return (
            <main className='body'>
                <h1>Research</h1>
                <p>Being able to effectively find the best evidence is key to becoming a great debater.  We will first go through the basics of how to Cut/Find good evidence.  More advanged strategies involving evidence is located in the second half</p>
                <h3>Cutting Cards</h3>
                <p>Cutting cards refers to finding a piece of evidence online, copy and pasting the relevant paragraphs, and “cutting” it down so that only the necessary sentences are showing.  <br/>For example, if you want to find a piece of evidence on why handgun bans would lead to more black market gun deals, you don’t necessarily need the entire article, just a few sentences that accurately summarize the findings.</p>
                <h3>Example: 2016 Jan/Feb Handgun Topic</h3>
                <img src={Card} alt="Evidence" width='90%' height='90%'/>
                <p>As you can see in the above image, the unnecessary words are minimized while the words we want are bold and underlined for emphasis.  This makes the card easier to read when we go through it in our case.</p>
                <p>Notice that there is both a claim and warrant in this card.  The claim is that prohibiting handguns will lead to the development of a black market, and the warrant is that it’s easy to build guns and the profits are high.  Any good card should have both a claim and warrant to be persuasive!</p>
                <h3>Citing Cards</h3>
                <p>Ever piece of evidence within your case should be cited properly.  When asked about it during cross-examination or whenever your opponent wants to see it, you should be able to tell:</p>
                <ul>
                    <li>Author's Full Name</li>
                    <li>Author's Credentials</li>
                    <li>Date of Publication</li>
                    <li>Name of Journal, Newspaper, Website it originates from</li>
                    <li>(Optional) Methodology of the Study</li>
                </ul>
                <h3>Example: Same Topic</h3>
                <img src={Cite} alt="Evidence" width='90%' height='90%' border='3'/>
                <p>As you can see in the above image, we are able to provide all the requirements and more.  Everything except the author's last name and date is minimized because we won't be reading that during our case.  However, it's a big addition to your perceptual dominance to be able to know every possible detail about your own evidence when prompted</p>
                <h3>Finding Evidence (Getting Started)</h3>
                <p>It’s easy to find what you’re looking for once you know what you’re looking for.  But usually that’s not going to be the case when a topic is just released.  </p>
                <p>Usually, when I encounter this problem I look at Premier Debate Briefs or any free online resources (there are usually a few that pop up when you google the resolution).  There’s an abundance of evidence on these briefs but there’s also an abundance of people looking at them which means people are going to be prepared for these arguments.  I recommend looking at the briefs as a stepping stone, and to start using them to think about the following:</p>
                <ul>
                    <li>Given that these are the most common arguments to appear in a round, what types of arguments will my opponents be least prepared for?  Where is there the biggest hole in the overall body of research?</li>
                    <li>Are there specific components to an argument that are especially interesting and can be further investigated?  Maybe you find an interesting link evidence but don’t like the impact.  Don’t worry do your own research and find a newer better impact!</li>
                </ul>
                <p>Once you find an area of interest, use google or google scholar to start reading articles and search for good pieces of evidence while building your overall understanding of the body of research.</p>
                <p>Outside that, look for big authors who frequently do research and publish papers on the topic.  Usually reading their work gives a broad understanding of the scope of possibilities and there are always tons of links and references to other interesting articles you can pursue.</p>
                <h3>Advantage of Unique Evidence</h3>
                <p>I talked this over in depth with my good friend Nikhil Buduma once (2x PF State Champ) and we both came to the conclusion that it is more important for an argument to be unique than for it to be well supported (especially at higher levels of competition).  No matter how good your evidence is, or how much you have, a generic argument will always be heavily prepped out and people are going to have multiple responses to it regardless and that’s a pain.</p>
                <p>The tradeoff is that your argument might have substantially less evidence to back it up, but your opponent is going to have to make up responses on the spot and possible be flustered enough that it could potentially throw him off his entire game.  It’s a good tradeoff considering you don’t need to overinvest in the “unique” argument either.  Kick it if your opponent calls the bluff, but make him work for it.</p>
                <p>So how do you go about finding unique evidence?  </p>     
                <h3>Option #1: Reverse Engineer Your Way Back</h3>
                <p>In this method, we will apply the reverse engineering mindset to our argument creation process.  We will start at the impact we wish to prove, and work our way back to find a link to the resolution.</p>
                <p>At the end of the day we want to win a big impact in the debate round.  So list out some common impact areas where we could “win big” and we get...</p>
                <ul>
                    <li>Economy</li>
                    <li>Environment</li>
                    <li>Racism</li>
                    <li>Education</li>
                    <li>Human Rights</li>
                </ul>
                <p>Now we choose an impact area and look for links between the resolutional action and that impact.  How will affirming or negating the resolution affect each and every one of these impacts (get creative and think outside the box).  Once we have exhausted ALL possible links to that impact, we move on to the next, until we have iterated through every single one (adding more as we stumble across them in our research as well).</p>
                <p>This is in my opinion, the crux of finding unique arguments.  Everyone’s trying to win the same big impacts, but it’s your job to find the most creative and unique path to those impacts.  Sometimes this means you will have to go through multiple links to get to the impact and that’s fine.</p>
                <h3>Example: February 2016 PF (The United States should adopt a carbon tax)</h3>
                <ol> Thought Process:
                    <li>I want to find a reason why a carbon tax would help the U.S. economy</li>
                    <li>A large part of the U.S. economy is predicated on worker productivity</li>
                    <li>Traffic is bad for worker productivity (costs U.S. trillions a year)</li>
                    <li>There would be less traffic if people took public transportation</li>
                    <li>Carbon Tax would raise the price of oil</li>
                    <li>A marginal increase in oil prices leads to 3% decrease in driving </li>
                    <li>Driving would become more expensive and people would take public transportation instead</li>
                </ol>
                <p>Put it all together and the unique argument becomes “A Carbon Tax would raise the price of oil enough for people to choose public transit over cars, and this would greatly decrease traffic, increasing worker productivity and generating trillions for the U.S. economy.”  All of this is carded of course, and highlights the thought process at each step of evidence hunting.</p>
                <h3>Option #2: Tree Approach</h3>
                <p>The Tree approach is similar but may be more intuitive for people.  It’s advantage is that it allows you to uncover new impacts you never considered before.  The disadvantage is that you will hit dead ends a lot and have to process more information and search through more evidence to uncover the argument.  </p>
                <p>To implement the Tree approach, imagine a tree with many branches.  The first branch you start with is usually something obvious, a clear link from the resolution that draws your attention (i.e. a carbon tax leads to an increase in oil prices).  This branch then leads to multiple other different consequences and those result in even more consequences.  You are essentially mapping out the predicated chain reaction that gets set off my affirming/negating the resolution but being extremely comprehensive and precise.  This lets you see minute things most people will overlook and build off them to bigger impacts.</p>
                <p>Here is a visual representation of your mental model:</p>
                <img src={Tree} alt='Tree' height='90%' width='90%' />
                <p>In the above model each branch has two consequences, but in reality there should be many more.  The key to this method working as effectively as possible is to think of as many consequences resulting from each branch as you can.  This will “spread” out your tree and give you many more opportunities to “strike gold.”</p>
                <p>The tree approach is probably similar to the way you currently think about debate.  The key difference is, most people prioritize depth-first searching.  They start at the first branch and immediately move on to a secondary branch the moment they find a consequence.  You go really deep in a straight line plunge, hit a dead end where you can’t find any more resulting consequences that matter, and give up on the parent branch when in fact there are probably tons of sub-secondary branches that were never fully investigated.  Just remember, before you start investigating any new branches you find, find ALL branches associated with the previous branch and record them for later research!</p>
                <p></p>
                <h1>Advanced Topics: Strategic Evidence</h1>
                <h3>Understanding Methodology</h3>
                <p>In most debate rounds there is going to be conflicting evidence.  An in depth understanding of methodology will allow you to resolve those evidence contradictions so that you come out on top!</p>
                <p>Here are a few things to look out for when you’re researching your own studies.  Leverage them in the round to explain why your evidence is better than your opponents.</p>
                <Accordion>
                    <AccordionItem title='Sample Size'>
                        <p style={{padding : '1rem'}}>As long as the experiment was conducted with random sampling, you really only need 30 participants to get a statistically significant result.  However, if your sample size is much greater than your opponents you can use that as a reason why it is more comprehensive and I think most judges find that intuitive.</p>
                    </AccordionItem>
                    <AccordionItem title='Sample Scope'>
                        <p style={{padding : '1rem'}}>Was your study done in one district, an entire state, multiple states?  Having a larger scope can also be a way to leverage your evidence using the rationale that your opponent’s evidence might just be influenced by the way a certain district is run, and not by the policy itself.</p>
                    </AccordionItem>
                    <AccordionItem title='Year of Study'>
                        <p style={{padding : '1rem'}}>The year your study is conducted is also extremely important.  Having the more recent study helps because you can say the most recent model is likely to be the best predictor given our current situation.  Even studies from the early 2000s are fairly questionable.  That was before iphones come out, and we’ve come a long way since.<br/><br/>When looking at the year of study, also think about major policy or cultural movements that are taking place that year.  Sometimes global or national policy initiatives have a big impact on the study’s findings even though it has nothing to do with the resolution.  DId banning guns actually increase crime rates in Chicago?  Or was it simply because that year, the government passed a record number of new criminal laws that defined more people as “criminal”?</p>
                    </AccordionItem>
                    <AccordionItem title='Years of Study'>
                        <p style={{padding : '1rem'}}>Really good studies usually span multiple years or at least use data from multiple years.  If you’re research study spans 15 years and your opponent’s only a couple months, the argument could be made that your opponent’s study wasn’t pursued long enough to see the long-term trends shown in your evidence.</p>
                    </AccordionItem>
                    <AccordionItem title='Assumptions Made'>
                        <p style={{padding : '1rem'}}>Most economic and behavioral modeling statistics rely an a few base assumptions.  To find these, sometimes you need to separate google search the specific model used in the research and read up on it.  Make sure that your evidence is making any ridiculous assumptions and call out your opponents when they do.  For example, an economic model from the Roosevelt Institute found that a UBI would grow U.S. GDP by 12% but it assumed demand levels from the Great Depression.  Not applicable.</p>
                    </AccordionItem>
                    <AccordionItem title='Margin of Error'>
                        <p style={{padding : '1rem'}}>This is most commonly found in polls but also in other studies too.  Calculating margin of error or confidence is based in Statistics, and is pretty hard to manipulate.  It also shows your studies comprehensiveness because the data was re-tested for accuracy.  Usually, a study will include their margin of error in the conclusion and you can use this to prove your study’s legitimacy.  I’ve also come across major studies that incorrectly calculated their margin of error so if it seems too good or bad to be true, double check!</p>
                    </AccordionItem>
                    <AccordionItem title='Data Collection Methodology'>
                        <p style={{padding : '1rem'}}>You may be tempted to just take the study’s findings and call it, but it is equally important to read through the dense text of how the study was conducted.  Often times, there is room for bias in the the way the data was collected or calculated and you need to be able to both defend and attack on these points.  Look for who is collecting the data, and if they are an impartial third party.  Look for the types of questions asked, if they are misleading, or the way districts are selected, is it cherry picked?  There are always problems you can find with the methodology if you look hard enough, and sometimes they even admit it within their own paper.</p>
                    </AccordionItem>
                </Accordion>
                <p>Use the above factors in both your rebuttal and cross-examination.  If there’s a problematic piece of evidence from your opponent, ask the sample size, margin of error, and modeling assumptions.  If he can’t answer his evidence is looking lackluster already.  Then, in rebuttal build on it, talk about what your evidence has that your opponent’s doesn’t and why that makes it more accurate.  Many rounds hinge on which debater has the best evidence!</p>
                <h3>Be Country Specific</h3>
                <p>Your studies for the most part should be U.S. country specific.  You want to avoid the very simple tactic of your opponent saying “because your evidence is not U.S. specific it doesn’t take into account the specific conditions current policy has already set in place.”  Even if this isn’t true, you are placed in a very low efficiency situation.</p>
                <p>Think about it, you just spent 30 seconds reading this evidence, and now you probably have to invest another 30 just to explain why, despite being a different country, the study still applies.  That’s a total of 1 minute invested whereas your opponent only put in 10 seconds to make the response.  We’ll go over why this is the case in the rebuttals section, but in general you don’t want to be in a position where you have to re-justify evidence, at best you get back to square 1 and waste an egregious amount of time.</p>
                <p>The only time I can think of where it might be appropriate to use a non U.S. example is when you are proving a behavioral analytic.  You should preempt the response in your first speech then and say “although this evidence is not from the U.S. it proves a universal human trend which is applicable to the U.S.”</p>
                <h3>Examples: </h3>
                <p>“Prefer my evidence because it is country specific.  My opponent’s evidence is from Europe which means it doesn’t take into account the political, cultural, and social makeup of the U.S.”</p>
                <p>“Prefer my evidence because it is country specific.  My opponent’s evidence is from Europe which means it doesn’t take into account the political infrastructure already in place within the U.S.”</p>
                <h3>Advantage of Meta-Analysis</h3>
                <p>A meta-analysis is a statistical analysis that combines the results of multiple scientific studies.  This let’s you absolutely bulldoze/bully other scientific studies because a meta-analysis can drawway more accurate patterns and prediction models given that they take data from across multiple studies.  In a way, you meta-analysis already takes into account your opponent’s study, and rejects it based on the overwhelming body of research in the area.</p>
                <img src={meta} alt='meta' height='90%' eidth='90%' /> 
                <h3>Advantage of Longitudinal Studies</h3>
                <p>A longitudinal study is a research design that involves repeated observations of the same variables (e.g., people) over long periods of time.  These are kind of the hidden overpowered gems in evidence collection that people often overlook but are in a league of their own.  A well executed longitudinal study can be more accurate than a meta-analysis since you are inherently drawing different connections.  The longitudinal study is the most accurate when generating long term market or behavioral trends because you track a small number of variables but over an extremely long period of time.  Most studies track a large number of variables over a short amount of time.  Your analysis can be “my opponent’s evidence is really good at predicting the short term effects of this policy, buy my longitudinal study is the only one that can predict what the world looks like 10 years from now.”</p>
                <h3>Link Evidence Together</h3>
                <p>Sometimes when you research a very niche area, you won’t be able to find the exact card you want to link x to y.  This usually means you need to introduce a third piece of evidence z to link x to y implicitly; now it goes x to z to y.</p>
                <p>For example, we want to find a link between standardized testing and decreased child brain development but it is extremely hard to find that specific link.  What we do is find a third piece of evidence that playtime is the most important factor in child brain development, and relate standardized testing practices to a decrease in playtime.</p>
                <p>Where I have found this concept to be most useful is in economic theory, where there are many principles being proven but very few research linking those principles together.</p>
            </main>
        )
    }
}

export default Research;