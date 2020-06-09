import React, { Component } from 'react';

class StatusDisplay extends Component {
    render() {
        var className = 'display';
        if (!this.props.powerOn) {
            className += ' display-off';
        }

        return (
            <div className={className}>
                VOLUME {this.props.volume}<br />
                BALANCE {this.props.balance}<br />
            </div>
        )
    }
}

export default StatusDisplay;