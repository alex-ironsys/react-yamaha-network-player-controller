import React, { Component } from 'react';

class StatusDisplay extends Component {
    render() {
        return (
            <div className="display">
                VOLUME {this.props.volume}
            </div>
        )
    }
}

export default StatusDisplay;