import React from 'react';
import './Toolbar.css';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';

class Toolbar extends React.Component { 

    render() {
        return (
            <header className='toolbar'>
                <nav className='toolbar_navigation'>
                    <div> 
                        <DrawerToggleButton click={this.props.drawerClickHandler}/>
                    </div>
                    <div className='toolbar_logo'><a onClick={() => this.props.clickChangePage("default")}>LEARN TO DEBATE</a></div>
                    <div className='spacer'></div>
                    <div className='toolbar_navigation-items'>
                        <ul>
                            <li className={this.props.page === 'ld' ? 'active' : 'inactive'}><a onClick={() => this.props.clickChangePage("ld")}>Lincoln-Douglas</a></li>
                            <li className={this.props.page === 'pf' ? 'active' : 'inactive'}><a onClick={() => this.props.clickChangePage("pf")}>Public Forum</a></li>
                        </ul>
                    </div>
                </nav>
            </header>
        )
    }
}
export default Toolbar