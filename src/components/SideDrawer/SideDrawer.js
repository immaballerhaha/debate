import React from 'react';
import './SideDrawer.css';

class sideDrawer extends React.Component {
    render() {

        let drawerClasses = 'side-drawer';
        if (this.props.show) {
            drawerClasses = 'side-drawer open';
        }

        if(this.props.page === 'pf') {
            return (
                <nav className={drawerClasses}>
                    <header className="header">
                        <p className="title">Table of Contents</p>
                    </header>
                    <ul>
                        <li><a onClick={() => this.props.clickChangeTab("pf-intro")}>Introduction</a></li>
                        <li><a onClick={() => this.props.clickChangeTab("research")}>Research</a></li>
                        <li><a onClick={() => this.props.clickChangeTab("rebuttalsPF")}>Rebuttals</a></li>
                        <li><a onClick={() => this.props.clickChangeTab("pf-case-construction")}>Case Construction</a></li>
                        <li><a onClick={() => this.props.clickChangeTab("pf-speeches")}>Speeches</a></li>
                        <li><a onClick={() => this.props.clickChangeTab("pf-cx")}>CX</a></li>
                        <li><a onClick={() => this.props.clickChangeTab("technical")}>Technical</a></li>
                    </ul>
                </nav>
            )
        } else if (this.props.page === 'ld') {

            return (
                <nav className={drawerClasses}>
                    <header className="header">
                        <p className="title">Table of Contents</p>
                    </header>
                    <ul>
                        <li><a onClick={() => this.props.clickChangeTab("ld-intro")}>Introduction</a></li>
                        <li><a onClick={() => this.props.clickChangeTab("framework")}>Framework</a></li>
                        <li><a onClick={() => this.props.clickChangeTab("research")}>Research</a></li>
                        <li><a onClick={() => this.props.clickChangeTab("rebuttals")}>Rebuttals</a></li>
                        <li><a onClick={() => this.props.clickChangeTab("ld-case-construction")}>Case Construction</a></li>
                        <li><a onClick={() => this.props.clickChangeTab("ld-speeches")}>Speeches</a></li>
                        <li><a onClick={() => this.props.clickChangeTab("ld-cx")}>CX</a></li>
                        <li><a onClick={() => this.props.clickChangeTab("technical")}>Technical</a></li>
                    </ul>
                </nav>
            )
        } else if (this.props.page === "default") {
            return (
                <nav className={drawerClasses}>
                    <header className="header">
                        <p className="title">Table of Contents</p>
                    </header>
                    <ul>
                        <li><a onClick={() => this.props.clickChangeTab("default")}>Introduction</a></li>
                        <li><a onClick={() => this.props.clickChangeTab("mission")}>Mission</a></li>
                        <li><a onClick={() => this.props.clickChangeTab("team")}>The Team</a></li>  
                    </ul>
                </nav>
            )
        }
    }
}

export default sideDrawer;