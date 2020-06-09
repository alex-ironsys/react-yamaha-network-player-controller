import React, { Component } from 'react';

class VolumeControl extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.onClickVolumeDown}>Volume Down</button>
                <button onClick={this.props.onClickVolumeUp}>Volume Up</button>
            </div>
        )
    }
}

export default VolumeControl;