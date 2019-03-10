import React from 'react';
import './DrawerToggleButton.css';
class drawerToggleButton extends React.Component {
    render() {
        return (
            <button className='toggle-button' onClick={this.props.click}>
                <div className="toggle-button_line" />
                <div className="toggle-button_line" />
                <div className="toggle-button_line" />
            </button>
        )
   }
}
export default drawerToggleButton
