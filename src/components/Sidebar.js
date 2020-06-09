import React, { Component } from 'react';
import BalanceControl from './BalanceControl.js';
import PowerButton from './PowerButton.js';
import VolumeControl from './VolumeControl.js';

class Sidebar extends Component {
    render() {
        return (
            <div>
                <PowerButton powerOn={this.props.powerOn} onClick={this.props.onPowerOnChange} />
                <VolumeControl 
                    onClickVolumeUp={this.props.onVolumeUp}  
                    onClickVolumeDown={this.props.onVolumeDown}
                />
                <BalanceControl 
                    onClickBalanceUp={this.props.onBalanceUp}  
                    onClickBalanceDown={this.props.onBalanceDown}
                />
            </div>
        )
    }
}

export default Sidebar;