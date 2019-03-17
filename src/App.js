import React, { Component } from 'react';
import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';

import Team from './components/TOC/Main/Team/Team';
import Mission from './components/TOC/Main/Mission/Mission'

import Default from './components/Default/Default';
import Research from './components/TOC/Research/Research';
import Rebuttals from './components/TOC/Rebuttals/Rebuttals';
import Technical from './components/TOC/Technical/Technical';

import Framework from './components/TOC/LD/Framework/Framework';
import IntroductionLD from './components/TOC/LD/Introduction/IntroductionLD';
import CaseConstructionLD from './components/TOC/LD/CaseConstruction/CaseConstructionLD';
import SpeechesLD from './components/TOC/LD/Speeches/SpeechesLD';
import CXLD from './components/TOC/LD/CX/CXLD';

import IntroductionPF from './components/TOC/PF/Introduction/IntroductionPF';
import SpeechesPF from './components/TOC/PF/Speeches/SpeechesPF';
import CXPF from './components/TOC/PF/CX/CXPF';
import CaseConstructionPF from './components/TOC/PF/CaseConstruction/CaseConstructionPF';
import RebuttalsPF from './components/TOC/PF/RebuttalsPF/RebuttalsPF';



class App extends Component {

  state = {
    sideDrawerOpen: false,
    tab: 'default',
    page: 'default',
  };

  drawerToggleClickHandler = () => {
    this.setState({sideDrawerOpen : !this.sideDrawerOpen})
  };

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false})
  };

  clickChangeTab = (tab) => {
    this.setState({ tab : tab })
  };

  clickChangePage = (page) => {
    this.setState({ page : page, tab : page})

  };

  render() {
    let backdrop;

    if(this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler}/>
    }
    var pageContent = <div></div>
    
    if (this.state.tab === 'default') {
      pageContent = <Default />
    } else if (this.state.tab === "ld") {
      pageContent = <IntroductionLD />
    } else if (this.state.tab === "ld-intro") {
      pageContent = <IntroductionLD />
    } else if (this.state.tab === "framework") {
      pageContent = <Framework />
    } else if (this.state.tab === "research") {
      pageContent = <Research />
    } else if (this.state.tab === "rebuttals") {
      pageContent = <Rebuttals />
    } else if (this.state.tab === 'ld-case-construction') {
      pageContent = <CaseConstructionLD />
    } else if (this.state.tab === 'ld-speeches') {
      pageContent = <SpeechesLD />
    } else if (this.state.tab ==='ld-cx') {
      pageContent = <CXLD />
    } else if (this.state.tab === 'technical') {
      pageContent = <Technical />
    } else if (this.state.tab === 'pf-intro') {
      pageContent = <IntroductionPF />
    } else if (this.state.tab === 'rebuttalsPF') {
      pageContent = <RebuttalsPF />
    } else if (this.state.tab === 'pf') {
      pageContent = <IntroductionPF />
    }else if (this.state.tab === 'pf-speeches') {
      pageContent = <SpeechesPF />
    } else if (this.state.tab === 'pf-cx') {
      pageContent = <CXLD />
    } else if (this.state.tab === 'pf-case-construction') {
      pageContent = <CaseConstructionPF />
    } else if (this.state.tab === 'mission') {
      pageContent = <Mission />
    } else if (this.state.tab === 'team') {
      pageContent = <Team />
    } 


    return (
      <div style={{height: '100%'}}>
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} clickChangePage={this.clickChangePage} page={this.state.page}/>
        <SideDrawer show={this.state.sideDrawerOpen} clickChangeTab={this.clickChangeTab} page={this.state.page}/>
        {backdrop}
        <main style={{marginTop: '80px'}}>  
          { pageContent } 
        </main>
      </div>
    );
  }
}

export default App;
