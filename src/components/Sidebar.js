import React, { Component } from 'react';
import PowerButton from './PowerButton.js';

class Sidebar extends Component {
    render() {
        return (
            <div>
                <PowerButton powerOn={this.props.powerOn} onClick={this.props.onPowerOnChange} />
            </div>
        )
    }
}

export default Sidebar;