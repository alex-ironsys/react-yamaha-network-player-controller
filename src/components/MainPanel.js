import React, { Component } from 'react';
import StatusDisplay from './StatusDisplay.js';

class MainPanel extends Component {
    render() {
        return (
            <div>
                <StatusDisplay balance={this.props.balance} powerOn={this.props.powerOn} volume={this.props.volume} />
            </div>
        )
    }
}

export default MainPanel;