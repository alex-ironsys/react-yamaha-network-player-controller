import React, { Component } from 'react';
import SourceControl from './SourceControl.js';
import StatusDisplay from './StatusDisplay.js';

class MainPanel extends Component {
    render() {
        return (
            <div>
                <SourceControl 
                    inputSource={this.props.inputSource} 
                    onInputSourceChange={this.props.onInputSourceChange}
                />
                <StatusDisplay 
                    balance={this.props.balance}
                    powerOn={this.props.powerOn} 
                    volume={this.props.volume}
                />
            </div>
        )
    }
}

export default MainPanel;