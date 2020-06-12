import React, { Component } from 'react';

class PlayerInfoDisplay extends Component {
    render() {
        var className = 'display';
        if (!this.props.powerOn) {
            className += ' display-off';
        }

        return (
            <div className={className}>
                <h2>{this.props.artist}</h2>
                <h3>{this.props.song}</h3>
                {this.props.album}
            </div>
        )
    }
}

export default PlayerInfoDisplay;