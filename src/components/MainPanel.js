import React, { Component } from 'react';
import StatusDisplay from './StatusDisplay.js';

class MainPanel extends Component {
    render() {
        return (
            <div>
                <StatusDisplay volume={this.props.volume} />
            </div>
        )
    }
}

export default MainPanel;